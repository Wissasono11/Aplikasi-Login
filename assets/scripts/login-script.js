/** @module Login-Script */
/**
 *  Make variabel loginFormElement for login form.
 *  @constant {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/**
 *  Make variabel inputEmailElement for email input.
 *  @constant {HTMLElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');

/**
 *  Make variabel inputPasswordElement for password input.
 *  @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');


/**
 *  Make variabel expectedEmail for current email.
 *  @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// add event listeer to login form
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /**
     *  variabel email for data email from button when clicked.
     * @constant {string}
     */
    const email = inputEmailElement.value;

    /**
     *  variabel password for data password from button when clicked.
     * @constant {string}
     */
    const password = inputPasswordElement.value; 
  
    // Check condition if email and password correct
    if (email === expectedEmail && password === expectedPassword){

      // If password correct direct into function goToHome
      goToHome();

    } else {

      // If password incorrect direct into function showPopUp()
      showPopUp();
      
    }
});
