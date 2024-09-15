function previewResume(): void {
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    
    const queryString = new URLSearchParams({
        name,
        email,
        experience,
        skills
    }).toString();

    
    window.location.href = `preview.html?${queryString}`;
}
