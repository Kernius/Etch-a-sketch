let container = document.querySelector('#container');
const gridBoxes = document.querySelectorAll('#container > div');
let isPainting = false;
let eraserIsActive = false;
let rainbowIsActive = false;

/* Default sketch creation */

function createSketch() {
    for(let i = 0; i < 256; i++) {
        let boxes = document.createElement('div');
        boxes.classList.add('box');
        container.appendChild(boxes);
    }
};

createSketch ();

/* function to remove all boxes when using a slider */

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

/* slider to change size of the sketch */

    let slider = document.querySelector('#slider');
    const sliderVal = document.querySelector('.value');

    slider.addEventListener('input', function() {
        sliderVal.textContent = slider.value;
        removeAllChildNodes(container);
        container.setAttribute('style', `grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr);`);
        for (let i = 0; i < slider.value*slider.value; i++) {
            const div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div);
        }
        });

/* toggling painting on and off*/

container.addEventListener('click', togglePaint);
  


function togglePaint () {
    
    const gridBoxes = document.querySelectorAll('#container > div');

    if(!isPainting) {
        gridBoxes.forEach((item) => { 
            item.addEventListener('mouseover', paint); 
        });
        isPainting = true;
    } else { 
        gridBoxes.forEach((item) => {
            item.removeEventListener('mouseover', paint);
        });
        
        isPainting = false;
    }
}

/* color panel and coloring function*/


function paint(e) {
    if (!eraserIsActive && !rainbowIsActive){
        let color = document.querySelector('#color').value;
        e.target.style.backgroundColor = color;
    } else if (eraserIsActive) { 
        e.target.style.backgroundColor = "white";
    } else if (rainbowIsActive) {
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    } 

    
}

/* clear current sketch button*/


const clear = document.querySelector('#clear');
clear.addEventListener('click', clearSketch);
 

function clearSketch() {
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((item) => {
        item.style.backgroundColor = "white";
    })
}

/* Eraser button*/

const eraser = document.querySelector('#erase');
eraser.addEventListener('click', enableEraser);

function enableEraser () {
        if(rainbowIsActive){
            rainbowIsActive = false;
            rainbow.classList.remove('rainbowActive');
        }
    if (!eraserIsActive){
        eraserIsActive = true;
        eraser.classList.remove('erase');
        eraser.classList.add('eraseActive');    
    } else {
        eraserIsActive = false;
        eraser.classList.remove('eraseActive');
        eraser.classList.add('erase');
    }
}

/* Toggle rainbow */

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', toggleRainbow)


    function toggleRainbow () {
        if(eraserIsActive){
            eraserIsActive = false;
            eraser.classList.remove('eraseActive');
        }
        
    if (!rainbowIsActive) {
        rainbowIsActive = true;
        rainbow.classList.remove('rainbow');
        rainbow.classList.add('rainbowActive');
    } else {
        rainbowIsActive = false;
        rainbow.classList.remove('rainbowActive');
        rainbow.classList.add('rainbow');
    }  
}














    




