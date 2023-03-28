const karakter = document.getElementById("chara");
const kaktus = document.getElementById("kaktus");
let counter;
function ngajleng(){
    if (karakter.classList != "ngajleng") {
        karakter.classList.add("ngajleng");
    }
    setTimeout(() => {
        karakter.classList.remove("ngajleng");
    }, 300);
}

let cek = setInterval(() => {
    let posisiKarakter = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    let posisiKaktus = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));
    if (posisiKaktus < 100 && posisiKaktus > 0 && posisiKarakter >= 330){
        alert("awokawok ccd");
        location.reload();
    }
},100)