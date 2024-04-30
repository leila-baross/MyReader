// --- Könyv szerkesztése --- \\
// ~ Modal ablak mutatása, és a megfelelő id eltárolása a modal-on belül ~ \\
async function editBook(id) {
    // ---
    // ~ Itt feltöltjük a modal ablak input mezőit a megfelelő adatokkal ~ \\
    // ---
    const res = await fetch(`/books/${id}`);
    const data = await res.json();

    const title = data[0].book_title;
    const writer = data[0].writer_name;
    const genre = data[0].book_genre;
    const sub = data[0].book_sub;
    const publisher = data[0].book_publisher;
    
    document.getElementById('editBookTitle').value = title;
    document.getElementById('editBookWriter').value = writer;
    document.getElementById('editBookGenre').value = genre;
    document.getElementById('editBookSub').value = sub;
    document.getElementById('editBookPublisher').value = publisher;

    // --- \\
    // ~ Itt hozzáadjuk a könyv id-ját a modal ablak attribútumaihoz ~ \\
    // --- \\
    const modal = new bootstrap.Modal(document.getElementById('updateBookModal')); //a html-ből az updateSeriesModal azonosítójú modal minden adatát kinyerjük 
    const bookID = document.getElementById('updateBookModal'); // itt visszakapjuk a teljes html tartalmat a modal ablakból 
    bookID.setAttribute('data-bookID', id); // új attribútumot adtunk hozzá a modal html kódjához, így megmarad majd az azonosítónk
    modal.show(); // ezzel megjelenítem a modal ablakot

}

// ~ A backend-el való kapcsolatfelvétel ~ \\
async function updateBookData() {
    const modal = document.getElementById('updateBookModal'); // egy változóba kinyerem id alapján a modal tartalmát
    const id = modal.getAttribute('data-bookID'); // kinyerjük a megfelelő azonosítót a modal ablakból
    const modalElements = document.getElementById('updateBookModal');
    const modal2 = bootstrap.Modal.getInstance(modalElements);

    const title = document.getElementById('editBookTitle').value;
    const writer = document.getElementById('editBookWriter').value;
    const image = document.getElementById('editBookImage').files[0];
    const bookPath = document.getElementById('editBookPath').files[0];
    const bookGenre = document.getElementById('editBookGenre').value;
    const bookSub = document.getElementById('editBookSub').value;
    const bookPublisher = document.getElementById('editBookPublisher').value;

    const response = await fetch('/newWriter', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ writer })
    });

    const data = await response.json();
    const writerID = data[0].writer_id;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('writerID', writerID);
    formData.append('image', image);
    formData.append('bookGenre', bookGenre);
    formData.append('bookSub', bookSub);
    formData.append('bookPublisher', bookPublisher);
    console.log(`első formdata: ${formData}`);
    const res = await fetch(`/book/${id}`, {
        method: "PUT",
        body: formData
    });

    const data2 = await res.json();

    if (data2.success) {
        const formData2 = new FormData();
        formData2.append('bookPath', bookPath);

        const res2 = await fetch(`/editBookPDF/${id}`, {
            method: "POST",
            body: formData2
        });

        const data3 = await res2.json();

        if (data3.success) {
            document.getElementById('editBookTitle').value = null;
            document.getElementById('editBookWriter').value = null;
            document.getElementById('editBookGenre').value = null;
            document.getElementById('editBookSub').value = null;
            document.getElementById('editBookPublisher').value = null;
            Swal.fire({
                title: 'Sikeres módosítás!',
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then((result) =>{
                if (result.success) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hiba a módosítás során!"
                    });
                } 
            });
            modal2.hide();
            fetchBook();
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hiba a szerkesztés során!"
        });
    }
}

