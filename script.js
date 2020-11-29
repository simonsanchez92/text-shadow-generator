const form = document.getElementById('form');

//Range elements 
const offsetX = document.getElementById('offset-x');
const offsetY = document.getElementById('offset-y');
const blurRadius = document.getElementById('blur-radius');

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const alpha = document.getElementById('alpha');

const ranges = [...document.querySelectorAll('.ranges')];



//Pixels box elements

const offsetXNumber = document.getElementById('offset-x-number');
const offsetYNumber = document.getElementById('offset-y-number');
const blurNumber = document.getElementById('blur');

const pixelBoxes = [offsetXNumber, offsetYNumber, blurNumber];

const resultsText = document.getElementById('results-text');

let textToModify = document.getElementById('add-shadow');

let style = getComputedStyle(textToModify);

window.onload = ()=>{


    offsetX.value = 0;
    offsetY.value = 0;
    blurRadius.value = 0;

     red.value = 0;
     green.value = 0;
     blue.value = 0;
     alpha.value = 1;

    offsetXNumber.value= 0;
    offsetYNumber.value= 0;
    blurNumber.value= 0;

    resultsText.innerText = style["text-shadow"] === 'none' ? 'rgb(0, 0, 0) 0px 0px 0px' : style["text-shadow"];
    // console.log(resultsText);
}


const handleChange = ()=>{
     const shadow = {
        offsetX: offsetX.value,
        offsetY: offsetY.value,
        blur: blurRadius.value
    }
    const colors = {
        red: red.value,
        green: green.value,
        blue: blue.value,
        alpha: alpha.value
    }

 
    offsetXNumber.value = offsetX.value
    offsetYNumber.value = offsetY.value
    blurNumber.value = blurRadius.value
   
    
textToModify.style.textShadow = `rgb(${colors.red},${colors.green},${colors.blue},${colors.alpha})${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px`;
   
resultsText.innerText = style["text-shadow"];
    // console.log(colors)
    // console.log(ranges)
}


// Shadow and color event listeners
ranges.forEach(range=> range.addEventListener('input', handleChange));




//Numerical values event listeners

pixelBoxes.forEach(box=>{
    box.addEventListener('input', ()=>{

        if(box.value <= 50 && box.value >= -50){
            offsetX.value = offsetXNumber.value;
            offsetY.value = offsetYNumber.value;
            blurRadius.value = blurNumber.value;

            handleChange();
        }
       
    });
});

