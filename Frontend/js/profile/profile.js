// változók a jelszó módosításához
const myInput = document.getElementById('editPassword');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');

// oldalról beúszó profil menü megjelenítése
const profile = document.getElementById('profile');
const offcanvas = new bootstrap.Offcanvas(document.getElementById('editProfile'));

profile.addEventListener('click', function () {
    offcanvas.show();
});

// felhasználó email címének kinyerése cookieból:
async function getUserEmail() {
    const res = await fetch('/getUserEmail');
    const data = await res.json();

    const email = data.userEmail;

    getUser(email);
}

// a felhasználó adatainak lekérdezése és oldalsó menübe írása valamint a felhasználó id-ja
async function getUser(emailFromCookie) {
    const res = await fetch(`/getUser/${emailFromCookie}`);
    const data = await res.json();

    const image = data[0].user_image;
    const username = data[0].nick_name;
    const email = data[0].email;
    const birthday = data[0].formattedBirthday ? data[0].formattedBirthday : "nincs megadva";
    const role = data[0].role;
    const userID = data[0].user_id;
    
    document.getElementById('userID').value = userID;

    let offcanvasBody = `
        <div class="col-sm-12 position-relative"> <!-- profil kép -->
            <img src="../images/${image}" alt="${username}" title="${username}" class="img-fluid mx-auto d-block" style="border-radius: 50%; border: solid 2px" id="userImage">
            <button type="button" class="btn btn-warning border-0 position-absolute" style="right: 20%; bottom: 20%; max-height: 200px;" onclick="editProfileImageModal('${email}')">
                <i class="fa-solid fa-pen"></i>
            </button>
        </div>

        <div class="row"> <!-- username -->
            <div class="col-3">
                <i class="fa-solid fa-user mt-3"></i>
            </div>

            <div class="col-6 p-0">
                <h5 style="font-size:25px;">Felhasználó</h5><br class="d-none">
                <h6 class="text-secondary" id="username" style="font-size:17px;">${username}</h6>
            </div>

            <div class="col-3">
                <button type="button" class="btn btn-warning border-0 mt-2" onclick="editProfileUsernameModal('${email}')">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
        </div>

        <div class="row"> <!-- email -->
            <div class="col-3">
                <i class="fa-solid fa-envelope mt-3"></i>
            </div>

            <div class="col-6 p-0">
                <h5 style="font-size:25px;">E-mail</h5><br class="d-none">
                <h6 class="text-secondary" id="email" style="font-size:17px;">${email}</h6>
            </div>
        </div>

        <div class="row"> <!-- bithday -->
            <div class="col-3">
                <i class="fa-solid fa-cake-candles mt-3"></i>
            </div>

            <div class="col-6 p-0">
                <h5 style="font-size:25px;">Születési dátum</h5><br class="d-none">
                <h6 class="text-secondary" id="birthday" style="font-size:17px;">${birthday}</h6>

            </div>

            <div class="col-3">
                <button type="button" class="btn btn-warning border-0 mt-2" onclick="editProfileBirthdayModal('${email}')">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
        </div>

        <div class="row"> <!-- password -->
            <div class="col-3">
                <i class="fa-solid fa-lock mt-3"></i>
            </div>

            <div class="col-6 p-0">
                <h5 style="font-size:25px;">Jelszó</h5><br class="d-none">
                <h6 class="text-secondary" id="password" style="font-size:17px;">**********</h6>
            </div>

            <div class="col-3">
                <button type="button" class="btn btn-warning border-0 mt-2" onclick="editProfilePasswordModal('${email}')">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
        </div>

        <div class="row"> <!-- role -->
            <div class="col-3">
                <i class="fa-solid fa-person mt-3"></i>
            </div>

            <div class="col-6 p-0">
                <h5 style="font-size:25px;">Szerepkör</h5><br class="d-none">
                <h6 class="text-secondary" id="role" style="font-size:17px;">${role === 0 ? "user" : "admin"}</h6>
            </div>
        </div>
    `;

    document.getElementById('offcanvasBody').innerHTML = offcanvasBody;
}

// a profilkép szerkesztésének modal ablakának megjelenítése
function editProfileImageModal(email) {
    const modal = new bootstrap.Modal(document.getElementById('editProfileImageModal'));
    const profilEmail = document.getElementById('editProfileImageModal');
    profilEmail.setAttribute('data-profilEmail', email);
    modal.show();
}

