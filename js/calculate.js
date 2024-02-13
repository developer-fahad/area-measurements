function calculateTriangleArea(){
    // const triangleBaseInput = document.getElementById('triangle-base');
    // const triangleHeightInput = document.getElementById('triangle-height');
    // if(triangleBaseInput.value !== 'number' || triangleHeightInput.value !== 'number' ){
    //     console.log('Please enter a number');
    // }
    // if(!isNaN(triangleBaseInput.value))
    
    
    const triangleBaseValue = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseValue);
    if(typeof base !== 'number'){
        console.log('Invalid');
    }
    console.log(base);
    
    const triangleHeightValue = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeightValue)
    console.log(height);
    const area = 0.5 * base * height;
    console.log("Total area is: ", area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    // return area;

}