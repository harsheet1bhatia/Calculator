// Inputs
const rent = document.getElementById("rent");
const joiningDate = document.getElementById("joiningDate");

// Buttons
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

// Errors
const rentError = document.getElementById("rentError");
const dateError = document.getElementById("dateError");

// Results
const results = document.querySelector(".results");
const daysResult = document.getElementById("daysResult");
const rentResult = document.getElementById("rentResult");

// Hide Result
results.style.display = "none";

// Animation
function animateValue(element, endValue){

    let start = 0;

    const increment = Math.max(1, Math.ceil(endValue / 40));

    function update(){

        start += increment;

        if(start >= endValue){
            start = endValue;
        }

        element.innerText = "₹" + start.toLocaleString("en-IN");

        if(start < endValue){
            requestAnimationFrame(update);
        }

    }

    update();

}

// Calculate
calculateBtn.addEventListener("click",function(){

    rentError.innerText="";
    dateError.innerText="";

    if(rent.value===""){
        rentError.innerText="Please enter Rent";
        return;
    }

    if(joiningDate.value===""){
        dateError.innerText="Please select Date";
        return;
    }

    const rentValue = Number(rent.value);

    const date = new Date(joiningDate.value);

    const selectedDay = date.getDate();

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth()+1,
        0
    ).getDate();

    const remainingDays = lastDay - selectedDay + 1;

    const amount = Math.round((rentValue/30)*remainingDays);

    results.style.display="block";

    daysResult.innerText = remainingDays;

    animateValue(rentResult,amount);

});

// Reset
resetBtn.addEventListener("click",function(){

    rent.value="";
    joiningDate.value="";

    rentError.innerText="";
    dateError.innerText="";

    daysResult.innerText="0";
    rentResult.innerText="₹0";

    results.style.display="none";

});

// Copy
copyBtn.addEventListener("click",function(){

    const text =
`Rent Calculator

Remaining Days : ${daysResult.innerText}

Rent Amount : ${rentResult.innerText}`;

    navigator.clipboard.writeText(text);

    copyBtn.innerText="✅ Copied";

    setTimeout(function(){

        copyBtn.innerText="📋 Copy Result";

    },1500);

});