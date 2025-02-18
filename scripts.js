document.addEventListener("DOMContentLoaded", async () => {
    const projectsContainer = document.getElementById('github-projects');

    const fetchReposFromJson = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/wu-clan/homepage/main/repos.json');
            const allRepos = await response.json();

            const filteredRepos = allRepos.filter(repo => !repo.fork);
            filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

            filteredRepos.forEach(repo => {
                const projectElement = document.createElement('article');
                projectElement.className = 'project-card';

                projectElement.innerHTML = `
                    <div class="project-content">
                        <div class="project-header">
                            <img src="${repo.owner.avatar_url || 'https://github.githubassets.com/favicons/favicon.png'}" 
                                 alt="${repo.name} 图标"
                                 class="project-icon">
                            <a href="${repo.html_url}" target="_blank" class="project-title">${repo.name}</a>
                        </div>
                        <p class="project-desc">${repo.description || '暂无项目描述'}</p>
                        <div class="project-meta">
                            <span><i class="fas fa-code-branch"></i>${repo.language || 'N/A'}</span>
                            <span><i class="fas fa-star"></i>${repo.stargazers_count}</span>
                            <span><i class="fas fa-code-fork"></i>${repo.forks_count}</span>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectElement);
            });
        } catch (error) {
            console.error('Failed to fetch repos from JSON:', error);
            projectsContainer.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>项目加载失败，请刷新重试</p>
                </div>
            `;
        }
    };

    await fetchReposFromJson();
});
