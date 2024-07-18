const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function() {
    
    // Example 1
    let randomColor = colorGenerator();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;

    
    // Example 2
    // let hexColor = '#';    
    // for(let i = 0; i < 6; i++) {
    //     let randomColor = Math.floor(Math.random() * hex.length);
    //     hexColor += hex[randomColor];
    // }

    // document.body.style.backgroundColor = hexColor;
    // color.textContent = hexColor;
    
});

function colorGenerator() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        let randomColor = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomColor];
    }
    return hexColor;
}