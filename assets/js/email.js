/*EmailJS code segment inspired by the EmailJS website and tutorial
https://www.emailjs.com/docs/tutorial/overview/?ref=welcome


/*Code to prevent the site to reload after pressing the submit button*/
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
})

function sendMail(modalContactForm) {
    emailjs
        .send("EMMP", "template_EMMP", {
            from_name: modalContactForm.name.value,
            from_email: modalContactForm.email.value,
            message: modalContactForm.message.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                modalContactForm.reset();
                /* Code for replacing placeholder text as a feedback for the user from https://stackoverflow.com/questions/13506481/change-placeholder-text */
                $("#message").attr("placeholder", "Thank you for your email! We appreciate You getting back to us. Our Team will get in touch with you soon!");
            },
            function (error) {
                console.log("FAILED", error);
                alert("Error occured. Please try again!" + error);
                $("#modalclose").click();
            }
        );
}