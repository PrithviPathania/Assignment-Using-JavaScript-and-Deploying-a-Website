function displayThankYouMessage() {
    document.getElementById("contact-page").innerHTML = "<p style='font-size: 24px;'>Thank you for your message</p>";
}
document.getElementById("submit-button").addEventListener("click", displayThankYouMessage);
