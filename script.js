const inputElement = document.querySelector(".input-element");
const goBtn = document.querySelector(".go-btn");
const img = document.querySelector("#img");
const resetBtn = document.querySelector(".reset-btn");


const grayscale = document.querySelector("#grayscale"); 
const blr = document.querySelector("#blr"); 
const bright = document.querySelector("#bright"); 
const contrast = document.querySelector("#contrast"); 
const hueRotate = document.querySelector("#hue-rotate");  
const opacity = document.querySelector("#opacity"); 
const invert = document.querySelector("#invert"); 
const saturate = document.querySelector("#saturate"); 
const sepia = document.querySelector("#sepia"); 


let grayscaleValue= 0; 
let blrValue = 0; 
let brightValue = 100; 
let contrastValue = 100; 
let hueRotateValue = 0; 
let opacityValue = 100; 
let invertValue = 0; 
let saturateValue = 100; 
let sepiaValue = 0; 

let imageAddress;


function handleGoBtn() { 
    img.src = imageAddress;
}

function handleInputChange() {
    imageAddress = inputElement.value; 
}

function handleGrayscale(e) {
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`; 
}

function handleBlr(e) {
    blrValue = e.target.value;
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleBright(e) {
    brightValue = e.target.value;
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleContrast(e) {
    contrastValue = e.target.value;
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleHueRotate(e) {
    hueRotateValue = e.target.value;
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleOpacity(e) {
    rotateValue = e.target.value;
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleInvert(e) {
    invertValue = e.target.value
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleReset() {
    grayscaleValue= 0;
    blrValue = 0;
    brightValue = 100;
    contrastValue = 100;
    hueRotateValue = 0;
    opacityValue = 100;
    invertValue = 0;
    saturateValue = 100;
    sepiaValue = 0;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleSaturate(e) {
    saturateValue = e.target.value
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

function handleSepia(e) {
    sepiaValue = e.target.value
    grayscaleValue = e.target.value;
    img.style.filter = `grayscale(${grayscaleValue}%) blur(${blrValue}px) brightness(${brightValue}%) contrast(${contrastValue}%) hue-rotate(${hueRotateValue}deg) opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;
}

inputElement.addEventListener('keyup', handleInputChange);
resetBtn.addEventListener('click', handleReset);
goBtn.addEventListener('click', handleGoBtn);

grayscale.addEventListener('input', handleGrayscale); 
blr.addEventListener('input', handleBlr); 
bright.addEventListener('input', handleBright); 
contrast.addEventListener('input', handleContrast); 
hueRotate.addEventListener('input', handleHueRotate); 
opacity.addEventListener('input', handleOpacity); 
invert.addEventListener('input', handleInvert); 
saturate.addEventListener('input', handleSaturate); 
sepia.addEventListener('input', handleSepia); 