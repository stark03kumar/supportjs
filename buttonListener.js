function waitForButton() {
  var button = document.getElementById('redirect');
  if (button) {
    button.addEventListener('click', function() {
      window.location.href = '${Utils.getBaseUrl()}Vacancy/CandidateVacancyDetailViewData'; 
    });
    clearInterval(interval);  // Stop checking once the button is found and listener is added
  }
}

// Run the function to wait for the button on page load
var interval = setInterval(waitForButton, 100); // Check every 100ms
