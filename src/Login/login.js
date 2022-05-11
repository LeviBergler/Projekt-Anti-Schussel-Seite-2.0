const value = localStorage.getItem("youtube.com/achd3euf7")
if (value == "youtube.com/gef6b3kl5") {
    window.location.href = "../home/index.html"
}

function login() {
const username = document.getElementById("Username").value
const password = document.getElementById("Password").value

if (username == atob("TGVocmVy") && password == atob("VXNlcl8xNw==")) {
    localStorage.setItem("youtube.com/achd3euf7", "youtube.com/gef6b3kl5")
    window.location.href = "../home/index.html"
} else {
    document.getElementById("LoginFailed").innerHTML = "Anmeldung fehlgeschlagen"
    const button = document.getElementById("loginButton")
    button.innerHTML = "Gesperrt für 15 Sekunden"
    button.setAttribute("disabled", "disabled")
    setTimeout(
        () => {
            button.removeAttribute("disabled")
            button.innerHTML = "Login"
            document.getElementById("LoginFailed").innerHTML = ""
        }, 15000
    )
}
}