const Base_Url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"
const body = document.querySelector("body");
const container = document.querySelector(".container");
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".drop-from select");
const toCurr = document.querySelector(".drop-to select");
const msg = document.querySelector(".final-mess");

for(let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected"
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected"
        }
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })   
}

const updateExchange = async() => {
    let amount = document.querySelector("form input")
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 1){
        amountVal = 1;
        amount.value = "1"
    }
    const Url = `${Base_Url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(Url);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()]
    let finalAmount = amountVal * rate;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
} 

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchange();
});

window.addEventListener("load", () => {
    updateExchange()
});

let btntheme = document.querySelector(".btntheme");
let currentMode = "Light";
btntheme.innerHTML = `<i class="fa-solid fa-wand-sparkles"></i>`;

btntheme.addEventListener("click", () => {
    if(currentMode == "Light"){
        btntheme.innerHTML = `<i class="fa-solid fa-wand-magic"></i>`;
        container.classList.add("dark")
        container.classList.remove("light")
        currentMode = "Black";
    }
    else{
        btntheme.innerHTML = `<i class="fa-solid fa-wand-sparkles"></i>`;
        container.classList.add("light");
        container.classList.remove("dark")
        currentMode = "Light";
    }
});