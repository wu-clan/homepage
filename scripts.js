document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById('github-projects');
    const githubUsername = 'wu-clan'; // GitHub 用户名
    const orgs = ['fastapi-practices']; // GitHub 组织名
    const displayRepos = ['httpfpt', 'fastapi_best_architecture', 'sqlalchemy-crud-plus', 'fastapi_chatgpt']; // 要显示的项目

    const fetchRepos = async () => {
        try {
            // 获取 GitHub 个人项目，排除 fork 的项目
            let userRepos = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
            userRepos = await userRepos.json();
            userRepos = userRepos.filter(repo => !repo.fork);

            // 获取组织项目
            const orgReposPromises = orgs.map(org => fetch(`https://api.github.com/orgs/${org}/repos`));
            const orgRepos = await Promise.all(orgReposPromises);
            const orgReposData = await Promise.all(orgRepos.map(response => response.json()));
            const allOrgRepos = orgReposData.flat();

            // 合并所有项目
            const allRepos = [...userRepos, ...allOrgRepos];

            // 过滤显示的项目
            const filteredRepos = allRepos.filter(repo => displayRepos.includes(repo.name));

            // 渲染项目
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
            console.error('获取 GitHub 项目失败:', error);
        }
    };

    fetchRepos();
});
