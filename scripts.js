document.addEventListener("DOMContentLoaded", async () => {
    const projectsContainer = document.getElementById('github-projects');
    const displayRepos = ['httpfpt', 'fastapi_best_architecture', 'sqlalchemy-crud-plus', 'fastapi_chatgpt']; // 要显示的项目

    const fetchReposFromJson = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/wu-clan/homepage/main/repos.json');
            const allRepos = await response.json();

            const filteredRepos = allRepos.filter(repo =>
                displayRepos.includes(repo.name) && !repo.fork
            );

            filteredRepos.forEach(repo => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-item';

                projectElement.innerHTML = `
                    <div class="project-header">
                        <img src="https://github.githubassets.com/favicons/favicon.png" alt="Repo Icon">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <p>${repo.description || ''}</p>
                    <div class="project-meta">
                        <span><i class="fas fa-code-branch"></i> ${repo.language || 'N/A'}</span>
                        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                    </div>
                `;
                projectsContainer.appendChild(projectElement);
            });
        } catch (error) {
            console.error('Failed to fetch repos from JSON:', error);
        }
    };

    fetchReposFromJson();
});
