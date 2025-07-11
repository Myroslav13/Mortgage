// Site elements
const inputMortgageAmount = document.getElementById('input-mortgage-amount')
const containerMortgageAmount = document.getElementById('container-mortgage-amount')

const inputMortgageTerm = document.getElementById('input-mortgage-term')
const containerMortgageTerm = document.getElementById('container-mortgage-term')

const inputInterestRate = document.getElementById('input-interest-rate')
const containerInterestRate = document.getElementById('container-interest-rate')

const radioContainer1 = document.getElementById('radio-container-1')
const radioContainer2 = document.getElementById('radio-container-2')
const radioRepayment = document.getElementById('radio-repayment')
const radioInterestOnly = document.getElementById('radio-interest-only')

const buttonSubmit = document.getElementById('button-submit')

const resultsSide = document.getElementById('results-side')
const warning1 = document.getElementById('warning-1')
const warning2 = document.getElementById('warning-2')
const warning3 = document.getElementById('warning-3')
const warning4 = document.getElementById('warning-4')

const clearAll = document.getElementById('clear-all')

function inputFocus(input, container) {
    input.style.border = "1px solid #dbda32"
    container.classList.remove('warning-container')
    container.classList.add('focused')
}

function inputBlur(input, container) {
    input.style.border = "1px solid #838d8f"
    container.classList.remove('warning-container')
    container.classList.remove('focused')
}

function radioFocus(radio, container) {
    radio.style.accentColor = "#dbda32"
    container.style.border = "1px solid #dbda32"
    container.style.backgroundColor = "#fafae0"
}

function radioBlur(radio, container) {
    radio.style.accentColor = "#133040"
    container.style.border = "1px solid #838d8f"
    container.style.backgroundColor = "white"
}

// Calculation button clicked
function buttonClicked(event) {
    event.preventDefault();

    warning1.style.display = "none"
    warning2.style.display = "none"
    warning3.style.display = "none"
    warning4.style.display = "none"

    let isBlank = false

    if (inputMortgageAmount.value.trim() === "") {
        isBlank = true
        warning1.style.display = "block"
        containerMortgageAmount.classList.add('warning-container')
    }

    if (inputMortgageTerm.value.trim() === "") {
        isBlank = true
        warning2.style.display = "block"
        containerMortgageTerm.classList.add('warning-container')
    }

    if (inputInterestRate.value.trim() === "") {
        isBlank = true
        warning3.style.display = "block"
        containerInterestRate.classList.add('warning-container')
    }

    // If radiobuttons aren't active
    if (radioRepayment.checked === false && radioInterestOnly.checked === false) {
        isBlank = true
        warning4.style.display = "block"
    }

    // If every field is filled
    if(!isBlank){
        let p = parseFloat(inputMortgageAmount.value)
        let r = parseFloat(inputInterestRate.value) / (12 * 100)
        let n = parseInt(inputMortgageTerm.value) * 12

        let monthlyPayment = ((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2)
        let totalPayment = (monthlyPayment * n).toFixed(2)

        resultsSide.innerHTML = `
        <div class="mortgage-results-header">
            <h2>Your results</h2>

            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <br>
        </div>

        <div class="mortgage-results">
            <h2>Your monthly repayments</h2>
            <h3 class="mortgage-price">£${monthlyPayment}</h3>

            <hr align="center" border="1px solid gray">
            
            <h2>Total you'll repay over the term</h2>
            <h3 class="mortgage-monthly">£${totalPayment}</h3>
        </div>`

        resultsSide.style.justifyContent = "start"
        resultsSide.style.padding = "40px 40px"
    }
}

function containerHover(input, container) {
    input.style.borderColor = "#133040"
    container.classList.add('hover-effect')
}

function containerUnhover(container) {
    container.classList.remove('hover-effect')
}

// Clear All clicked
function clearAllClick() {
    warning1.style.display = "none"
    warning2.style.display = "none"
    warning3.style.display = "none"
    warning4.style.display = "none"

    inputMortgageAmount.value = ""
    inputMortgageTerm.value = ""
    inputInterestRate.value = ""
    radioRepayment.checked = false
    radioInterestOnly.checked = false

    inputBlur(inputMortgageAmount, containerMortgageAmount)
    inputBlur(inputMortgageTerm, containerMortgageTerm)
    inputBlur(inputInterestRate, containerInterestRate)
    radioBlur(radioRepayment, radioContainer1)
    radioBlur(radioInterestOnly, radioContainer2)

    resultsSide.innerHTML = `
        <img src="assets/images/illustration-empty.svg" alt="illustration-empty" draggable="false" id="illustration-empty">
        <h2 align="center">Results shown here</h2>

        <p align="center">Complete the form and click “calculate repayments” to see what 
        your monthly repayments would be.</p>`

    resultsSide.style.justifyContent = "center"
    resultsSide.style.padding = "0px 40px"
}

// Listeners
inputMortgageAmount.addEventListener('focus', () => inputFocus(inputMortgageAmount, containerMortgageAmount))
inputMortgageAmount.addEventListener('blur', () => inputBlur(inputMortgageAmount, containerMortgageAmount))

inputMortgageTerm.addEventListener('focus', () => inputFocus(inputMortgageTerm, containerMortgageTerm))
inputMortgageTerm.addEventListener('blur', () => inputBlur(inputMortgageTerm, containerMortgageTerm))

inputInterestRate.addEventListener('focus', () => inputFocus(inputInterestRate, containerInterestRate))
inputInterestRate.addEventListener('blur', () => inputBlur(inputInterestRate, containerInterestRate))

radioRepayment.addEventListener('focus', () => radioFocus(radioRepayment, radioContainer1))
radioRepayment.addEventListener('blur', () => radioBlur(radioRepayment, radioContainer1))

radioInterestOnly.addEventListener('focus', () => radioFocus(radioInterestOnly, radioContainer2))
radioInterestOnly.addEventListener('blur', () => radioBlur(radioInterestOnly, radioContainer2))

buttonSubmit.addEventListener('click', buttonClicked)

containerMortgageAmount.addEventListener('mouseenter', () => containerHover(inputMortgageAmount, containerMortgageAmount))
containerMortgageAmount.addEventListener('mouseleave', () => containerUnhover(containerMortgageAmount))

containerMortgageTerm.addEventListener('mouseenter', () => containerHover(inputMortgageTerm, containerMortgageTerm))
containerMortgageTerm.addEventListener('mouseleave', () => containerUnhover(containerMortgageTerm))

containerInterestRate.addEventListener('mouseenter', () => containerHover(inputInterestRate, containerInterestRate))
containerInterestRate.addEventListener('mouseleave', () => containerUnhover(containerInterestRate))

clearAll.addEventListener('click', clearAllClick)