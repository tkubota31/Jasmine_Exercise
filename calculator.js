window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    loanAmount: +(document.getElementById("loan-amount").value),
    yearsAmount: +(document.getElementById("loan-years").value),
    rateAmount: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {loanAmount: 5000, yearsAmount: 5, rateAmount: 3};
  let loan = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
  loan.value = values.loanAmount;
  years.value = values.yearsAmount;
  rate.value = values.rateAmount;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPay = (values.rateAmount / 100) / 12;
  let n = Math.floor(values.yearsAmount * 12);
  return (
    (values.loanAmount * monthlyPay) / (1 - (1 + monthlyPay) ** -n)).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
