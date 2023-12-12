 // This should fetch the fruit data from fruit.json
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
      const selectElement = document.getElementById('fruit-selection1');}
      async function populateFruitOptions() {
        const fruitData = await getFruitData(); 
          const selectElement = document.getElementById('fruit-selection2');}
          async function populateFruitOptions() {
            const fruitData = await getFruitData(); 
              const selectElement = document.getElementById('fruit-selection3');}
    fruitData.forEach(fruit => {
       const option = document.createElement('option');
       option.value = fruit.name;
       option.textContent = fruit.name;
       selectElement.appendChild(option);
    });
  
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
  
    // This saves the details of the order with the URL api so that the order-confirmation page has access to it
    const queryParams = new URLSearchParams(order);
  
    // This should navigate to the order confirmation page
    window.location.href = `order-confirmation.html?${queryParams.toString()}`;
  ;
  
  // This displays the order details on order-confirmation.html
  function displayOrderDetails() {
    const orderDetailsContainer = document.getElementById('order-details');
    const urlParams = new URLSearchParams(window.location.search);
    const orderDetails = {
        firstName: urlParams.get('firstName'),
        email: urlParams.get('email'),
        phone: urlParams.get('phone'),
        fruits: urlParams.getAll('fruit'),
        specialInstructions: urlParams.get('special-instructions'),
    };
  
    // This displays the order details on the page
    orderDetailsContainer.innerHTML = `
    <p><strong>Name:</strong> ${orderDetails.firstName}</p>
    <p><strong>Email:</strong> ${orderDetails.email}</p>
    <p><strong>Phone:</strong> ${orderDetails.phone}</p>
    <p><strong>Fruits:</strong> ${orderDetails.fruits.join(', ')}</p>
    <p><strong>Special Instructions:</strong> ${orderDetails.specialInstructions}</p>
  `;
}
  
  // This should populate the options for fruits when the page loads but it doesn't right now.
  populateFruitOptions('fruit-selection1');
  populateFruitOptions('fruit-selection2');
  populateFruitOptions('fruit-selection3');
  // This recursively calls the display order details on order-confirmation.html
  displayOrderDetails();
   // Function that displays the last modified date in the footer
function displayLastModifiedDate() {
    const lastModifiedContainer = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified).toLocaleString();
    lastModifiedContainer.textContent = `Last Modified: ${lastModifiedDate}`;
  }