const value = localStorage.getItem("youtube.com/achd3euf7")
if (value !== "youtube.com/gef6b3kl5") {
    window.location.href = "../login/login.html"
}

function logout() {
    localStorage.removeItem("youtube.com/achd3euf7")
    window.location.reload()
}
