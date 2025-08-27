const input = document.getElementById("value")
const convertBtn = document.getElementById("convert-btn")
const lengthValue = document.getElementById("length")
const volumeValue = document.getElementById("volume")
const massValue = document.getElementById("mass")
const error = document.getElementById("error")

input.addEventListener("input", function() {
    if(input.value <= 0) {
        input.value = ""
    }
})


convertBtn.addEventListener("click", function(){
    let inputValue = input.value
    if(inputValue === ""){
        error.textContent = "Please enter a value!";
        input.style.border = "2px solid red";
        return;

    }

    error.textContent = "";
    input.style.border = "";
  
    let feet = (inputValue * 3.281).toFixed(3)
    let meters = (inputValue / 3.281).toFixed(3)
    let gallons = (inputValue * 0.264).toFixed(3)
    let liters = (inputValue / 0.264).toFixed(3)
    let pounds = (inputValue * 2.204).toFixed(3)
    let kilos = (inputValue / 2.204).toFixed(3)
    
    lengthValue.innerHTML = `
        ${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters
    `
    
    volumeValue.innerHTML = `
        ${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters
    `
    
    massValue.innerHTML = `
        ${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos
    `
    
    
})

