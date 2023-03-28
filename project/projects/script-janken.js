function getComChoice() {
    const com = Math.random();
    if (com < 0.34) return 'kertas';
    if (com >= 0.34 && com < 0.67) return 'gunting';
    return 'batu'
}
function getResult(p1 , com) {
    if (p1 == com) return 'HAHAHA DRAW!!';
    if (p1 == 'kertas') return (com == 'gunting') ? 'YOU LOSER!!!' : 'YOU ARE LUCKY!';
    if (p1 == 'gunting') return (com == 'batu') ? 'YOU LOSER!!!' : 'YOU ARE LUCKY!';
    if (p1 == 'batu') return (com == 'kertas') ? 'YOU LOSER!!!' : 'YOU ARE LUCKY!';
}

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function(){
    const pilihanCom = getComChoice();
    const pilihanPlayer = pKertas.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const computer = document.querySelector('.pilihan-Comp');
    computer.innerHTML = pilihanCom
    const orang = document.querySelector('.pilihan-Orang');
    orang.innerHTML = pilihanPlayer

    const info = document.querySelector('.hasil');
    info.innerHTML = hasil;
});
const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function(){
    const pilihanCom = getComChoice();
    const pilihanPlayer = pGunting.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const computer = document.querySelector('.pilihan-Comp');
    computer.innerHTML = pilihanCom
    const orang = document.querySelector('.pilihan-Orang');
    orang.innerHTML = pilihanPlayer

    const info = document.querySelector('.hasil');
    info.innerHTML = hasil;
});
const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function(){
    const pilihanCom = getComChoice();
    const pilihanPlayer = pBatu.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const computer = document.querySelector('.pilihan-Comp');
    computer.innerHTML = pilihanCom
    const orang = document.querySelector('.pilihan-Orang');
    orang.innerHTML = pilihanPlayer

    const info = document.querySelector('.hasil');
    info.innerHTML = hasil;
});
