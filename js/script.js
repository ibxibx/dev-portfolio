// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message')
let submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

	if(emailValue.includes('@')) {
		alert('Thank You for Your Message');
    } else { 
    	alert ('it looks like the Email You have entered is not valid. Please rectify')}
})

document.addEventListener("DOMContentLoaded", function() {
    var navigationLinks = document.querySelectorAll('.navigation-list__item');
    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            var href = this.getAttribute('href'); // Get the href attribute
            window.location.href = href; // Redirect to the href URL
        });
    });
});


// attaching "click listener'
// getting user entered values
// javascript validations