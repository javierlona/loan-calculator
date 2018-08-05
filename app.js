// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculate_results, false);

function calculate_results(event) {
  
  const AMOUNT = document.querySelector('#amount');
  const INTEREST = document.querySelector('#interest');
  const YEARS = document.querySelector('#years');
  const MONTHLYPAYMENT = document.querySelector('#monthly-payment');
  const TOTALPAYMENT  = document.querySelector('#total-payment');
  const TOTALINTEREST = document.querySelector('#total-interest');

  // Convert to a float
  const PRINCIPLE = parseFloat(AMOUNT.value);
  const CALCULATEDINTEREST = parseFloat(INTEREST.value) / 100 / 12;
  const CALCULATEDPAYMENTS = parseFloat(YEARS.value) * 12;

  // Compute monthly payment
  const X = Math.pow(1 + CALCULATEDINTEREST, CALCULATEDPAYMENTS);
  const MONTHLY = (PRINCIPLE * X * CALCULATEDINTEREST) / (X - 1);

  if(isFinite(MONTHLY)) {
    MONTHLYPAYMENT.value = MONTHLY.toFixed(2);
    TOTALPAYMENT.value = (MONTHLY * CALCULATEDPAYMENTS).toFixed(2);
    TOTALINTEREST.value = ((MONTHLY * CALCULATEDPAYMENTS) - PRINCIPLE).toFixed(2);
  } else {
    console.log("Check yo self!");
  }

  event.preventDefault();
}

