function previewResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var queryString = new URLSearchParams({
        name: name,
        email: email,
        experience: experience,
        skills: skills
    }).toString();
    window.location.href = "preview.html?".concat(queryString);
}
