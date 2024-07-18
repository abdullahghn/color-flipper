
const color = document.querySelector('.color');
const btnRandom = document.querySelector('#btn-random');
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// btn.addEventListener("click", function() {
//     const colorIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[colorIndex];
//     color.textContent = colors[colorIndex];
//     console.log(colors[colorIndex]);
// });

// Random colors function
function randomColors() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    color.textContent = colors[colorIndex];
    return document.body.style.backgroundColor = colors[colorIndex];
}

// Event listener All Colors
document.querySelectorAll('.btn').forEach(function(x) {
    x.addEventListener('click', function() {
        const btnColor = this.textContent;
        document.body.style.backgroundColor = btnColor;
        color.textContent = btnColor;
    });
});

// Event listener Random Colors
btnRandom.addEventListener("click", function() {
    randomColors();
});