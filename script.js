const canvas = document.getElementById("canvas");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const eraserEl = document.getElementById("eraser");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext('2d');

//-----------------------------------------------------------------------------------------


let size = 9;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

//-----------------------------------------------------------------------------------------

canvas.addEventListener("mousedown", () => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

//-----------------------------------------------------------------------------------------

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

//-----------------------------------------------------------------------------------------


incrementBtn.addEventListener("click", () => {
    size += 3;
    if (size > 39)
        size = 39;
    showSize()
});
decrementBtn.addEventListener("click", () => {
    size -= 3;
    if (size < 3)
        size = 3;
    showSize()
});

//-----------------------------------------------------------------------------------------


colorEl.addEventListener("change", (e) => {
    color = e.target.value;
})
eraserEl.addEventListener("click", () => {
    color = 'white';
})
clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
function showSize() {
    sizeEl.innerText = size;
}