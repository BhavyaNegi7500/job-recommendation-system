
document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const recommendationsDiv = document.getElementById('recommendations');
    
    const jobs = [
        { title: 'Frontend Developer', skills: ['html', 'css', 'javascript'] },
        { title: 'Backend Developer', skills: ['node', 'python', 'database'] },
        { title: 'Data Scientist', skills: ['python', 'sql', 'machine learning'] },
        { title: 'UX Designer', skills: ['ux', 'ui', 'research'] },
        { title: 'Project Manager', skills: ['management', 'communication', 'organization'] }
    ];

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const skillInput = document.getElementById('skill').value.trim().toLowerCase();
        const userSkills = skillInput.split(',').map(skill => skill.trim());
        
        // Clear previous recommendations
        recommendationsDiv.innerHTML = '';

        const recommendations = jobs.filter(job => {
            return job.skills.some(skill => userSkills.includes(skill));
        });

        if (recommendations.length === 0) {
            recommendationsDiv.innerHTML = '<p>No job recommendations found.</p>';
        } else {
            recommendations.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.className = 'recommendation-item';
                jobElement.textContent = job.title;
                recommendationsDiv.appendChild(jobElement);
            });
        }
    });
});
