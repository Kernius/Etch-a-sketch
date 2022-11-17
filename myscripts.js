let container = document.querySelector('#container');
let isPainting = false;

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
        let color = document.querySelector('#color').value;
        e.target.style.backgroundColor = color;
}








    




