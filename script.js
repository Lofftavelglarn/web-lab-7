function getRandomDimension(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkInput(input) {
    if (input.value > 20) {
        input.value = 20;
    }
}

let selectedShape = null;

function createShape(shapeType) {
    const shapeCount = parseInt(document.getElementById('shape-quantity').value);
    for (let i = 0; i < shapeCount; i++) {
        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape', shapeType);
        
        let dimension;
        let positionX, positionY;
        if (shapeType === 'square') {
            dimension = getRandomDimension(50, 200); 
            shapeElement.style.width = dimension + 'px';
            shapeElement.style.height = dimension + 'px';
            positionX = Math.random() * (window.innerWidth - dimension) + 'px';
            positionY = Math.random() * (window.innerHeight - dimension) + 'px';
        } else if (shapeType === 'triangle') {
            dimension = getRandomDimension(50, 200);
            shapeElement.style.borderLeft = dimension + 'px solid transparent';
            shapeElement.style.borderRight = dimension + 'px solid transparent';
            shapeElement.style.borderBottom = dimension + 'px solid blue';
            positionX = Math.random() * (window.innerWidth - 2 * dimension) + 'px';
            positionY = Math.random() * (window.innerHeight - dimension) + 'px';
        } else if (shapeType === 'circle') {
            dimension = getRandomDimension(50, 200);
            shapeElement.style.width = dimension + 'px';
            shapeElement.style.height = dimension + 'px';
            shapeElement.style.borderRadius = '50%';
            positionX = Math.random() * (window.innerWidth - dimension) + 'px';
            positionY = Math.random() * (window.innerHeight - dimension) + 'px';
        }

        shapeElement.style.left = positionX;
        shapeElement.style.top = positionY;

        shapeElement.addEventListener('click', () => {
            if (selectedShape && selectedShape !== shapeElement) {
                selectedShape.classList.remove('selected');
                if (selectedShape.classList.contains('triangle')) {
                    selectedShape.style.borderBottomColor = 'blue';
                }
            }
            selectedShape = shapeElement;
            if (shapeType !== 'triangle') {
                shapeElement.classList.toggle('selected');
            } else {
                shapeElement.style.borderBottomColor = shapeElement.style.borderBottomColor === 'blue' ? 'yellow' : 'blue';
            }
        });

        shapeElement.addEventListener('dblclick', () => {
            shapeElement.remove();
        });

        document.body.appendChild(shapeElement);
    }
}