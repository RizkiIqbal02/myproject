function getComChoice() {
    const com = Math.random();
    if (com < 0.34) return '🖐';
    if (com >= 0.34 && com < 0.67) return '🖖';
    return '✊'
}
function getResult(p1 , com) {
    if (p1 == com) return 'SERI';
    if (p1 == '🖐') return (com == '🖖') ? 'KALAH' : 'MENANG';
    if (p1 == '🖖') return (com == '✊') ? 'KALAH' : 'MENANG';
    if (p1 == '✊') return (com == '🖐') ? 'KALAH' : 'MENANG';
}

const pKertas = document.querySelector('.🖐');
pKertas.addEventListener('click', function(){
    const pilihanCom = getComChoice();
    const pilihanPlayer = pKertas.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const computer = document.querySelector('.pilihan-Comp');
    computer.innerHTML = pilihanCom

    const info = document.querySelector('.hasil');
    info.innerHTML = 'computer memilih : '+ pilihanCom + '<br>pilihan kamu : ' + pilihanPlayer +'<br>kamu &nbsp'+ hasil;
});
const pGunting = document.querySelector('.🖖');
pGunting.addEventListener('click', function(){
    const pilihanCom = getComChoice();
    const pilihanPlayer = pGunting.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const computer = document.querySelector('.pilihan-Comp');
    computer.innerHTML = pilihanCom

    const info = document.querySelector('.hasil');
    info.innerHTML = 'computer memilih : '+ pilihanCom + '<br>pilihan kamu : ' + pilihanPlayer +'<br>kamu &nbsp'+ hasil;
});
const pBatu = document.querySelector('.✊');
pBatu.addEventListener('click', function(){
    const pilihanCom = getComChoice();
    const pilihanPlayer = pBatu.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const computer = document.querySelector('.pilihan-Comp');
    computer.innerHTML = pilihanCom

    const info = document.querySelector('.hasil');
    info.innerHTML = 'computer memilih : '+ pilihanCom + '<br>pilihan kamu : ' + pilihanPlayer +'<br>kamu &nbsp'+ hasil;
});