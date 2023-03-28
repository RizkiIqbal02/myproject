function login(){
    let id = document.getElementById("id").value
    let pw = document.getElementById("pw").value

    if (id == "iqbal" && pw == "123") {
        window.location.href = "../index.html"
    } else {
        let alert = document.getElementById("alert")
        alert.style.display = "inline"
    }
    return false
}