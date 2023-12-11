// Function to retrieve and display local drink submission information
  function getDrinkSubmissionInfo() {
    // use local storage or another method to store and retrieve this information
    const drinkSubmissions = localStorage.getItem('drinkSubmissions') || 0;
    document.getElementById('drink-submission-info').textContent = `You've submitted ${drinkSubmissions} specialty drinks.`;
  }
  
  // Event listener for the menu icon
  document.querySelector('.menu-icon').addEventListener('click', () => {
    // Toggle the visibility of the navigation menu
    document.querySelector('.nav-list').classList.toggle('show');
  });
  
  // Call functions to fetch data and display information
 
  getDrinkSubmissionInfo();
  // Add this function to fetch fruit data from fruit.json
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
  // Update the event listener for form submission
  document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Collect form data
    const formData = new FormData(document.getElementById('order-form'));
  
    // Build order object
    const order = {
      firstName: formData.get('first-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      fruits: [
        formData.get('fruit1'),
        formData.get('fruit2'),
        formData.get('fruit3'),
      ],
      specialInstructions: formData.get('special-instructions'),
    };
  
    // Save order details in localStorage for order-confirmation page to access
    localStorage.setItem('orderDetails', JSON.stringify(order));
  
    // Navigate to order confirmation page
    window.location.href = 'order-confirmation.html';
  });
  
  // Add this function to display order details on order-confirmation.html
  function displayOrderDetails() {
    const orderDetailsContainer = document.getElementById('order-details');
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
  
    // Display order details on the page
    orderDetailsContainer.innerHTML = `
      <p><strong>Name:</strong> ${orderDetails.firstName}</p>
      <p><strong>Email:</strong> ${orderDetails.email}</p>
      <p><strong>Phone:</strong> ${orderDetails.phone}</p>
      <p><strong>Fruits:</strong> ${orderDetails.fruits.join('fruit.json')}</p>
      <p><strong>Special Instructions:</strong> ${orderDetails.specialInstructions}</p>
    `;
  }
  
  // Populate fruit options when the page loads
  populateFruitOptions();
  
  // display order details on order-confirmation.html
  displayOrderDetails();
  // Function to display last modified date in the footer
function displayLastModifiedDate() {
    const lastModifiedContainer = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified).toLocaleString();
    lastModifiedContainer.textContent = `Last Modified: ${lastModifiedDate}`;
  }
// Get the current page URL
const currentPage = window.location.pathname;

// Find the corresponding link and add the "active" class
document.querySelectorAll('.nav-list a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
// Function to increment and display the drink counter
function incrementDrinkCounter() { 
  // Get the current drink submissions count from localStorage
  let drinkSubmissions = localStorage.getItem('drinkSubmissions') || 0;

  // Increment the drink counter
  drinkSubmissions = parseInt(drinkSubmissions, 10) + 1;

  // Update the localStorage with the new drink counter value
  localStorage.setItem('drinkSubmissions', drinkSubmissions);

  // Display the updated drink counter on the page
  document.getElementById('drink-submission-info').textContent = `You've submitted ${drinkSubmissions} specialty drinks.`;
}

// Call the function to display the initial drink counter on page load
getDrinkSubmissionInfo();

// Event listener for the form submission
document.getElementById('order-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  // Call the function to increment and display the drink counter
  incrementDrinkCounter();

  // Collect form data and proceed with the order confirmation logic
  const formData = new FormData(event.target);
  const order = {
    firstName: formData.get('first-name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    fruits: [
      formData.get('fruit1'),
      formData.get('fruit2'),
      formData.get('fruit3'),
    ],
    specialInstructions: formData.get('special-instructions'),
  };

  // Save order details in localStorage for order-confirmation page to access
  localStorage.setItem('orderDetails', JSON.stringify(order));

  // Navigate to order confirmation page
  window.location.href = 'order-confirmation.html';
});
  // Call the function to display last modified date when the page loads
  displayLastModifiedDate();