// a profilkép módosítása
async function editImage() {
    const modalElements = document.getElementById('editProfileImageModal');
    const modal = bootstrap.Modal.getInstance(modalElements);
    const email = modalElements.getAttribute('data-profilEmail');

    const image = document.getElementById('editImage').files[0];
    const formData = new FormData();
    formData.append('image', image);

    const res = await fetch(`/editUserImage/${email}`, {
        method: "PUT",
        body: formData
    });

    if (res.ok) {
        modal.hide();
        Swal.fire({
            position: "top-end",
            title: '<span class="okes">Sikeres profilkép módosítás!</span>',
            icon: 'success',
            timer: 1500
          });
        getUserEmail();
       
    }
}

// a username szerkesztésének modal ablakának megjelenítése
function editProfileUsernameModal(email) {
    const modal = new bootstrap.Modal(document.getElementById('editProfileUsernameModal'));
    const profilEmail = document.getElementById('editProfileUsernameModal');
    profilEmail.setAttribute('data-profilEmail', email);
    modal.show();
}

// a username módosítása
async function editUsername() {
    const modalElements = document.getElementById('editProfileUsernameModal');
    const modal = bootstrap.Modal.getInstance(modalElements);
    const email = modalElements.getAttribute('data-profilEmail');

    const username = document.getElementById('editUsername').value;

    const res = await fetch(`/editUsername/${email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ username })
    });

    if (res.ok) {
        modal.hide();
        Swal.fire({
            position: "top-end",
            title: '<span class="okes">Sikeres felhasználónév módosítás!</span>',
            icon: 'success',
            timer: 1500
          });
        getUserEmail();
     
    }
}

// a születési dátum szerkesztésének modal ablakának megjelenítése
function editProfileBirthdayModal(email) {
    const modal = new bootstrap.Modal(document.getElementById('editProfileBirthdayModal'));
    const profilEmail = document.getElementById('editProfileBirthdayModal');
    profilEmail.setAttribute('data-profilEmail', email);
    modal.show();
}

// a születési dátum módosítása
async function editBirthday() {
    const modalElements = document.getElementById('editProfileBirthdayModal');
    const modal = bootstrap.Modal.getInstance(modalElements);
    const email = modalElements.getAttribute('data-profilEmail');

    const birthday = document.getElementById('editBirthday').value;

    const res = await fetch(`/editBirthday/${email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ birthday })
    });

    if (res.ok) {
        modal.hide();
        Swal.fire({
            position: "top-end",
            title: '<span class="okes">Sikeres születési dátum módosítás!</span>',
            icon: 'success',
            timer: 1500
          });
        getUserEmail();
        
    }
}

// a jelszó módosításának modal ablakának megjelenítése
function editProfilePasswordModal(email) {
    const modal = new bootstrap.Modal(document.getElementById('editProfilePasswordModal'));
    const profilEmail = document.getElementById('editProfilePasswordModal');
    profilEmail.setAttribute('data-profilEmail', email);
    modal.show();
}

// a jelszó módosítása
async function editPassword() {
    const modalElements = document.getElementById('editProfilePasswordModal');
    const modal = bootstrap.Modal.getInstance(modalElements);
    const email = modalElements.getAttribute('data-profilEmail');

    const password = document.getElementById('editPassword').value;

    console.log(`Jelszó: ${password}`);
    if (!password) {
        Swal.fire({
            position: "top-end",
            title: '<span class="nemokes">A mezőt ki kell tölteni!</span>',
            icon: 'error',
            //timer: 1500
          });
        return;
    } else if (password.length < 8) {
        Swal.fire({
            position: "top-end",
            title: '<span class="nemokes">A jelszónak legalább 8 karakter hosszúnak kell lenni!</span>',
            icon: 'error',
            //timer: 1500
          });
        return;
    }

    const res = await fetch(`/editPassword/${email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ password })
    });

    if (res.ok) {
        Swal.fire({
            position: "top-end",
            title: '<span class="okes">Sikeres jelszó módosítás!</span>',
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 1500
          });
        getUserEmail();
        modal.hide();
    }
}