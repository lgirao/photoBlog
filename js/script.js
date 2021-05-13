
// Change background by randomly choosing numbers for RGB color:
function randomBackground() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.background = bgColor;
}

randomBackground();


// Chooses background randomly from these set three colors:
// const colors = ["#760CE8", "#4782B1", "#E8890C"];

// const changeBackground = function() {
//     document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
// }

// changeBackground();