import "./MetricsGrid.css";
import { useEffect, useState } from "react";
import { getGitHubStats } from "../../utils/github"; // make sure this points to your helper

const MetricsGrid = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [githubError, setGithubError] = useState(false);

  useEffect(() => {
    getGitHubStats()
      .then(setGithubStats)
      .catch(() => setGithubError(true));
  }, []);

  // Helper to render GitHub value
  const renderGitHubValue = () => {
    if (!githubStats && !githubError) return "Loading…";
    if (!githubStats && githubError)
      return (
        <>
          Activity unavailable
          <br />
          <a
            href="https://github.com/cccampb2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View profile →
          </a>
        </>
      );
    // If stats exist, show clean headline + meta
    return (
      <>
        <span className="metrics__meta">
          12 mo • {githubStats.pullRequests} PRs • {githubStats.repos} Repos
        </span>
      </>
    );
  };

  return (
    <section className="metrics">
      <div className="metrics__grid">
        {/* Projects */}
        <div className="metrics__card">
          <h3 className="metrics__label">Projects</h3>
          <p className="metrics__value">7 Built</p>
        </div>

        {/* GitHub */}
        <div className="metrics__card metrics__card--featured">
          <h3 className="metrics__label">GitHub</h3>
          <p className="metrics__value">{renderGitHubValue()}</p>
        </div>

        {/* Tech Stack */}
        <div className="metrics__card">
          <h3 className="metrics__label">Tech Stack</h3>
          <p className="metrics__value">18+ Tools</p>
        </div>

        {/* Deployed Apps */}
        <div className="metrics__card">
          <h3 className="metrics__label">Deployed Apps</h3>
          <p className="metrics__value">2 Production</p>
        </div>

        {/* Learning */}
        <div className="metrics__card">
          <h3 className="metrics__label">Learning</h3>
          <p className="metrics__value">~20 hrs / week</p>
        </div>

        {/* Engineering */}
        <div className="metrics__card">
          <h3 className="metrics__label">Engineering</h3>
          <p className="metrics__value">2 Auth Apps</p>
        </div>
      </div>
    </section>
  );
};

export default MetricsGrid;
