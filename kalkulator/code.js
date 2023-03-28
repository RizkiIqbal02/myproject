 // console log
 console.log("Hello World")
 console.log(100 + 100)
 console.log(true && false)

 var nama = "Farhan Farisi"
 console.log(nama)

 var nomor1 = 100
 var nomor2 = 200
 console.log(nomor1 + nomor2)

 // ketika tombol ubah di klik, ubah elemen yang id nya #nama menjadi "Hello World"

 // 1. definisikan / select dulu elemennya dengan document.getElementById
 var namaku = document.getElementById("nama")
 var tombol = document.getElementById("btn")

 // 2. definisikan perilaku elemen tombol
 tombol.onclick = function() {
     // 3. ubah isi elemen (innerHTML) namaku jadi "Hello World" 
     namaku.innerHTML = "Hello World"
 }