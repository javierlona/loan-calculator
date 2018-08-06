// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculate_results, false);

function calculate_results(event) {
  // Assign elements to variables
  let amount = document.querySelector('#amount');
  let interest = document.querySelector('#interest');
  let months = document.querySelector('#months');
  let monthlyPayment = document.querySelector('#monthly-payment');
  let totalPayment  = document.querySelector('#total-payment');
  let totalInterest = document.querySelector('#total-interest');

  // Convert to a float
  let principle = parseFloat(amount.value);
  let calculatedInterest = parseFloat(interest.value) / 100 / 12;
  let calculatedPayments = parseFloat(months.value);

  // Compute monthly payment
  let x = Math.pow(1 + calculatedInterest, calculatedPayments);
  let monthly = (principle * x * calculatedInterest) / (x - 1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
  } else {
    show_error('Please check your numbers.');
  }
  event.preventDefault();
}

function show_error(error) {
  // Create div element
  let errorDiv = document.createElement('div');
  // Get elements
  let card = document.querySelector('.card');
  let heading = document.querySelector('.heading');
  // Add class
  errorDiv.className = 'alert alert-danger';
  // Create text node and append to div element
  errorDiv.append(error);
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}