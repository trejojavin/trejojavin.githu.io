const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const themeColor = 'black';
const storeName = 'Kanderlust';
const storeInitial = storeName.toUpperCase()[0];

const text = ctx.measureText(storeInitial);
let fontAscent = text.actualBoundingBoxAscent;
console.log(fontAscent);

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI); //x, y, radius, startRadian, endRadian
ctx.fillStyle = themeColor;
ctx.fill();

ctx.font = "bold 100px Arial";
ctx.fillStyle = "white";
ctx.textBaseline = "middle";
ctx.textAlign = "center";

let adjustedCanvasY = (canvas.height / 2) + fontAscent;
let canvasX = canvas.width / 2; 

ctx.fillText(storeInitial, canvasX, adjustedCanvasY);

const link = document.createElement('link');
link.rel = 'icon';
document.getElementsByTagName('head')[0].appendChild(link);
link.href = canvas.toDataURL('image/png');