function forRegister() {
    window.location.href = '/registration.html';
}

// login
document.getElementById('loginForm').onsubmit = async function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const res = await fetch('/login', {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const data = await res.json();

    if (data.success) {
        if(data.user.role === 1)
        {
            window.location.href = '/admin_kezdolap.html';
        }else if(data.user.role === 0){
            window.location.href = '/kezdolap.html';
        }
    }
    else {
        Swal.fire({
            title: "Minden mezőt ki kell tölteni!",
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}