// ~ LOGOUT ~ \\

async function logout() {
    const res = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

    const data = await res.json();

    if(data.success) {
        window.location.href= '/';
    } else {
        console.log(`Hiba a kijelentkezéskor: ${data.message}`);
    }
}