import { createCounter } from "./counter.js";
const counter =createCounter();
const display=document.getElementById("counter-display");
const Decrementbutton=document.getElementById("decrement-button");
const resetbutton=document.getElementById("Reset-button");
const incrementButton=document.getElementById("Increment-button");

function updateDisplay(){
    display.textContent=counter.getValue();
}
incrementButton.addEventListener("click",function(){
    counter.Increment();
    updateDisplay();
});
Decrementbutton.addEventListener("click",function(){
    counter.Decrement();
    updateDisplay();
});
resetbutton.addEventListener("click",function(){
    counter.Reset();
    updateDisplay();
});
updateDisplay();