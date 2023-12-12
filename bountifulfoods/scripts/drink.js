// Function that retrieves and displays the local drink submissions.
function getDrinkSubmissionInfo() {
    // This uses local storage to store and retrieve the drink submission information.
    const drinkSubmissions = localStorage.getItem('drinkSubmissions') || 0;
    document.getElementById('drink-submission-info').textContent = `You've submitted ${drinkSubmissions} specialty drinks.`;
  }
  
  // Here's an event listener for the menu icon
  document.querySelector('.menu-icon').addEventListener('click', () => {
    // This toggles the visibility of the navigation menu
    document.querySelector('.nav-list').classList.toggle('show');
  });
  
  // This fetches the data and displays the information about the drink submissions
  getDrinkSubmissionInfo();

  // This should fetch the fruit data from fruit.json but it isn't doing that right now
  async function getFruitData() {
    try {
        const response = await fetch('./fruit.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching fruit data:', error);
    }
}
  
 
  async function populateFruitOptions() {
    const fruitData = await getFruitData(); 
    const selectElement = document.getElementById('fruit-selection');
 
    fruitData.forEach(fruit => {
       const option = document.createElement('option');
       option.value = fruit.name;
       option.textContent = fruit.name;
       selectElement.appendChild(option);
    });

  }
  // This updates the event listener for form submission
  document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // This collects the form data
    const formData = new FormData(document.getElementById('order-form'));
  
    // This builds the order
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
  
    // This saves the details of the order in localStorage so that the order-confirmation page has access to it
    localStorage.setItem('orderDetails', JSON.stringify(order));
  
    // This should navigate to the order confirmation page
    window.location.href = 'order-confirmation.html';
  });
  
  // This displays the order details on order-confirmation.html
  function displayOrderDetails() {
    const orderDetailsContainer = document.getElementById('order-details');
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
  
    // This displays the order details on the page
    orderDetailsContainer.innerHTML = `
      <p><strong>Name:</strong> ${orderDetails.firstName}</p>
      <p><strong>Email:</strong> ${orderDetails.email}</p>
      <p><strong>Phone:</strong> ${orderDetails.phone}</p>
      <p><strong>Fruits:</strong> ${orderDetails.fruits.join('./fruit.json')}</p>
      <p><strong>Special Instructions:</strong> ${orderDetails.specialInstructions}</p>
    `;
  }
  
  // This should populate the options for fruits when the page loads but it doesn't right now.
  populateFruitOptions();
  
  // This recursively calls the display order details on order-confirmation.html
  displayOrderDetails();

  // Function that displays the last modified date in the footer
function displayLastModifiedDate() {
    const lastModifiedContainer = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified).toLocaleString();
    lastModifiedContainer.textContent = `Last Modified: ${lastModifiedDate}`;
  }
// Get the URL for the current page
const currentPage = window.location.pathname;

// This finds the corresponding link and adds the "active" class
document.querySelectorAll('.nav-list a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
// Function that should increment and display the drink counter
function incrementDrinkCounter() { 

  // This gets the current drink submissions count from the localStorage
  let drinkSubmissions = localStorage.getItem('drinkSubmissions') || 0;

  // This increments the drink counter
  drinkSubmissions = parseInt(drinkSubmissions, 10) + 1;

  // This updates the localStorage with the new drink counter value
  localStorage.setItem('drinkSubmissions', drinkSubmissions);

  // This displays the updated drink counter on the page
  document.getElementById('drink-submission-info').textContent = `You've submitted ${drinkSubmissions} specialty drinks.`;
}

// This should call the function to display the initial drink counter on page load but it doesn't display
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

  // This saves the order details in localStorage for order-confirmation page to access
  localStorage.setItem('orderDetails', JSON.stringify(order));

  // This navigates to the order confirmation page
  window.location.href = 'order-confirmation.html';
});
  // This calls the function to display the last modified date for when the page loads.
  displayLastModifiedDate();