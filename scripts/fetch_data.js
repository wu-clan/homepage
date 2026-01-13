const fs = require('fs');
const path = require('path');

const USER = 'wu-clan';
const ORG = 'fastapi-practices';
const TOKEN = process.env.GITHUB_TOKEN; // 从环境变量获取 GitHub Token
const headers = {
    'User-Agent': 'Github-Data-Fetcher-Script',
    'Accept': 'application/vnd.github.v3+json',
};

if (TOKEN) {
    headers['Authorization'] = `token ${ TOKEN }`;
}

/**
 * 封装 Fetch 请求
 */
async function getJson(url) {
    console.log(`Fetching: ${ url }`);
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            console.error(`Error ${ response.status }: ${ response.statusText }`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(`Fetch failed for ${ url }:`, error.message);
        return null;
    }
}

/**
 * 主逻辑
 */
async function main() {
    const data = {
        u: null,  // User info
        uR: [],   // User repos
        o: null,  // Org info
        oR: [],   // Org repos
        ev: [],   // Events
        updated_at: new Date().toISOString()
    };

    console.log("Starting data synchronization...");

    // 并发请求所有接口
    const [u, uR, o, oR, ev] = await Promise.all([
        getJson(`https://api.github.com/users/${ USER }`),
        getJson(`https://api.github.com/users/${ USER }/repos?per_page=100&sort=updated`),
        getJson(`https://api.github.com/orgs/${ ORG }`),
        getJson(`https://api.github.com/orgs/${ ORG }/repos?per_page=100&sort=updated`),
        getJson(`https://api.github.com/users/${ USER }/events?per_page=30`)
    ]);

    data.u = u;
    data.uR = uR || [];
    data.o = o;
    data.oR = oR || [];
    data.ev = ev || [];

    // 写入仓库根目录的 data.json
    const filePath = path.join(__dirname, '../data.json');
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Success: Data saved to ${ filePath }`);
    } catch (err) {
        console.error('Failed to write file:', err);
        process.exit(1);
    }
}

main();
