function sendEmail(response) {
    const templateParams = {
        to_name: "vivek",
        message: `She is ${response} with your wishes.`,
    };

    emailjs.send("service_8pzf8eu", "template_qugvdxv", templateParams).then(
        function() {
            alert("Your feedback has been sent!");
            window.location.href = "apology.html";
        },
        function(error) {
            alert("Failed to send feedback. Try again.");
        }
    );
}
