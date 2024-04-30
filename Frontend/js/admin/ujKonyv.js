// ~ Új könyv hozzáadása ~ \\
async function createNewBook() {
    const modalElements = document.getElementById('createBookModal');
    const modal = bootstrap.Modal.getInstance(modalElements);
    
    const title = document.getElementById('newTitle').value;
    const writer = document.getElementById('newWriter').value;
    const image = document.getElementById('newImage').files[0];
    const bookPath = document.getElementById('newBookPath').files[0];
    const bookGenre = document.getElementById('newBookGenre').value;
    const bookSub = document.getElementById('newBookSub').value;
    const bookPublisher = document.getElementById('newBookPublisher').value;

    // ~ Ellenőrzések, adatok feldolgozása stb. ~ \\
    try {
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

        const res = await fetch('/book', {
            method: "POST",
            body: formData
        });
        const data2 = await res.json();
        console.log(data2);

        if (data2.length !== null) {
            const formData2 = new FormData();
            formData2.append('bookPath', bookPath);
            console.log(formData2);

            const res2 = await fetch(`/bookPDF/${data2[0].book_id}`, {
                method: "POST",
                body: formData2
            });

            const data3 = await res2.json();

            if (data3.success) {
                document.getElementById('newTitle').value = null;
                document.getElementById('newWriter').value = null;
                document.getElementById('newBookGenre').value = null;
                document.getElementById('newBookSub').value = null;
                document.getElementById('newBookPublisher').value = null;
                Swal.fire({
                    title: 'Sikeres felvétel!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  }).then((result) =>{
                    if (result.success) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Hiba a szerverrel való kommunikáció során!"
                        });
                    } 
                });
                modal.hide();
                fetchBook();
            } 
        }
    } catch (error) {
        console.error('Hiba történt:', error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hiba a szerverrel való kommunikáció során!"
          });
    }
}

// ~ Új könyv felvétele ~ \\
function newBookModal() {
    const modal2 = new bootstrap.Modal(document.getElementById('createBookModal'));
    modal2.show();
}