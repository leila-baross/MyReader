const myInput = document.getElementById('registerPassword');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');

function forLogin() {
    window.location.href = '/';
}

// Amikor beleklikkelünk a jelszó mezőbe, akkor megjelenik a message id-jű div
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// Amikor nem vagyunk a jelszó mezőben, akkor eltűnik a message id-jű div
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

document.getElementById('registerForm').onsubmit = function (event) {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const nickName = document.getElementById('registerNickName').value;
    const password = document.getElementById('registerPassword').value;
    const password2 = document.getElementById('registerPassword2').value;

    //console.log(email, nickName, password, password2);

    if (!email || !nickName || !password || !password2) {
        Swal.fire({
            title: 'Minden mezőt ki kell tölteni te balga!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        return;
    }

    if (password.length < 8) {
        Swal.fire({
            title: 'A jelszónak legalább 8 karakter hosszúnak kell lenni te csacsi!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        return;
    }

    if (password !== password2) {
        Swal.fire({
            title: 'A két jelszó nem egyezik meg te butus!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        return;
    }

    registration(email, nickName, password);
}

// itt történik a tényleges regisztráció
async function registration(email, nickName, password) {

    const res = await fetch('/registration.html', {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            email: email,
            nickName: nickName,
            password: password
        })
    })

    const data = await res.json();

    if (res.ok) {
        Swal.fire({
            title: JSON.stringify(data),
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    } else {
        Swal.fire({
            title: JSON.stringify(data),
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
    
}