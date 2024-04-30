async function getAllUser() {
    const res = await fetch('/getAllUser');
    const users = await res.json();

    tableRow(users);

}

// keresés a megadott szűrésnek megfelelően
document.getElementById('searchingForm').onsubmit = async function (event) {
    event.preventDefault();

    const columnNames = {
        1: 'email',
        2: 'nick_name',
        3: 'role'
    };
    let searching = event.target.elements.searching.value;
    const searchingType = columnNames[event.target.elements.searchType.value];

    //console.log(searching, searchingType);

    if (searchingType === 'role') {
        if (searching === 'user' || searching === "0") {
            searching = 0;
        }
        else if (searching === 'admin' || searching === "1") {
            searching = 1;
        } else {
            Swal.fire({
                icon: "error",
                title: '<span class="nemokes">Oops...</span>',
                text: 'Csak 0-t, 1-et vagy admin vagy user kulcsszót adhatsz meg!',
            });
            return;
        }
    }

    //console.log(searching, searchingType);

    const res = await fetch('/searchingUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searching, searchingType })
    });

    const users = await res.json();
    if (users.length === 0) {
        document.getElementById('users').confirmed = 
        Swal.fire({
            title: '<span class="war">Nincs ilyen találat!</span>',
            icon: 'warning',
            confirmButtonText: 'Ok'
          });
    } else {
        tableRow(users);
    }

}

// az adatok táblázatba írása
function tableRow(users) {
    let usersHTML = '';
    for (let user of users) {
        usersHTML +=
            `
                <tr>
                    <td>${user.user_id}</td>
                    <td>${user.email}</td>
                    <td>${user.nick_name}</td>
                    <td>${user.role === 0 ? 'user' : 'admin'}</td>
                    <td>
                    <button type="button" class="btn" id="szerkesztes" title="Szerepkör szerkesztése" onclick="editRole(${user.user_id})">
                        <i class="fa-solid fa-user-pen"></i>
                    </button>
                    </td>
                    <td>
                    <button type="button" class="btn" id="torles" title="Profil törlése" onclick="deleteUser(${user.user_id})">
                        <i class="fa-solid fa-user-xmark"></i>
                    </button>
                    </td>
                </tr>
        `;
    }
    document.getElementById('users').innerHTML = usersHTML;
}

// szerepkör módosításának modal ablak megjelenítése
function editRole(userID) {
    const modal = new bootstrap.Modal(document.getElementById('editRoleModal'));
    const id = document.getElementById('editRoleModal');
    id.setAttribute('data-userID', userID);
    modal.show();
}

// a szerepkör módosítása
async function changeRole() {
    const modalElements = document.getElementById('editRoleModal');
    const id = modalElements.getAttribute('data-userID'); // Módosítás itt: 'data-userID'
    const modal = bootstrap.Modal.getInstance(modalElements);
    //console.log(id);
    const editRole = document.getElementById('editRole').value;
    //console.log(editRole);
    if (editRole === 'user' || editRole === 'admin' || editRole === '0' || editRole === '1') {
        const res = await fetch(`/editRole/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ editRole })
        });

        const data = await res.json();
        //console.log(data);
        if (data.success) {
            modal.hide();
            Swal.fire({
                title: '<span class="okes">Sikeres szerepkör módosítás!</span>',
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then((result) =>{
                if (result.success) {
                    Swal.fire({
                        icon: "error",
                        title: '<span class="nemokes">Oops...</span>',
                        text: 'Hiba történt a szerepkör módosítása közben!'
                    });
                } 
            });
            getAllUser();
        }
    } else {
        Swal.fire({
            icon: "error",
            title: '<span class="nemokes">Oops...</span>',
            text: 'Csak 0-t, 1-et vagy admin vagy user kulcsszót adhatsz meg!'
        });
        return;
    }
}

// felhasználó törlése
async function deleteUser(id) {
    const confirmed = 
    Swal.fire({
        title: '<spam class="bizti">Biztos törölni szeretnéd?</span>',
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
        const res = fetch(`/deleteUser/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });
    
        if (result.isConfirmed) {
            getAllUser(); 
            Swal.fire({
                title: '<span class="okes">Sikeres törlés!</span>',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        } 
      });
}