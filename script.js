// =============================
// MASTER CALCULATOR
// Part 1
// =============================

// Pages
const pages = document.querySelectorAll(".page");
const navBtns = document.querySelectorAll(".nav-btn");

// Payment Elements
const rent = document.getElementById("rent");
const people = document.getElementById("people");
const token = document.getElementById("token");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const rentError = document.getElementById("rentError");
const peopleError = document.getElementById("peopleError");
const tokenError = document.getElementById("tokenError");

const onlineResult = document.getElementById("onlineResult");
const cashResult = document.getElementById("cashResult");
const brokerageResult = document.getElementById("brokerageResult");

const results=document.querySelector("#paymentPage .results");

// =============================
// Default Page
// =============================

showPage("paymentPage");

// =============================
// Bottom Navigation
// =============================

navBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

navBtns.forEach(x=>x.classList.remove("active"));

btn.classList.add("active");

showPage(btn.dataset.page);

});

});

function showPage(id){

pages.forEach(page=>page.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

// =============================
// Payment Calculator
// =============================

calculateBtn.addEventListener("click",()=>{

rentError.textContent="";
peopleError.textContent="";
tokenError.textContent="";

if(rent.value===""){

rentError.textContent="Enter Rent";
return;

}

if(people.value===""){

peopleError.textContent="Select People";
return;

}

if(token.value===""){

tokenError.textContent="Enter Token";
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

const brokerage=rentValue/2;

onlineResult.innerText="₹"+online.toLocaleString();
cashResult.innerText="₹"+cash.toLocaleString();
brokerageResult.innerText="₹"+brokerage.toLocaleString();

results.style.display="block";

});

// =============================
// Reset
// =============================

resetBtn.addEventListener("click",()=>{

rent.value="";
people.value="";
token.value="";

rentError.textContent="";
peopleError.textContent="";
tokenError.textContent="";

onlineResult.innerText="₹0";
cashResult.innerText="₹0";
brokerageResult.innerText="₹0";

results.style.display="none";

});

// =============================
// Copy Result
// =============================

copyBtn.addEventListener("click",()=>{

const text=
`Online : ${onlineResult.innerText}
Cash : ${cashResult.innerText}
Brokerage : ${brokerageResult.innerText}`;

navigator.clipboard.writeText(text);

alert("Result Copied");

});

// =============================
// BROKERAGE CALCULATOR
// =============================

const brokerageRent=document.getElementById("brokerageRent");
const days=document.getElementById("days");

const brokerageCalculateBtn=document.getElementById("brokerageCalculateBtn");
const brokerageResetBtn=document.getElementById("brokerageResetBtn");
const brokerageCopyBtn=document.getElementById("brokerageCopyBtn");

const brokerageOnlyResult=document.getElementById("brokerageOnlyResult");

const brokerageResults=document.querySelector("#brokeragePage .results");

brokerageCalculateBtn.addEventListener("click",()=>{

if(brokerageRent.value===""||days.value===""){

alert("Please fill all fields");

return;

}

const total=(Number(brokerageRent.value)/30)*Number(days.value);

brokerageOnlyResult.innerText="₹"+Math.round(total).toLocaleString();

brokerageResults.style.display="block";

});

brokerageResetBtn.addEventListener("click",()=>{

brokerageRent.value="";
days.value="";

brokerageOnlyResult.innerText="₹0";

brokerageResults.style.display="none";

});

brokerageCopyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(

"Brokerage : "+brokerageOnlyResult.innerText

);

alert("Result Copied");

});

// =============================
// RENT CALCULATOR
// =============================

const monthlyRent=document.getElementById("monthlyRent");
const joiningDate=document.getElementById("joiningDate");

const rentCalculateBtn=document.getElementById("rentCalculateBtn");
const rentResetBtn=document.getElementById("rentResetBtn");

const rentResult=document.getElementById("rentResult");

const rentResults=document.querySelector("#rentPage .results");

rentCalculateBtn.addEventListener("click",()=>{

if(monthlyRent.value===""||joiningDate.value===""){

alert("Please fill all fields");

return;

}

const rentValue=Number(monthlyRent.value);

const date=new Date(joiningDate.value);

const day=date.getDate();

const lastDay=new Date(

date.getFullYear(),

date.getMonth()+1,

0

).getDate();

const remainingDays=(lastDay-day)+1;

const amount=(rentValue/30)*remainingDays;

rentResult.innerText="₹"+Math.round(amount).toLocaleString();

rentResults.style.display="block";

});

rentResetBtn.addEventListener("click",()=>{

monthlyRent.value="";
joiningDate.value="";

rentResult.innerText="₹0";

rentResults.style.display="none";

});

// =============================
// SMALL ANIMATION
// =============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.96)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},120);

});

});

// =============================
// END
// =============================
