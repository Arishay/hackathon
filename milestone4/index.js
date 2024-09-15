function goBack() {
    window.location.href = 'index.html';
}
function displayResume() {
    var queryParams = new URLSearchParams(window.location.search);
    // i learn this from youtube
    var name = queryParams.get('name') || '';
    var email = queryParams.get('email') || '';
    var experience = queryParams.get('experience') || '';
    var skills = queryParams.get('skills') || '';
    var resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    }
}
window.onload = displayResume;
