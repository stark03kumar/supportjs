function waitForButton() {
    console.log('Checking for redirect button...');
    var button = document.getElementById('redirect');
    if (button) {
        console.log('redirect button found. Adding event listener.');
        button.addEventListener('click', function() {
            console.log('Redirect button clicked.');
            window.location.href = 'replace_url';
        });
        clearInterval(interval); // Stop checking once the button is found and listener is added
    }
}

var submitButton = document.getElementById('submit-btn');
if (submitButton) {
    console.log('Submit button not found.');
    submitButton.addEventListener('click', function() {
        var interval = setInterval(waitForButton, 100); // Check for the button every 100ms
    });
} else {
    console.log('Submit button not found.');
}
