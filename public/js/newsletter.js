function validateEmail(email) {
    const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(email.match(mailformat))
        return true;
    
    return false;
}

const newsletterForm = document.getElementById('newsletter_form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(newsletterForm);
        const email = formData.get('email');

        if (validateEmail(email)) {
            alert('Successful subscription.');
            e.target.reset();
        } else {
            alert('Please enter a valid email.')
        }
        
    });
}