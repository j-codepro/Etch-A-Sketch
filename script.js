const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRainbow =  document.createElement('button');
const btnSize =  document.createElement('button');

function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
         
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

function greyColor() {
    const boxs = container.querySelectorAll('.box');
    btnGrey.textContent = 'GREY';
    btnGrey.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let rNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${rNum}, ${rNum}, ${rNum})`;
        }))
    })

    buttonsContainer.appendChild(btnGrey).classList.add('btn');
}

function blackColor() {
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}

function rainbowColor() {
    const boxs = container.querySelectorAll('.box');
    btnRainbow.textContent = 'RAINBOW';
    btnRainbow.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let rNum1 = Math.floor(Math.random() * 255)
            let rNum2 = Math.floor(Math.random() * 255)
            let rNum3 = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${rNum1}, ${rNum2}, ${rNum3})`;
        }))
    })

    buttonsContainer.appendChild(btnRainbow).classList.add('btn');
}

function reSet() {
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
}

function reSize() {
    btnSize.textContent = 'GRID SIZE';
    btnSize.addEventListener('click', () => {
        let user = prompt('What size do you want your grid to be ?');
        if(user === null || user < 1) {
            reSet();
            createDivs(16,16);
            rainbowColor();
            greyColor();
            blackColor();
        } else if (user > 100) {
            reSet();
            createDivs(100,100);
            rainbowColor();
            greyColor();
            blackColor();
        } else {
            reSet();
            createDivs(user, user);
            rgbColor();
            greyColor();
            blackColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}
reSize();

createDivs(16, 16);
rainbowColor();
greyColor();
blackColor();

