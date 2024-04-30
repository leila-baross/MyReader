async function deleteBook(id) {
    const confirmed = 
    Swal.fire({
        title: 'Biztos törölni szeretnéd?',
        // text: 'Do you want to continue',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Igen, törlöm!",
        cancelButtonColor: "#A79986",
        cancelButtonText: "Mégse"
      }).then((result) =>{
        if (!confirmed) {
            return;
        }
    
        const res = fetch(`/book/${id}`, {
            method: "DELETE"
        });
    
        if (result.isConfirmed) {
            // Sikeres törlés, frissítjük a kliensoldali könyvlistát
            fetchBook(); 
            Swal.fire({
                title: 'Sikeres törlés!',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        } 
      });
}
