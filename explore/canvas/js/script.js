let canvas = document.getElementById("canvas");
canvas.width = 1024;
canvas.height = 576;

const konteks = canvas.getContext("2d");
const gravitasi = 0.5;

class Pulau {
  constructor({ x, y }) {
    this.posisi = {
      y,
      x,
    };
    this.lebar = 600;
    this.tinggi = 300;
  }
  draw() {
    konteks.fillStyle = "blue";
    konteks.fillRect(this.posisi.x, this.posisi.y, this.lebar, this.tinggi);
  }
}

class Pemain {
  constructor() {
    this.posisi = {
      y: 100,
      x: 100,
    };
    this.gerak = {
      x: 0,
      y: 1,
    };
    this.lebar = 50;
    this.tinggi = 50;
  }
  draw() {
    konteks.fillStyle = "red";
    konteks.fillRect(this.posisi.x, this.posisi.y, this.lebar, this.tinggi);
  }
  update() {
    this.draw();
    this.posisi.y += this.gerak.y;
    this.posisi.x += this.gerak.x;
    this.gerak.y += gravitasi;
    if (this.posisi.y + this.tinggi + this.gerak.y <= canvas.height) {
      this.gerak.y += gravitasi;
    } else {
      this.gerak.y = 0;
    }
  }
}

const pemain = new Pemain();
const pulau2 = [new Pulau({ x: 0, y: 470 }), new Pulau({ x: 600, y: 470 })];
const tombol = {
  kanan: {
    dipencet: false,
  },
  kiri: {
    dipencet: false,
  },
};

let menang = 0;
function animation() {
  requestAnimationFrame(animation);
  konteks.fillStyle = 'green';
  konteks.fillRect(0, 0, canvas.width, canvas.height);
  
  pulau2.forEach((pulau) => {
    pulau.draw();
  });
  pemain.update();
  if (tombol.kanan.dipencet && pemain.posisi.x <= 800) {
    pemain.gerak.x = 5;
  } else if (tombol.kiri.dipencet && pemain.posisi.x >= 0) {
    pemain.gerak.x = -5;
  } else {
    pemain.gerak.x = 0;
    if (tombol.kanan.dipencet) {
      menang += 5;
      pulau2.forEach((pulau) => {
        pulau.posisi.x -= 5;
      });
    } else if (tombol.kiri.dipencet) {
      menang -= 5;
      pulau2.forEach((pulau) => {
        pulau.posisi.x += 5;
      });
    }
  }

  pulau2.forEach((pulau) => {
    if (pemain.posisi.y + pemain.tinggi <= pulau.posisi.y && pemain.posisi.y + pemain.tinggi + pemain.gerak.y >= pulau.posisi.y && pemain.posisi.x + pemain.lebar >= pulau.posisi.x && pemain.posisi.x <= pulau.posisi.x + pulau.lebar) {
      pemain.gerak.y = 0;
    }
  });
  if (menang >= 2000) {
    alert("menang");
  }
}

animation();

this.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 87:
      pemain.gerak.y -= 40;
      break;
    case 68:
      tombol.kanan.dipencet = true;
      break;
    case 65:
      tombol.kiri.dipencet = true;
      break;
    case 83:
      break;
  }
});
this.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 87:
      console.log("atas");
      pemain.gerak.y -= 0;
      break;
    case 68:
      tombol.kanan.dipencet = false;
      break;
    case 65:
      tombol.kiri.dipencet = false;
      break;
    case 83:
      break;
  }
});
