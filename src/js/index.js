const billInput = document.getElementById('bill')
const numOfPersonS = document.getElementById('numberOfPeole')
const tipButtons = document.querySelectorAll('.tip_button')
const tip_Amount = document.getElementById('tip_amount')
const tip_Total = document.getElementById('total')
const tip_coustom = document.getElementById('custom')
const resetButton = document.querySelector('.reset')
const errorBill = document.querySelector('.error1')
const error = document.querySelector('.error')



// EventListeners
billInput.addEventListener('input', billFunc);
numOfPersonS.addEventListener('input', personFunc);
tipButtons.forEach((val) => {
    val.addEventListener('click', handle);
})
tip_coustom.addEventListener('input', tipCustomFun);
resetButton.addEventListener('click', reset)



// get permanent Input Values
billInput.value = "0";
numOfPersonS.value = "0"

// set to innerHTML
tip_Amount.innerHTML = '$' + (0.0).toFixed(2);
tip_Total.innerHTML = '$' + (0.0).toFixed(2);



let billValue = 0.0;
let personValue = 1;
let tipValue = 0.15;


function billFunc() {
    billValue = parseFloat(billInput.value)
    if(billValue < 1) {
        errorBill.style.display = 'flex'
        billInput.style.border = 'thick solid red'
    } else {
        errorBill.style.display = 'none'
        billInput.style.border = 'none'
        calculateTip()  
    }
}


function personFunc() {
    personValue = parseFloat(numOfPersonS.value)
    if(personValue < 1) {
        error.style.display = 'flex'
        numOfPersonS.style.border = 'thick solid red'
    } else {
        error.style.display = 'none'
        numOfPersonS.style.border = 'none'
        calculateTip()  
    }
}


function tipCustomFun() {
    tipValue = parseFloat(tip_coustom.value / 100)

    tipButtons.forEach((val) => {
        val.classList.remove('active')
    })
    calculateTip()
}


function handle(e) {
    tipButtons.forEach((val) => {
        val.classList.remove('active')
        if(e.target.innerHTML == val.innerHTML) {
            val.classList.add('active')
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    })
    calculateTip()
}



function calculateTip() {
    if(personValue >= 1) {
        let tipAmount = (billValue * tipValue) / personValue;
        let total = (billValue * tipAmount) / personValue;
        tip_Amount.innerHTML =  tipAmount.toFixed(2);
        tip_Total.innerHTML = '$' + total.toFixed(2);
    }
}




// reset
function reset() {
    billInput.value = "0.0";
    billFunc() 
    numOfPersonS.value = "1"
    personFunc() 

    tip_coustom.value = '';
}