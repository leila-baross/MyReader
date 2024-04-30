async function fetchBook() {
    try {
        const response = await fetch('/book');
        if (!response.ok) {
            throw new Error('Hiba a könyvek lekérdezésekor.');
        }
        const konyvek = await response.json();
        let bookHTML = '';
        bookHTML += `
        <div class="col-xxl-3 col-xl-4 col-md-6 col-sm-12">
            <div class="">
                <button id="addButton" class="btn addNewBookButton" onclick="newBookModal()">
                    <i class="fa-solid fa-circle-plus fa-2xl" style="color: white;"></i>
                </button>
            </div>
        </div>
        `;
        for (let konyv of konyvek) {
            bookHTML += `
            <div class="col-xxl-3 col-xl-4 col-md-6 col-sm-12 text-center">
                <div class="card text-white kartyak border-light" style="max-width: 18rem;">
                    <div class="card-header p-3 border border-1 border-light bg-transparent">
                        <div class="konyvfordulas">
                            <div class="column col-xxl-3 col-xl-3 col-md-4 col-sm-6">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="images/${konyv.book_pic}" class="borito" title="${konyv.book_title}">
                                        </div>
                                        <div class="flip-card-back">
                                            <p class="mufaj">${konyv.book_genre}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body border border-1 border-light">
                        <div class="row kartyacim">
                            <div class="szoveg">
                                <p class="cim">${konyv.book_title}</p>
                                <p class="szerzo">${konyv.writer_name}</p>
                            </div>
                            <div class="olvasasgomb">
                                <button type="button" onclick="notFound('${konyv.book_path}')" class="btn btn-secondary">
                                    <i class="fa-solid fa-book-open"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer footer">
                        <button class="btn btn-outline-warning editbtn" onclick="editBook(${konyv.book_id})">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <p class="rate" title="${konyv.book_title} átlag értékelése">${konyv.rating} %</p>
                        <button class="btn btn-outline-danger float-end delbtn" onclick="deleteBook(${konyv.book_id})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        }
        document.getElementById('book-list').innerHTML = bookHTML; // Frissítjük a könyvlistát
    } catch (error) {
        console.error('Hiba a könyvek lekérdezésekor:', error);
        // Kezeljük a hibát, például kiírhatunk egy hibaüzenetet a felhasználónak
        Swal.fire({
            title: 'Hiba a könyvek lekérdezésekor. Kérlek, próbáld újra később!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
    }
}

function notFound(book_path) {
    if (book_path === 'fileNotFound.html') {
        // ~ Hiba üzenetet küld, ha nincs feltöltve könyv ~ \\
        Swal.fire({
            title: 'Nem töltöttél fel könyvet!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
    } else {
        // ~ Ha van könyv feltöltve, akkor átírányit ~ \\
        window.location.href = `/pdf/${book_path}`;
    }
}
