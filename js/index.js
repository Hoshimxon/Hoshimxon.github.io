const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function sendEmail() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let message = document.forms["form"]["message"].value;

    if (name === '') {
        alert("Name must be filled out!");
    }else if(email === '') {
        alert("Email must be filled out!");
    }else if(message === '') {
        alert("Message must be filled out!");
    }else if(!pattern.test(email)) {
        alert("Please enter valid email!");
    }else {
        let send = document.getElementById('send');
        send.disabled = true;
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
        send.disabled = false;
    }
}