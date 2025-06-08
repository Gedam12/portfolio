var typed = new Typed(".text", {
    strings: ["Software Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// ===== PORTFOLIO BUILDER JAVASCRIPT =====

// Variables to track skills and projects count
let skillCount = 1;
let projectCount = 1;

// Function to add new skill input
function addSkill() {
    skillCount++;
    const skillsContainer = document.getElementById('skillsContainer');
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';
    skillDiv.innerHTML = `
        <input type="text" placeholder="Skill name" class="skill-name">
        <input type="range" min="0" max="100" value="70" class="skill-level">
        <span class="skill-percent">70%</span>
        <button type="button" class="btn btn-small" onclick="removeSkill(this)">Remove</button>
    `;
    skillsContainer.appendChild(skillDiv);

    // Add event listener for the range input
    const rangeInput = skillDiv.querySelector('.skill-level');
    const percentSpan = skillDiv.querySelector('.skill-percent');
    rangeInput.addEventListener('input', function () {
        percentSpan.textContent = this.value + '%';
    });
}

// Function to remove skill
function removeSkill(button) {
    if (document.querySelectorAll('.skill-item').length > 1) {
        button.parentElement.remove();
    } else {
        alert('You must have at least one skill!');
    }
}

// Function to add new project input
function addProject() {
    projectCount++;
    const projectsContainer = document.getElementById('projectsContainer');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    projectDiv.innerHTML = `
        <div class="form-group">
            <label>Project Title</label>
            <input type="text" placeholder="Project name" class="project-title">
        </div>
        <div class="form-group">
            <label>Project Description</label>
            <textarea placeholder="Describe your project..." class="project-description"></textarea>
        </div>
        <div class="form-group">
            <label>Project URL (optional)</label>
            <input type="url" placeholder="https://yourproject.com" class="project-url">
        </div>
        <button type="button" class="btn btn-small" onclick="removeProject(this)">Remove Project</button>
        <hr style="margin: 20px 0;">
    `;
    projectsContainer.appendChild(projectDiv);
}

// Function to remove project
function removeProject(button) {
    if (document.querySelectorAll('.project-item').length > 1) {
        button.parentElement.remove();
    } else {
        alert('You must have at least one project!');
    }
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for existing skill level sliders
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(function (slider) {
        const percent = slider.nextElementSibling;
        slider.addEventListener('input', function () {
            percent.textContent = this.value + '%';
        });
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect for header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(8, 21, 51, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#081533';
            header.style.backdropFilter = 'none';
        }
    });
});

// Main function to generate portfolio
function generatePortfolio() {
    // Validate required fields
    const requiredFields = ['fullName', 'title', 'bio', 'email', 'aboutDescription'];
    const missingFields = [];

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            missingFields.push(field.previousElementSibling.textContent);
        }
    });

    if (missingFields.length > 0) {
        alert('Please fill in the following required fields:\n' + missingFields.join('\n'));
        return;
    }

    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        title: document.getElementById('title').value.trim(),
        bio: document.getElementById('bio').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        linkedin: document.getElementById('linkedin').value.trim(),
        github: document.getElementById('github').value.trim(),
        aboutDescription: document.getElementById('aboutDescription').value.trim(),
        skills: [],
        projects: []
    };

    // Collect skills data
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const name = item.querySelector('.skill-name').value.trim();
        const level = item.querySelector('.skill-level').value;
        if (name) {
            formData.skills.push({ name, level });
        }
    });

    // Collect projects data
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        const title = item.querySelector('.project-title').value.trim();
        const description = item.querySelector('.project-description').value.trim();
        const url = item.querySelector('.project-url').value.trim();
        if (title && description) {
            formData.projects.push({ title, description, url });
        }
    });

    // Validate that at least one skill and project exist
    if (formData.skills.length === 0) {
        alert('Please add at least one skill!');
        return;
    }

    if (formData.projects.length === 0) {
        alert('Please add at least one project!');
        return;
    }

    // Update preview
    updatePreview(formData);

    // Show download button
    document.getElementById('downloadBtn').style.display = 'block';

    // Store data for download
    window.portfolioData = formData;

    // Show success message
    alert('Portfolio generated successfully! You can now download it.');

    // Scroll to preview on mobile
    if (window.innerWidth <= 768) {
        document.querySelector('.preview-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to update the preview
function updatePreview(data) {
    // Update basic information
    document.getElementById('previewName').textContent = data.fullName || 'Your Name';
    document.getElementById('previewTitle').textContent = data.title || 'Professional';
    document.getElementById('previewTitleAbout').textContent = data.title || 'Professional Title';
    document.getElementById('previewBio').textContent = data.bio || 'Your professional bio will appear here...';
    document.getElementById('previewAboutDescription').textContent = data.aboutDescription || 'Your detailed about description will appear here...';

    // Update contact information
    document.getElementById('contactEmail').textContent = data.email || 'your.email@domain.com';
    document.getElementById('contactPhone').textContent = data.phone || '+1 (555) 123-4567';

    // Update social links
    const linkedInLink = document.getElementById('previewLinkedIn');
    const githubLink = document.getElementById('previewGitHub');
    const emailLink = document.getElementById('previewEmail');

    if (data.linkedin) {
        linkedInLink.href = data.linkedin;
        linkedInLink.style.display = 'inline-flex';
    } else {
        linkedInLink.style.display = 'none';
    }

    if (data.github) {
        githubLink.href = data.github;
        githubLink.style.display = 'inline-flex';
    } else {
        githubLink.style.display = 'none';
    }

    if (data.email) {
        emailLink.href = `mailto:${data.email}`;
        emailLink.style.display = 'inline-flex';
    } else {
        emailLink.style.display = 'none';
    }

    // Update skills section
    const skillsPreview = document.getElementById('skillsPreview');
    skillsPreview.innerHTML = '';

    if (data.skills.length > 0) {
        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.style.cssText = 'margin-bottom: 10px;';
            skillDiv.innerHTML = `
                <div style="display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 3px;">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #333; border-radius: 2px; overflow: hidden;">
                    <div style="width: ${skill.level}%; height: 100%; background: #0ef; border-radius: 2px; transition: width 1s ease;"></div>
                </div>
            `;
            skillsPreview.appendChild(skillDiv);
        });
    } else {
        skillsPreview.innerHTML = '<p style="font-size: 10px; color: #ccc;">No skills added yet</p>';
    }

    // Update projects section
    const projectsPreview = document.getElementById('projectsPreview');
    projectsPreview.innerHTML = '';

    if (data.projects.length > 0) {
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.style.cssText = 'background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px; text-align: left;';
            projectDiv.innerHTML = `
                <h5 style="color: #0ef; font-size: 10px; margin-bottom: 5px;">${project.title}</h5>
                <p style="font-size: 8px; line-height: 1.3; margin-bottom: 5px;">${project.description}</p>
                ${project.url ? `<a href="${project.url}" target="_blank" style="color: #0ef; text-decoration: none; font-size: 8px;">View Project <i class='bx bx-link-external'></i></a>` : ''}
            `;
            projectsPreview.appendChild(projectDiv);
        });
    } else {
        projectsPreview.innerHTML = '<p style="font-size: 10px; color: #ccc;">No projects added yet</p>';
    }

    // Initialize typing effect for preview
    if (window.previewTyped) {
        window.previewTyped.destroy();
    }

    // Small delay to ensure element is ready
    setTimeout(() => {
        window.previewTyped = new Typed('#previewTitle', {
            strings: [data.title || 'Professional', 'Developer', 'Creator'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }, 100);
}

// Function to download portfolio as HTML file
function downloadPortfolio() {
    if (!window.portfolioData) {
        alert('Please generate your portfolio first!');
        return;
    }

    const data = window.portfolioData;
    const html = generateFullHTML(data);

    // Create download
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.fullName.replace(/\s+/g, '_')}_Portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Portfolio downloaded successfully!');
}

// Function to generate complete HTML for download
function generateFullHTML(data) {
    const skillsHTML = data.skills.map(skill => `
                <div class="bar">
                    <div class="info">
                        <span>${skill.name}</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="progress-line">
                        <span style="width: ${skill.level}%;"></span>
                    </div>
                </div>
            `).join('');

    const projectsHTML = data.projects.map(project => `
                <div class="row">
                    <div class="placeholder-img">${project.title}</div>
                    <div class="layer">
                        <h5>${project.title}</h5>
                        <p>${project.description}</p>
                        ${project.url ? `<a href="${project.url}" target="_blank"><i class='bx bx-link-external'></i></a>` : ''}
                    </div>
                </div>
            `).join('');

    const socialLinksHTML = `
        ${data.linkedin ? `<a href="${data.linkedin}" style="--i:7"><i class='bx bxl-linkedin'></i></a>` : ''}
        ${data.github ? `<a href="${data.github}" style="--i:8"><i class='bx bxl-github'></i></a>` : ''}
        ${data.email ? `<a href="mailto:${data.email}" style="--i:9"><i class='bx bxl-gmail'></i></a>` : ''}
    `;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.fullName} - Portfolio</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            color: #ebedeb;
            background: #01152c;
        }

        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 10%;
            background: #081533;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
        }

        .logo {
            font-size: 25px;
            color: #fff;
            text-decoration: none;
            font-weight: 600;
        }

        .navbar {
            display: flex;
            gap: 35px;
        }

        .navbar a {
            font-size: 18px;
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: .3s;
        }

        .navbar a:hover {
            color: #0ef;
        }

        .home {
            width: 100%;
            height: 100vh;
            background: linear-gradient(rgba(1,21,44,0.8), rgba(1,21,44,0.8));
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            padding: 70px 10% 0;
        }

        .home-content {
            max-width: 600px;
        }

        .home-content h3 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .home-content h1 {
            font-size: 56px;
            font-weight: 700;
            margin: 10px 0;
        }

        .home-content h3 span {
            color: #0ef;
        }

        .home-content p {
            font-size: 20px;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .home-sci {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
        }

        .home-sci a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: transparent;
            border: 2px solid #0ef;
            border-radius: 50%;
            font-size: 20px;
            color: #0ef;
            text-decoration: none;
            transition: .5s ease;
        }

        .home-sci a:hover {
            background: #0ef;
            color: #081b29;
            box-shadow: 0 0 20px #0ef;
        }

        .btn-box {
            display: inline-block;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: 600;
            background: #0ef;
            color: #081b29;
            text-decoration: none;
            border-radius: 8px;
            transition: .3s;
        }

        .about {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            gap: 1.5rem;
            padding: 100px 10% 50px;
        }

        .about-img {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .about-img .placeholder {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            font-weight: 600;
        }

        .about-text h2 {
            font-size: 60px;
        }

        .about-text h2 span {
            color: #0ef;
        }

        .about-text h4 {
            font-size: 29px;
            font-weight: 600;
            color: #fff;
            line-height: 1.7;
            margin: 15px 0 30px;
        }

        .about-text p {
            color: aliceblue;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .sub-title {
            font-size: 50px;
            text-align: center;
            padding: 50px 0 30px;
        }

        .sub-title span {
            color: #0ef;
        }

        .skills-container {
            padding: 0 10% 100px;
        }

        .container1 {
            padding: 40px;
            background: rgba(255,255,255,0.05);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            max-width: 800px;
            margin: 0 auto;
        }

        .heading {
            text-decoration: underline;
            text-underline-offset: 10px;
            text-decoration-thickness: 5px;
            margin-bottom: 30px;
            text-align: center;
            font-size: 28px;
        }

        .Technical-bars .bar {
            margin-bottom: 25px;
        }

        .Technical-bars .bar .info {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
        }

        .Technical-bars .bar .info span {
            font-size: 17px;
            font-weight: 500;
        }

        .Technical-bars .bar .progress-line {
            position: relative;
            border-radius: 10px;
            width: 100%;
            height: 8px;
            background-color: #333;
            overflow: hidden;
        }

        .Technical-bars .bar .progress-line span {
            height: 100%;
            background: linear-gradient(45deg, #0ef, #00d4ff);
            position: absolute;
            border-radius: 10px;
            animation: fillSkill 2s ease forwards;
            transform: scaleX(0);
            transform-origin: left;
        }

        @keyframes fillSkill {
            to { transform: scaleX(1); }
        }

        .main-text {
            padding: 100px 10% 50px;
        }

        .main-text h2 {
            font-size: 60px;
            line-height: 1;
            text-align: center;
        }

        .main-text h2 span {
            color: #0ef;
        }

        .portfolio-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .row {
            position: relative;
            background: rgba(255,255,255,0.05);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .row:hover {
            transform: translateY(-10px);
        }

        .row .placeholder-img {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            font-weight: 600;
        }

        .layer {
            padding: 25px;
            text-align: center;
        }

        .layer h5 {
            font-size: 20px;
            color: #0ef;
            margin-bottom: 10px;
        }

        .layer p {
            color: #ccc;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .layer a {
            color: #0ef;
            text-decoration: none;
            font-size: 18px;
            transition: 0.3s;
        }

        .layer a:hover {
            color: #fff;
        }

        .contact {
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            gap: 2rem;
            padding: 100px 10%;
            background: rgba(255,255,255,0.02);
            text-align: center;
        }

        .contact-text h2 {
            font-size: 60px;
            line-height: 1;
            margin-bottom: 20px;
        }

        .contact-text h2 span {
            color: #0ef;
        }

        .contact-text h4 {
            color: rgb(228, 228, 228);
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 15px;
        }

        .contact-text p {
            color: rgb(177, 177, 177);
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .contact-list {
            margin-bottom: 30px;
            list-style: none;
        }

        .contact-list li {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #fff;
        }

        .contact-list li i {
            color: #0ef;
            margin-right: 15px;
            font-size: 20px;
        }

        .contact-icons {
            display: flex;
            gap: 20px;
            justify-content: center;
        }

        .contact-icons a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            background: transparent;
            border: 2px solid #0ef;
            border-radius: 50%;
            font-size: 20px;
            color: #0ef;
            text-decoration: none;
            transition: .5s ease;
        }

        .contact-icons a:hover {
            background: #0ef;
            color: #081b29;
            box-shadow: 0 0 20px #0ef;
        }

        @media (max-width: 768px) {
            .about {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .home-content h1 {
                font-size: 40px;
            }

            .home-content h3 {
                font-size: 24px;
            }

            .main-text h2,
            .about-text h2,
            .contact-text h2 {
                font-size: 40px;
            }

            .portfolio-content {
                grid-template-columns: 1fr;
            }

            .navbar {
                flex-direction: column;
                gap: 10px;
            }

            .header {
                flex-direction: column;
                padding: 15px 5%;
            }

            .home {
                padding: 120px 5% 0;
            }
        }

        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="#" class="logo">${data.fullName}</a>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, it's me</h3>
            <h1>${data.fullName}</h1>
            <h3>And I am a <span class="text"></span></h3>
            <p>${data.bio}</p>
            <div class="home-sci">
                ${socialLinksHTML}
            </div>
            <a href="#about" class="btn-box">More About Me</a>
        </div>
    </section>

    <section class="about" id="about">
        <div class="about-img">
            <div class="placeholder">Photo</div>
        </div>
        <div class="about-text">
            <h2>About<span>Me</span></h2>
            <h4>${data.title}</h4>
            <p>${data.aboutDescription}</p>
        </div>
    </section>

    <h1 class="sub-title" id="skills">My<span>Skills</span></h1>
    <section class="skills-container">
        <div class="container1">
            <h1 class="heading">Technical Skills</h1>
            <div class="Technical-bars">
                ${skillsHTML}
            </div>
        </div>
    </section>

    <section class="main-text" id="projects">
        <h2>Latest<span>Projects</span></h2>
        <div class="portfolio-content">
            ${projectsHTML}
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="contact-text">
            <h2>Contact<span>Me</span></h2>
            <h4>Let's Work Together</h4>
            <p>Feel free to reach out for collaboration opportunities.</p>
            <div class="contact-list">
                <li><i class='bx bxs-send'></i>${data.email}</li>
                ${data.phone ? `<li><i class='bx bx-phone'></i>${data.phone}</li>` : ''}
            </div>
            <div class="contact-icons">
                ${data.linkedin ? `<a href="${data.linkedin}" target="_blank"><i class='bx bxl-linkedin-square'></i></a>` : ''}
                ${data.github ? `<a href="${data.github}" target="_blank"><i class='bx bxl-github'></i></a>` : ''}
                ${data.email ? `<a href="mailto:${data.email}"><i class='bx bxl-gmail'></i></a>` : ''}
            </div>
        </div>
    </section>

    <script>
        // Initialize typing effect
        var typed = new Typed(".text", {
            strings: ["${data.title}", "Developer", "Professional"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(8, 21, 51, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#081533';
                header.style.backdropFilter = 'none';
            }
        });
    </script>
</body>
</html>`;
}

// Utility function to sanitize HTML content
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate URL format
function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Add form validation on input
document.addEventListener('DOMContentLoaded', function () {
    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function () {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#ff4757';
                this.title = 'Please enter a valid email address';
            } else {
                this.style.borderColor = '#e1e5e9';
                this.title = '';
            }
        });
    }

    // URL validation for LinkedIn and GitHub
    const urlInputs = ['linkedin', 'github'];
    urlInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('blur', function () {
                if (this.value && !validateURL(this.value)) {
                    this.style.borderColor = '#ff4757';
                    this.title = 'Please enter a valid URL';
                } else {
                    this.style.borderColor = '#e1e5e9';
                    this.title = '';
                }
            });
        }
    });

    // Auto-save form data to prevent loss
    const formInputs = document.querySelectorAll('#portfolioForm input, #portfolioForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function () {
            localStorage.setItem(`portfolio_${this.id || this.className}`, this.value);
        });
    });

    // Load saved form data
    formInputs.forEach(input => {
        const savedValue = localStorage.getItem(`portfolio_${input.id || input.className}`);
        if (savedValue) {
            input.value = savedValue;
        }
    });
});

// Function to clear form data
function clearForm() {
    if (confirm('Are you sure you want to clear all form data? This action cannot be undone.')) {
        document.getElementById('portfolioForm').reset();

        // Clear localStorage
        const formInputs = document.querySelectorAll('#portfolioForm input, #portfolioForm textarea');
        formInputs.forEach(input => {
            localStorage.removeItem(`portfolio_${input.id || input.className}`);
        });

        // Reset skills and projects to minimum
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            if (index > 0) item.remove();
        });

        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            if (index > 0) item.remove();
        });

        // Hide download button
        document.getElementById('downloadBtn').style.display = 'none';

        // Clear preview
        document.getElementById('portfolioPreview').querySelector('.preview-portfolio').innerHTML = `
            <div style="padding: 20px; text-align: center; color: #ccc;">
                <p>Fill out the form to see your portfolio preview here</p>
            </div>
        `;

        alert('Form cleared successfully!');
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl + S to generate portfolio
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        generatePortfolio();
    }

    // Ctrl + D to download portfolio
    if (e.ctrlKey && e.key === 'd' && window.portfolioData) {
        e.preventDefault();
        downloadPortfolio();
    }
});

// Performance optimization: Debounce preview updates
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add real-time preview updates (debounced)
const debouncedPreviewUpdate = debounce(function () {
    if (window.portfolioData) {
        generatePortfolio();
    }
}, 500);

// Add event listeners for real-time updates
document.addEventListener('DOMContentLoaded', function () {
    const formInputs = document.querySelectorAll('#portfolioForm input, #portfolioForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', debouncedPreviewUpdate);
    });
});
