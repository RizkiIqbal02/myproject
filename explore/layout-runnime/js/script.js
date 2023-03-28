const karakter = document.getElementById("chara"); // mengambil id div karakter dari elemen html (manipulasi DOM)
const kaktus = document.getElementById("kaktus"); // mengambil id div kaktus dari elemen html (manipulasi DOM)

this.addEventListener("keydown", ({ keyCode }) => { // menambahkan event keycode 32 atau enter untuk fungsi lompat
    switch (keyCode) {
      case 32:
        ngajleng(); // pengambilan function lompat
        break;
    }
  });
function go(){
    kaktus.classList.add("start"); // menambah kelas start pada div kaktus, yang dimana pada class tersebut berisi animasi kaktus yang bergeser dari kanan ke kiri
}
function ngajleng(){
    if (karakter.classList != "ngajleng") {
        karakter.classList.add("ngajleng"); // menambahkan class ngajleng yang berisi animasi karakter yang melompat, atau naik ke atas sebanyak 350px
    }
    setTimeout(() => {
        karakter.classList.remove("ngajleng"); // menghapuskan class ngajleng yang telah di tambahkan setelah 0,3 detik berlalu
    }, 300);
}

let cek = setInterval(() => { // function ini berfungsi sebagai pengecekkan apakah posisi kaktus dan karakter bersentuhan atau tidak
    let posisiKarakter = parseInt(window.getComputedStyle(karakter).getPropertyValue("top")); // mengambil value dari posisi top karakter
    let posisiKaktus = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left")); // mengambil value dari posisi left kaktus
    if (posisiKaktus < 100 && posisiKaktus > 0 && posisiKarakter >= 330){ // function ini berfungsi mengecek jika posisi kaktus dan karakter sesuai dengan perkondisian
        alert("Kamu kalah karena sudah menginjak kaktus yang tidak berdosa"); // jika iya maka sebuah alert akan keluar
        location.reload(); // lalu jika alert di klik (ok) maka function ini akan dijalankan untuk me reload halaman
    }
},100)