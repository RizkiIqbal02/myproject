
// let box = document.getElementsByClassName('dot');
// let index =90;
// // console.log(box[10]);
// box[index].classList.add('show');

// function roll (value){
//     let rand = Math.random()*6;

//     index = index + value;
//     box[rand].classList.add('show');
    
// }
let index = 90;
let stop, right, topRight, left, topLeft;
let box = document.getElementsByClassName('dot');
box[index].classList.add('show');
function roll() {
    const com = Math.random();
    if (com < 0.34) return 1;
    if (com >= 0.34 && com < 0.67) return 2;
    return 3
}
function roll2() {
    const com = Math.random();
    if (com < 0.34) return 1;
    if (com >= 0.34 && com < 0.67) return 2;
    return 3
}
// function getResult(p1 , com) {
//     if (p1 == com) return 'HAHAHA DRAW!!';
//     if (p1 == 'kertas') return (com == 'gunting') ? 'YOU LOSER!!!' : 'YOU ARE LUCKY!';
//     if (p1 == 'gunting') return (com == 'batu') ? 'YOU LOSER!!!' : 'YOU ARE LUCKY!';
//     if (p1 == 'batu') return (com == 'kertas') ? 'YOU LOSER!!!' : 'YOU ARE LUCKY!';
// }

const dadu = document.querySelector('.dadu');
dadu.addEventListener('click', function(){
    const rand1 = roll();
    const rand2 = roll2();
    const rand = rand1+rand2;

    const info = document.querySelector('.dadu');
    info.innerHTML = rand;
    move(rand)
});

function move(step){
    index = index + step;
    let box = document.getElementsByClassName('dot');
    

    if (index > 99){
        kanan(index, 99, 89);
        index = stop;
    } 
    else if (stop <= 89 && stop > 79){
        let total = stop-step;
        stop = total;
        index = stop;
    }
    box[index].classList.add('show');
}

function kanan(index, right, topRight){
    let mod = index % right;
    let total = topRight-mod+1;
    index = total
    stop = total;
    box[index].classList.add('show');
}

// function kanan(index){
//     let mod = index % 99;
//     let total = 89-mod+1;
//     index = total
//     stop = total;
//     box[index].classList.add('show');
// }