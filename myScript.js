const inputMortgageAmount = document.getElementById('input-mortgage-amount')
const containerMortgageAmount = document.getElementById('container-mortgage-amount')

const inputMortgageTerm = document.getElementById('input-mortgage-term')
const containerMortgageTerm = document.getElementById('container-mortgage-term')

const inputInterestRate = document.getElementById('input-interest-rate')
const containerMortgageRate = document.getElementById('container-interest-rate')

const radioContainer1 = document.getElementById('radio-container-1')
const radioContainer2 = document.getElementById('radio-container-2')
const radioRepayment = document.getElementById('radio-repayment')
const radioInterestOnly = document.getElementById('radio-interest-only')

const buttonSubmit = document.getElementById('button-submit')

const resultsSide = document.getElementById('results-side')

function inputFocus(input, container) {
    input.style.border = "1px solid #dbda32"
    container.classList.add('focused')
}

function inputBlur(input, container) {
    input.style.border = "1px solid #838d8f"
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

function buttonClicked(event) {
    event.preventDefault();

    if (inputMortgageAmount.value.trim() === "" || inputInterestRate.value.trim() === "" || inputMortgageTerm.value.trim() === "" || (radioRepayment.checked === false && radioInterestOnly.checked === false)) {
        return;
    }

    resultsSide.innerHTML = `
    <div class="results-side">
        <h2>Your results</h2>

        <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        
        <div>
            <h3>Your monthly repayments</h3>
            <hr align="center">
            <h3>Total you'll repay over the term</h3>
        </div>
    </div>`
}

// Listeners
inputMortgageAmount.addEventListener('focus', () => inputFocus(inputMortgageAmount, containerMortgageAmount));
inputMortgageAmount.addEventListener('blur', () => inputBlur(inputMortgageAmount, containerMortgageAmount));

inputMortgageTerm.addEventListener('focus', () => inputFocus(inputMortgageTerm, containerMortgageTerm));
inputMortgageTerm.addEventListener('blur', () => inputBlur(inputMortgageTerm, containerMortgageTerm));

inputInterestRate.addEventListener('focus', () => inputFocus(inputInterestRate, containerMortgageRate));
inputInterestRate.addEventListener('blur', () => inputBlur(inputInterestRate, containerMortgageRate));

radioRepayment.addEventListener('focus', () => radioFocus(radioRepayment, radioContainer1));
radioRepayment.addEventListener('blur', () => radioBlur(radioRepayment, radioContainer1));

radioInterestOnly.addEventListener('focus', () => radioFocus(radioInterestOnly, radioContainer2));
radioInterestOnly.addEventListener('blur', () => radioBlur(radioInterestOnly, radioContainer2));

buttonSubmit.addEventListener('click', buttonClicked)

