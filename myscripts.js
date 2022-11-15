function createSketch () {
    let container = document.querySelector('#container');

    for(i = 0; i < 256; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = "border: 1px solid black; height: 30px; width: 30px;"
        container.appendChild(boxes);
    }
}

createSketch ();



function paintBoxes () {
    
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((item) => { 
    item.addEventListener('click', () => {
    gridBoxes.forEach((item) => { 
        item.addEventListener('mouseover', () => {
            let color = document.querySelector('#color').value;
            item.style.backgroundColor = color;



    });
    });
    });
    });
    

}





    


paintBoxes ();


