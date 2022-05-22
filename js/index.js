function sendEmail() {
    emailjs.sendForm('service_9pfyr0s', 'template_7gsubki', "#myForm", 'm7Jzqu_aPRNVIN6i7')
        .then((result) => {
            const inputs = document.querySelectorAll('#name, #email, #message');

            inputs.forEach(input => {
                input.value = '';
            });

            alert('Your message was sent successfully!');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}