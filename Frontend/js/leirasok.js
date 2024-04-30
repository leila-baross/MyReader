// ~ Könyv leírások (Admin és User oldalra egyaránt) ~ \\
async function konyvLeirasok() {
    const response = await fetch('/book');
    const leirasok = await response.json();
    let bookHTML = '<h1 class="mt-2 mb-2">Leírás</h1>';
    bookHTML = ``;
    for (let konyv of leirasok) {
        bookHTML += `
        <div class="row">
        <div class="col-sm-6 col-12 torzs">
        <p><span class="felkover">Szerző: <br></span><p class="irasok">${konyv.writer_name}</p></p>
        <p><span class="felkover">Cím: <br></span><p class="irasok">${konyv.book_title}</p></p>
        <p><span class="felkover">Kiadó: <br></span><p class="irasok">${konyv.book_publisher}</p></p>
        <p><span class="felkover">Műfaj:<br> </span><p class="irasok">${konyv.book_genre}</p></p>
        </div><br><br>
        <div class="col-sm-6 col-12 sub">
        <p class="irasok">${konyv.book_sub}</p> 
        </div>
        </div>
        <hr class="vonal">
        `
    }
    document.getElementById('reszletek').innerHTML += bookHTML;
}