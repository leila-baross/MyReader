// keresés a könyvek között
document.getElementById('searchingForm').onsubmit = async function (event) {
    event.preventDefault();

    const searching = event.target.elements.searching.value;

    const res = await fetch('/searching', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ searching })
    });
    const response = await fetch('/book');
    const konyvek = await res.json();

    if (konyvek.length === 0) {
        document.getElementById('book-list').innerHTML = '<h3 class="text-center m-4">Nincs találat...</h3>';
    } else {
        let bookHTML = '';
        for (let konyv of konyvek) {
            bookHTML += `
            <div class="col-xxl-3 col-xl-3 col-md-4 col-sm-6 text-center">
        <div class="card text-white kartyak border-light" style="max-width: 18rem;">
            <div class="card-header p-3 border border-1 border-light bg-transparent">
                <div class="konyvfordulas">
                    <div class="col-xxl-3 col-xl-3 col-md-4 col-sm-6">
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
            <div class="card-body border border-1 border-light" id="datatable">
                <div class="row kartyacim">
                    <div class="col-sm-8 szoveg">
                        <h3>${konyv.book_title}</h3>
                        <h5>${konyv.writer_name}</h5>
                    </div>
                    <div class="col-sm-4">
                        <button type="button" onclick="notFound('${konyv.book_path}')" class="btn btn-secondary">
                            <i class="fa-solid fa-book-open"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-footer text-center" id=${konyv.book_id}>
            <div class="row">
                <div class="col-12 csillag-sor">
                    <i id="star1" class="fa-regular fa-star text-warning"></i>
                    <i id="star2" class="fa-regular fa-star text-warning"></i>
                    <i id="star3" class="fa-regular fa-star text-warning"></i>
                    <i id="star4" class="fa-regular fa-star text-warning"></i>
                    <i id="star5" class="fa-regular fa-star text-warning"></i>
                </div>
            </div>
        </div>

        </div>
    </div>
        `
        }

        document.getElementById('book-list').innerHTML = bookHTML;
    }
}