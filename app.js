const colors = ['green', 'red', 'rgba(133,122,200)', '#fl5025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    // console.log(getRandomNumber);

    document.body.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}