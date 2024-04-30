async function userfetchBook() {
    try {
        const response = await fetch('/book');
        const konyvek = await response.json();

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
                        <div class="card-body border border-1 border-light">
                            <div class="row kartyacim">
                                <div class="szoveg">
                                    <h3 class="cim">${konyv.book_title}</h3>
                                    <h5 class="szerzo">${konyv.writer_name}</h5>
                                </div>
                                <div class="olvasasgomb">
                                    <button type="button" onclick="notFound('${konyv.book_path}')" class="btn btn-secondary">
                                        <i class="fa-solid fa-book-open"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center" id=${konyv.book_id}>
                            <div class="row">
                                <div class="col-12 csillag-sor">
                                    <div class="csillagok">
                                        <i id="star1-${konyv.book_id}" class="fa-regular fa-star text-warning"></i>
                                        <i id="star2-${konyv.book_id}" class="fa-regular fa-star text-warning"></i>
                                        <i id="star3-${konyv.book_id}" class="fa-regular fa-star text-warning"></i>
                                        <i id="star4-${konyv.book_id}" class="fa-regular fa-star text-warning"></i>
                                        <i id="star5-${konyv.book_id}" class="fa-regular fa-star text-warning"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        document.getElementById("book-list").innerHTML = bookHTML;

        const stars = document.querySelectorAll('.fa-regular.fa-star.text-warning');
        stars.forEach(star => {
            star.addEventListener('mouseenter', function () {
                const index = parseInt(star.id.replace('star', ''));
                const stars = Array.from(star.parentElement.children);
                highlightStars(stars, index);
            });
        });

        const starsContainer = document.querySelectorAll('.card-footer');

        starsContainer.forEach(starsContainer => {
            starsContainer.addEventListener('mouseleave', function () {
                const stars = Array.from(this.children);
                const selectedStarsCount = parseInt(this.dataset.selectedStarsCount) || 0;
                highlightStars(stars, selectedStarsCount);
            });

            const stars = starsContainer.querySelectorAll('.fa-regular.fa-star.text-warning');
            stars.forEach(star => {
                star.addEventListener('click', async function () {
                    const starId = star.id;
                    const index = parseInt(starId.replace('star', ''));
                    const rating = index;

                    const cardId = star.closest('.card-footer').id;
                    const userID = document.getElementById('userID').value;

                    const res = await fetch(`/rating/${cardId}/${userID}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ rating })
                    });

                    const datas = await res.json();
                    console.log(datas);
                    if (datas.ok) {
                        fetchSeries();
                        console.log('fetchseries lefutott');
                    }
                });
            });
        });
    } catch (error) {
        console.error('Hiba a könyvek lekérdezésekor:', error);
    }
}

// a csillagok átalakítása és visszaalakítása attól függően, hogy hol áll az egérmutató
function highlightStars(stars, index) {
    stars.forEach((star, i) => {
        if (i < index) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid');
        } else {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular');
        }
    });
}

function notFound(book_path) {
    if (book_path === 'fileNotFound.html') {
        window.location.href = '/fileNotFound.html';
    } else {
        window.location.href = `/pdf/${book_path}`;
    }
}
