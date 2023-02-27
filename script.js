const start = document.querySelector('#start');
const stop = document.querySelector('#stop');


const changeColor = () => {
    const colorValue = document.querySelector('#color').value;
    document.body.style.backgroundColor = `#${colorValue}`;
}

start.addEventListener('click', changeColor);

stop.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f5f5f5';
});