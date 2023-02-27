const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const spanError = document.querySelector('#error');
let interval, run;

// verify if the input is a valid hex color
const isHexColor = (color) => {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(color);
}

// change the background color
const changeColor = (color) => {
    document.body.style.backgroundColor = color;
}

// get the input value and verify if it's a valid color
const getColor = () => {
    const color = document.querySelector('#color').value;
    const time = document.querySelector('#time').value;
    if (isHexColor(`#${color}`)) {
        loopThroughHexColors(color, time);
        spanError.textContent = '';
    } else {
        spanError.textContent = 'Please enter a valid hex color';
    }
}


// loop through the hex colors
const loopThroughHexColors = (color, time) => {
    interval = setInterval(() => {
        if (color === 'ffffff') {
            clearInterval(interval);
        } else {
            color = nextHexColor(color);
            changeColor(`#${color}`);
            document.querySelector('#color').value = color;
        }
    }, time);
}


// next hex color
const nextHexColor = (color) => {
    const hex = parseInt(color, 16);
    const nextHex = hex + 1;
    const nextHexColor = nextHex.toString(16);

    if (nextHexColor.length < 6) {
        return nextHexColor.padStart(6, '0');
    }
    return nextHexColor;
}

// switch color slowl

start.addEventListener('click', () => {
    if (run) {
        clearInterval(interval);
        
    } else {
        getColor();
        run = true;
    }
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    color = 'ffffff';
    run = false;
});
