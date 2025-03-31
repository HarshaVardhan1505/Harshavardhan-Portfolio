// Initialize EmailJS
emailjs.init("voPjG9dTmqJDBbCVX"); 

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_ppazr3m", "template_pxc4cg9", formData)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        document.getElementById("notification").innerText = "Message sent successfully!";
        document.getElementById("notification").style.display = "block";
        document.getElementById("contactForm").reset(); // Clear the form
    })
    .catch(function(error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please check the console for details.");
        document.getElementById("notification").innerText = "Failed to send message. Please try again.";
        document.getElementById("notification").style.color = "red";
        document.getElementById("notification").style.display = "block";
    });

    // Hide message after 3 seconds
    setTimeout(() => {
        document.getElementById("notification").style.display = "none";
    }, 3000);
});
