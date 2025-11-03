// Get the elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const mainContainer = document.getElementById('main-container');

// Get the new toggle links
const signUpLink = document.getElementById('signUpLink');
const signInLink = document.getElementById('signInLink');

// Add event listener for sign up button
signUpButton.addEventListener('click', () => {
    mainContainer.classList.add('right-panel-active');
});

// Add event listener for sign in button
signInButton.addEventListener('click', () => {
    mainContainer.classList.remove('right-panel-active');
});

// Add event listeners for the new links
if (signUpLink) {
    signUpLink.addEventListener('click', () => {
        mainContainer.classList.add('right-panel-active');
    });
}

if (signInLink) {
    signInLink.addEventListener('click', () => {
        mainContainer.classList.remove('right-panel-active');
    });
}