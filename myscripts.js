function createSketch () {
    let container = document.querySelector('#container');

    for(i = 0; i < 256; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = "border: 1px solid black; height: 30px; width: 30px;"
        container.appendChild(boxes);
    }
}

createSketch ();



