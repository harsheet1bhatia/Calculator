// ===================================
// MASTER CALCULATOR
// Part 1
// ===================================

// Pages
const paymentPage = document.getElementById("paymentPage");
const brokeragePage = document.getElementById("brokeragePage");
const rentPage = document.getElementById("rentPage");

// Bottom Navigation
const navItems = document.querySelectorAll(".nav-item");

// Payment Inputs
const rent = document.getElementById("rent");
const people = document.getElementById("people");
const token = document.getElementById("token");

// Errors
const rentError = document.getElementById("rentError");
const peopleError = document.getElementById("peopleError");
const tokenError = document.getElementById("tokenError");

// Buttons
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

// Results
const onlineResult = document.getElementById("onlineResult");
const cashResult = document.getElementById("cashResult");
const brokerageResult = document.getElementById("brokerageResult");

// ===================================
// Default Page
// ===================================

showPage("paymentPage");

// ===================================
// Bottom Navigation
// ===================================

navItems.forEach(function(item){

    item.addEventListener("click",function(){

        navItems.forEach(function(btn){
            btn.classList.remove("active");
        });

        item.classList.add("active");

        showPage(item.dataset.page);

    });

});

function showPage(page){

    paymentPage.classList.remove("active");
    brokeragePage.classList.remove("active");
    rentPage.classList.remove("active");

    document.getElementById(page).classList.add("active");

}

// ===================================
// Payment Calculator
// ===================================

calculateBtn.addEventListener("click",function(){

    rentError.innerText="";
    peopleError.innerText="";
    tokenError.innerText="";

    if(rent.value===""){
        rentError.innerText="Enter Rent";
        return;
    }

    if(people.value===""){
        peopleError.innerText="Select People";
        return;
    }

    if(token.value===""){
        tokenError.innerText="Enter Token";
        return;
    }

    const rentValue=Number(rent.value);
    const peopleValue=Number(people.value);
    const tokenValue=Number(token.value);

    const security=rentValue;

    const documentation=(peopleValue*500)+500;

    let online=0;
    let cash=0;

    if(rentValue<=19000){

        online=rentValue+documentation+(security-tokenValue);

        cash=0;

    }else{

        online=20000+(security-tokenValue);

        cash=(rentValue+documentation)-20000;

    }

    const brokerage=rentValue;

    animateValue(onlineResult,online);
    animateValue(cashResult,cash);
    animateValue(brokerageResult,brokerage);

});

// ===================================
// Reset
// ===================================

resetBtn.addEventListener("click",function(){

    rent.value="";
    people.value="";
    token.value="";

    rentError.innerText="";
    peopleError.innerText="";
    tokenError.innerText="";

    onlineResult.innerText="₹0";
    cashResult.innerText="₹0";
    brokerageResult.innerText="₹0";

});

// ===================================
// Animation
// ===================================

function animateValue(element,endValue){

    let start=0;

    const duration=400;

    const increment=Math.ceil(endValue/(duration/16));

    function update(){

        start+=increment;

        if(start>=endValue){

            start=endValue;

        }

        element.innerText="₹"+start.toLocaleString();

        if(start<endValue){

            requestAnimationFrame(update);

        }

    }

    update();

}

// ===================================
// BROKERAGE CALCULATOR
// ===================================

const brokerageRent=document.getElementById("brokerageRent");
const brokerageDays=document.getElementById("brokerageDays");

const brokerageCalculateBtn=document.getElementById("brokerageCalculateBtn");
const brokerageResetBtn=document.getElementById("brokerageResetBtn");

const brokerageOnlyResult=document.getElementById("brokerageOnlyResult");

brokerageCalculateBtn.addEventListener("click",function(){

    if(brokerageRent.value==="" || brokerageDays.value===""){

        alert("Please enter Rent and Days");

        return;

    }

    const rentValue=Number(brokerageRent.value);

    const dayValue=Number(brokerageDays.value);

    const brokerage=(rentValue/30)*dayValue;

    animateValue(
        brokerageOnlyResult,
        Math.round(brokerage)
    );

});

brokerageResetBtn.addEventListener("click",function(){

    brokerageRent.value="";
    brokerageDays.value="";

    brokerageOnlyResult.innerText="₹0";

});


// ===================================
// RENT CALCULATOR
// ===================================

const monthlyRent=document.getElementById("monthlyRent");
const joiningDate=document.getElementById("joiningDate");

const rentCalculateBtn=document.getElementById("rentCalculateBtn");
const rentResetBtn=document.getElementById("rentResetBtn");

const rentResult=document.getElementById("rentResult");

rentCalculateBtn.addEventListener("click",function(){

    if(monthlyRent.value==="" || joiningDate.value===""){

        alert("Please fill all fields");

        return;

    }

    const rentValue=Number(monthlyRent.value);

    const selected=new Date(joiningDate.value);

    const day=selected.getDate();

    const lastDay=new Date(
        selected.getFullYear(),
        selected.getMonth()+1,
        0
    ).getDate();

    const totalDays=(lastDay-day)+1;

    const remaining=(rentValue/30)*totalDays;

    animateValue(

        rentResult,

        Math.round(remaining)

    );

});

rentResetBtn.addEventListener("click",function(){

    monthlyRent.value="";
    joiningDate.value="";

    rentResult.innerText="₹0";

});


// ===================================
// ACTIVE TAB EFFECT
// ===================================

navItems.forEach(function(item){

    item.addEventListener("click",function(){

        navItems.forEach(function(btn){

            btn.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ===================================
// BUTTON CLICK EFFECT
// ===================================

document.querySelectorAll("button").forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.style.transform="scale(.96)";

        setTimeout(function(){

            btn.style.transform="scale(1)";

        },150);

    });

});