// url api, load the fruit data nutrition info 
let url = new URL(window.location.search);
let params  = url.searchParams;

document.querySelector('#yourfirstname').textContent = params.get("firstname");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourphonenumber').textContent = params.get("phonenumber");
document.querySelector('#yourfruit-selection1').textContent = params.get("fruit-selection1");
document.querySelector('#yourfruit-selection2').textContent = params.get("fruit-selection2");
document.querySelector('#yourfruit-selection3').textContent = params.get("fruit-selection3");