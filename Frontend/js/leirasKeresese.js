// keresés a könyvek leírások között
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
    document.getElementById('reszletek').innerHTML = '<h3 class="text-center m-4">Nincs találat...</h3>';
  } else {
    let bookHTML = '';
    for (let konyv of konyvek) {
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

    document.getElementById('reszletek').innerHTML = bookHTML;
  }
}