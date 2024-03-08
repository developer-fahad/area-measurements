function calculateTriangleArea(){
    
    const baseField = document.getElementById('triangle-base');
    const baseValue = baseField.value;
    const base = parseInt(baseValue);
    baseField.value = '';
    
    const heightField = document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseInt(heightValue);
    heightField.value = '';
    if(heightValue === '' || baseValue === ''){
        return alert('Your input field is empty')
     }
     if(isNaN(heightValue) || isNaN(baseValue)){
        return alert('Input is not a number')
     }
    const area = 0.5*(base*height);
    console.log(typeof area, area);
    
    const areaContainer = document.getElementById('triangle-area-container');
    areaContainer.innerText = area;
    
}

// function convertInt(ElementID){
//     const baseField = document.getElementById(ElementID);
//     const baseValue = baseField.value;
//     const base = parseInt(baseValue);
//     // baseField.value = '';
//     return base;
// }

// Measurements for Rectangle
function calculateRectangleArea(){
    
    const baseField = document.getElementById('rectangle-base');
    const baseValue = baseField.value;
    const base = parseInt(baseValue);
    baseField.value = '';
    
    const heightField = document.getElementById('rectangle-height');
    const heightValue = heightField.value;
    const height = parseInt(heightValue);
    heightField.value = '';
    if(heightValue === '' || baseValue === ''){
        return alert('Your input field is empty')
     }
     if(isNaN(heightValue) || isNaN(baseValue)){
        return alert('Input is not a number')
     }
    const area = (base*height);
    console.log(typeof area, area);
    
    const areaContainer = document.getElementById('rectangle-area-container');
    areaContainer.innerText = area;
}

// Measurements for Parallologram
function calculateParallelogramArea(){
    
    const baseField = document.getElementById('parallelogram-base');
    const baseValue = baseField.value;
    const base = parseInt(baseValue);
    baseField.value = '';
    
    const heightField = document.getElementById('parallelogram-height');
    const heightValue = heightField.value;
    const height = parseInt(heightValue);
    heightField.value = '';
    if(heightValue === '' || baseValue === ''){
        return alert('Your input field is empty')
     }
     if(isNaN(heightValue) || isNaN(baseValue)){
        return alert('Input is not a number')
     }
    const area = (base*height);
    console.log(typeof area, area);
    
    const areaContainer = document.getElementById('parallelogram-area-container');
    areaContainer.innerText = area;
}

// Measurements for Rhombus
function calculateRhombusArea(){
    
    const baseField = document.getElementById('rhombus-diagonal1');
    const baseValue = baseField.value;
    const base = parseInt(baseValue);
    baseField.value = '';
    
    const heightField = document.getElementById('rhombus-diagonal2');
    const heightValue = heightField.value;
    const height = parseInt(heightValue);
    heightField.value = '';
    if(heightValue === '' || baseValue === ''){
        return alert('Your input field is empty')
     }
     if(isNaN(heightValue) || isNaN(baseValue)){
        return alert('Input is not a number')
     }
    const area = 0.5*(base*height);
    console.log(typeof area, area);
    
    const areaContainer = document.getElementById('rhombus-area-container');
    areaContainer.innerText = area;
}

// Measurements for Rhombus
function calculatePentagonArea(){
    
    const sideField = document.getElementById('pentagon-side');
    const sideValue = sideField.value;
    const side = parseInt(sideValue);
    sideField.value = '';
    
    // const heightField = document.getElementById('rhombus-diagonal2');
    // const heightValue = heightField.value;
    // const height = parseInt(heightValue);
    // heightField.value = '';
    if(sideValue === ''){
        return alert('Your input field is empty')
     }
     if(isNaN(sideValue)){
        return alert('Input is not a number')
     }
    const area = (1/4*Math.sqrt(5*(5+2 * Math.sqrt(5))) * Math.pow(side, 2)).toFixed(3);
    console.log(typeof area, area);
    
    const areaContainer = document.getElementById('pentagon-area-container');
    areaContainer.innerText = area;
}

// Measurements for Rhombus
function calculateEllipseArea(){
    
    const baseField = document.getElementById('ellipse-axis-a');
    const baseValue = baseField.value;
    const base = parseInt(baseValue);
    baseField.value = '';
    
    const heightField = document.getElementById('ellipse-axis-b');
    const heightValue = heightField.value;
    const height = parseInt(heightValue);
    heightField.value = '';
    if(heightValue === '' || baseValue === ''){
        return alert('Your input field is empty')
     }
     if(isNaN(heightValue) || isNaN(baseValue)){
        return alert('Input is not a number')
     }
    const area = (Math.PI*(base*height)).toFixed(3);
    console.log(typeof area, area);
    
    const areaContainer = document.getElementById('ellipse-area-container');
    areaContainer.innerText = area;
}

// function convertInt(ElementID){
//     const baseField = document.getElementById(ElementID);
//     const baseValue = baseField.value;
//     const base = parseInt(baseValue);
//     // baseField.value = '';
//     return base;
// }

// const hello = convertInt('triangle-base');
// console.log("This is hello", hello);