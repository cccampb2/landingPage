const USERNAME = "cccampb2";
const CACHE_KEY = "github_stats";
const ONE_DAY = 1000 * 60 * 60 * 24;

export async function getGitHubStats() {
  // 1. Check localStorage cache
  const cached = localStorage.getItem(CACHE_KEY);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < ONE_DAY) {
      return data;
    }
  }

  // 2. Fetch GitHub public stats
  const [userRes, prRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`),
    fetch(`https://api.github.com/search/issues?q=author:${USERNAME}+type:pr`),
  ]);

  if (!userRes.ok || !prRes.ok) {
    throw new Error("GitHub API request failed");
  }

  const user = await userRes.json();
  const prs = await prRes.json();

  const stats = {
    repos: user.public_repos,
    pullRequests: prs.total_count,
    // commits can be added approx via events if desired
  };

  // 3. Cache the result in localStorage
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data: stats, timestamp: Date.now() }),
  );

  return stats;
}
