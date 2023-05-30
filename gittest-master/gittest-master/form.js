8// Declare the variables using the constructor elements
const loader = document.querySelector('.loader');
const form = document.querySelector('.container');
const submitButton = document.querySelector('.submitbtn');
const alertBox = document.querySelector('.alert-box');
const alertMsg = document.querySelector('.alert-msg');

// Declare more variables
submitButton.addEventListener('click', () => {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const number = document.querySelector('#number').value.trim();
  const termsAndCond = document.querySelector('#terms-and-cond').checked;
  const notification = document.querySelector('#notification').checked;

  // Using if else statements to make sure that an alert box will appear when information is incorrectly inputed
  if (name.length < 3) {
    alertMsg.textContent = 'Name must be at least 3 letters long.';
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000); // Hide alert box after 3 seconds (3000 milliseconds)
  } else if (email === '') {
    alertMsg.textContent = 'Please enter your email.';
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000); 
  } else if (password.length < 8) {
    alertMsg.textContent = 'Password should be at least 8 letters long.';
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000); 
  } else if (number === '' || isNaN(number) || number.length < 10) {
    alertMsg.textContent = 'Please enter a valid phone number.';
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000); 
  } else if (!termsAndCond) {
    alertMsg.textContent = 'You must agree to our terms and conditions.';
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000); 
  } else if (!notification) {
    alertMsg.textContent = 'You must be 13 years or older to create an account.';
    alertBox.classList.add('show');
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000); 
  } else {
    alertBox.classList.remove('show');
    loader.style.display = 'block';
    form.submit();
    window.location.href="dashboard.html";
  }
});

// Making sure that alert-box appears
const showAlert = (msg) => {
  console.log('showAlert function called with message:', msg);
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  let errorBox = document.querySelector('.error-box');
  let errorMsg = document.querySelector('.error-msg');

  if (alertBox.classList.contains('show')) {
    alertBox.classList.remove('show');
  }

  errorMsg.innerHTML = msg;
  errorBox.classList.add('show');

  setTimeout(() => {
    errorBox.classList.remove('show');
  }, 3000); // Hide alert box after 3 seconds (3000 milliseconds)
};
  






  





