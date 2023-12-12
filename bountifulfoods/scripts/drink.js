// Function that retrieves and displays the local drink submissions.
function getDrinkSubmissionInfo() {
    // This uses the URL API to store and retrieve the drink submission information.
    const urlParams = new URLSearchParams(window.location.search);
    const drinkSubmissions = urlParams.get('drinkSubmissions') || 0;
    document.getElementById('drink-submission-info').textContent = `You've submitted ${drinkSubmissions} specialty drinks.`;
  }
  
  // This fetches the data and displays the information about the drink submissions
  getDrinkSubmissionInfo();
 
// Function that should increment and display the drink counter
function incrementDrinkCounter() { 

  // This gets the current drink submissions count from the URL api
  const urlParams = new URLSearchParams(window.location.search);
  let drinkSubmissions = urlParams.get('drinkSubmissions') || 0;

  // This increments the drink counter
  drinkSubmissions = parseInt(drinkSubmissions, 10) + 1;

  // This updates the URL api with the new drink counter value
  urlParams.set('drinkSubmissions', drinkSubmissions);

  // This displays the updated drink counter on the page
  document.getElementById('drink-submission-info').textContent = `You've submitted ${drinkSubmissions} specialty drinks.`;
}

// This should call the function to display the initial drink counter on page load but right now it doesn't display
getDrinkSubmissionInfo();

// This is an event listener for the form submission
document.getElementById('order-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  // This calls the function to increment and display the drink counter but it doesn't display right now.
  incrementDrinkCounter();

  // This collects the form data and proceeds with the order confirmation logic
  const formData = new FormData(event.target);
    const order = {
      firstName: formData.get('first-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      fruits: [
          formData.get('fruit'),
          formData.get('fruit'),
          formData.get('fruit'),
        ],
        specialInstructions: formData.get('special-instructions'),
    };


  // This saves the order details in the URL api for order-confirmation page to access
  const queryParams = new URLSearchParams(order);

  // This navigates to the order confirmation page
  window.location.href = `order-confirmation.html?${queryParams.toString()}`;
});
  // This calls the function to display the last modified date for when the page loads.
  displayLastModifiedDate();
