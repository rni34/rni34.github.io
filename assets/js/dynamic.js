// Dynamic features for resume website
document.addEventListener('DOMContentLoaded', function() {
    
    // Add typing animation to tagline
    const tagline = document.querySelector('.resume-tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all resume sections
    document.querySelectorAll('.item, section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add current time display
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleString('en-NZ', {
            timeZone: 'Pacific/Auckland',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = `Auckland Time: ${timeString}`;
        }
    }
    
    // Update time every minute
    setInterval(updateTime, 60000);
    updateTime();
});

// Add GitHub API integration to show recent repositories
async function loadGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/rni34/repos?sort=updated&per_page=5');
        const repos = await response.json();
        
        const repoContainer = document.getElementById('github-repos');
        if (repoContainer && repos.length > 0) {
            const repoList = repos.map(repo => `
                <li class="mb-2">
                    <a href="${repo.html_url}" target="_blank" class="resume-link">
                        ${repo.name}
                    </a>
                    <span class="text-muted"> - ${repo.description || 'No description'}</span>
                </li>
            `).join('');
            
            repoContainer.innerHTML = `
                <h4 class="mb-3">Recent GitHub Projects</h4>
                <ul class="list-unstyled">${repoList}</ul>
            `;
        }
    } catch (error) {
        console.log('Could not load GitHub repos:', error);
    }
}

// Load GitHub repos when page loads
document.addEventListener('DOMContentLoaded', loadGitHubRepos);
