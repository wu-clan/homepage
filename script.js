// User Data Configuration
const userData = {
  githubUser: 'wu-clan',
  socials: {
    github: 'https://github.com/wu-clan',
    x: 'https://x.com/_chulan',
    discord: 'https://discord.gg/yNN3wTbVAC',
    qq: 'https://qm.qq.com/q/EPlRcn2OU',
    blog: 'https://wu-clan.github.io/VBlog/',
    coffee: 'https://wu-clan.github.io/sponsor/',
  },
  skills: ['Python', 'FastAPI', 'Django', 'JavaScript', 'TypeScript', 'Vue.js', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'Linux', 'Nginx', '...'],
};

// Social Icons SVG
const socialIcons = {
  github: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>',
  x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
  discord: '<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106.072.072 0 0 0-.027-.005 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128.074.074 0 0 1 .023-.018c.125-.094.251-.192.37-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.245.197.37.291a.077.077 0 0 1-.006.127.074.074 0 0 1-.022.019 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>',
  qq: '<path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39.548 39.548 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.281.369 1.398 0 6.938.209 7.281-.369.078-.132.132-.458-.301-.778-.482-.356-1.233-.646-1.845-.835 1.638-1.384 2.394-3.302 2.394-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673z"/>',
  blog: '<path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zM7 6h10v2H7V6zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>',
  coffee: '<path d="M2 21h18v-2H2M20 8h-2V5h2m0-2H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>'
};

// Language Colors (common languages only)
const languageColors = {
  'Python': '#3572A5',
  'JavaScript': '#f1e05a',
  'TypeScript': '#2b7489',
  'Go': '#375eab',
  'Vue': '#2c3e50',
  'HTML': '#e44b23',
  'CSS': '#563d7c',
  'Shell': '#89e051',
  'Dockerfile': '#384d54'
};

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Fetch GitHub Profile
async function fetchGitHubProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${userData.githubUser}`);
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
}

// Fetch GitHub Repositories
async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=6&type=Repositories`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

// Update Hero Section
function updateHeroSection(profile) {
  if (!profile) return;

  // Update avatar
  const avatar = document.getElementById('avatar');
  if (avatar && profile.avatar_url) {
    avatar.src = profile.avatar_url;
    avatar.alt = `${profile.name || profile.login} avatar`;
  }

  // Update bio
  const bio = document.getElementById('bio');
  if (bio && profile.bio) {
    bio.textContent = profile.bio;
  }

  // Render social links
  renderSocialLinks();

  // Update code block fields
  const fields = {
    name: profile.name || profile.login,
    company: profile.company || 'N/A',
    location: profile.location || 'N/A',
    followers: profile.followers || 0,
    following: profile.following || 0,
    repos: profile.public_repos || 0,
    hireable: profile.hireable !== null ? profile.hireable : 'N/A'
  };

  Object.keys(fields).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = fields[key];
    }
  });

  // Update skills
  const skillsElement = document.getElementById('skills');
  if (skillsElement && userData.skills) {
    skillsElement.innerHTML = userData.skills
      .map(skill => `<span class="code-string">'${skill}'</span>`)
      .join('<span class="code-punctuation">, </span>');
  }

  // Update local time
  updateLocalTime();
}

// Render Social Links
function renderSocialLinks() {
  const container = document.getElementById('social-links');
  if (!container) return;

  const socialNames = {
    github: 'GitHub',
    x: 'X (Twitter)',
    discord: 'Discord',
    qq: 'QQ',
    blog: 'Blog',
    coffee: 'Buy me a coffee'
  };

  container.innerHTML = Object.entries(userData.socials)
    .filter(([key, url]) => url) // Only include non-empty URLs
    .map(([key, url]) => {
      const icon = socialIcons[key] || socialIcons.github; // Fallback to github icon
      const label = socialNames[key] || key;
      return `
        <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            ${icon}
          </svg>
        </a>
      `;
    })
    .join('');
}

// Render Projects
function renderProjects(projects, profile) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (!projects || projects.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No projects found</p>';
    return;
  }

  // SVG icons for stars and forks
  const starIcon = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>';
  const forkIcon = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>';

  container.innerHTML = projects.map(project => {
    const language = project.language || 'Unknown';
    const languageColor = languageColors[language] || '#666666';
    const description = project.description || 'No description available';

    return `
      <a href="${project.html_url}" class="project-card" target="_blank" rel="noopener noreferrer">
        <div class="card-header">
          <h3>${escapeHtml(project.name)}</h3>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
        </div>
        <p class="card-description">${escapeHtml(description)}</p>
        <div class="card-footer">
          <div class="card-stats">
            <span>${starIcon} ${project.stargazers_count || 0}</span>
            <span>${forkIcon} ${project.forks_count || 0}</span>
          </div>
          <div class="card-language">
            <span class="lang-dot" style="background: ${languageColor}"></span>
            <span>${escapeHtml(language)}</span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  // Update "View All" link
  const viewAllLink = document.getElementById('view-all-link');
  if (viewAllLink && profile) {
    viewAllLink.href = profile.html_url || `https://github.com/${userData.githubUser}`;
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Update Local Time
function updateLocalTime() {
  const localtimeElement = document.getElementById('localtime');
  if (!localtimeElement) return;

  const now = new Date();
  const timeString = now.toLocaleTimeString('zh-CN', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  localtimeElement.textContent = timeString;
}

// Fetch and Update All Data
async function fetchAndUpdateData() {
  try {
    // Show loading state
    console.log('Fetching GitHub data...');

    // Fetch profile and repos in parallel
    const [profile, repos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos()
    ]);

    // Update UI
    if (profile) {
      updateHeroSection(profile);
      console.log('Profile updated successfully');
    }

    if (repos) {
      renderProjects(repos, profile);
      console.log(`Rendered ${repos.length} projects`);
    }
  } catch (error) {
    console.error('Error fetching and updating data:', error);
  }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  fetchAndUpdateData();

  // Update local time every second
  setInterval(updateLocalTime, 1000);
});
