let btn = document.querySelectorAll("button");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");
let modu = document.querySelector(".modu");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let finalans = document.querySelector(".finalans p");
let reset = document.querySelector(".reset")

add.addEventListener("click", add = () => {
    let text1 = finalans.innerText = "Loading....";
    setTimeout(() => {
        let a = parseFloat(first.value);
        let b = parseFloat(second.value);
        finalans.innerText = `Result: ${a + b}`;
    },2000)
});
sub.addEventListener("click", sub = () => {
    finalans.innerText = "Loading....";
    setTimeout(() => {
        let a = parseFloat(first.value);
        let b = parseFloat(second.value);
        finalans.innerText = `Result: ${a - b}`;
    },2000)
});
multi.addEventListener("click", multi = () => {
    finalans.innerText = "Loading....";
    setTimeout(() => {
        let a = parseFloat(first.value);
        let b = parseFloat(second.value);
        finalans.innerText = `Result: ${a * b}`;
    },2000)
});
divi.addEventListener("click", divi = () => {
    finalans.innerText = "Loading....";
    setTimeout(() => {
        let a = parseFloat(first.value);
        let b = parseFloat(second.value);
        finalans.innerText = `Result: ${a / b}`;
    },2000)
});
modu.addEventListener("click", modu = () => {
    finalans.innerText = "Loading....";
    setTimeout(() => {
        let a = parseFloat(first.value);
        let b = parseFloat(second.value);
        finalans.innerText = `Result: ${a % b}`;
    },2000)
});

reset.addEventListener("click", () => {
    finalans.innerText = "Waiting For Input...  ";
    setTimeout(() => {
    first.value = "";
    second.value = "";  
    finalans.innerText = `Waiting For Input...`;
    }, 2000)
})