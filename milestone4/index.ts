function goBack(): void {
    window.location.href = 'index.html';
}

function displayResume(): void {
    
    const queryParams = new URLSearchParams(window.location.search);
    
    // i learn this from youtube
    const name = queryParams.get('name') || '';
    const email = queryParams.get('email') || '';
    const experience = queryParams.get('experience') || '';
    const skills = queryParams.get('skills') || '';

    
    const resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    }
}

window.onload = displayResume;
