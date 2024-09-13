var form = document.getElementById('form');
var display = document.getElementById('display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    console.log({ name: name, email: email, contact: contact, education: education, skills: skills, experience: experience });
    var displayHtml = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Contact:</b> ").concat(contact, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    if (display) {
        display.innerHTML = displayHtml;
    }
    else {
        console.error('The resume display is unavailable.');
    }
});
