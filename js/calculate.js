function calculateTriangleArea(){
    
    const triangleBaseValue = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);
    
    const triangleHeightValue = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeightValue)
    console.log(height);

    const totalArea = 0.5 * base * height;
    const area = Math.sqrt(totalArea).toFixed(3);

    console.log("Total area is: ", area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    // return area;
    if(isNaN(base) && isNaN(height)){
        alert("Your given Base and Height value is not correct.")
    }
    if(isNaN(base)){
        alert("Please Enter the correct Base value.");
    }
    if(isNaN(height)){
        alert("Plase Enter the correct height value.")
    }
    
    if(base < 0 ){
        alert("Base should be a positive number")
    }
    if(height < 0){
        alert("Height should be a positive number")
    }

}