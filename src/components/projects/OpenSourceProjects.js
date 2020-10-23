import React, { useEffect, useState } from "react";
import "../../styles/components/projects/OpenSourceProjects.css";
import Github_logo from "../../resources/Github_logo.svg";

function OpenSourceProjects() {
  const [openSourceRepo, setOpenSourceRepo] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/himanshusandha/repos")
      .then((data) => data.json())
      .then((res) =>
        Object.keys(res).map((key) => ({
          html_url: res[key].html_url,
          name: res[key].name,
          description: res[key].description,
          language: res[key].language,
          stargazers_count: res[key].stargazers_count,
          watchers_count: res[key].watchers_count,
          forks_count: res[key].forks_count,
          created_at: new Date(res[key].created_at),
          updated_at: new Date(res[key].updated_at),
        }))
      )
      .then((data) => setOpenSourceRepo(data))
      .catch((error) => new Error(error));
  }, []);

  return (
    <React.Fragment>
      <div className="openSourceProjects_base">
        <div className="openSourceProjects_title">
          <div className="openSourceProjects_title_tag_up">{"<h1>"}</div>
          Projects on GitHub
          <div className="openSourceProjects_title_tag_down">{"</h1>"}</div>
        </div>
        <div className="openSourceProjects_info">
          <div className="openSourceProjects_info_left">
            <p>
              GitHub is an evertime - evergreen best tool to maintain
              individaul/team projects for continous development, sharing code,
              showcasing work to others, creating and maintaining issues. Now
              the new action feature has turned it even more better for
              maintaining the projects. If one haven't used GitHub or even not
              heard about it than being a software developer is of no use.
            </p>
            <p>
              I do maintain such open source projects on my{" "}
              <a
                href="https://github.com/himanshusandha"
                target="_blank"
                rel="noopener noreferrer"
                className="openSourceProjects_link_tag"
              >
                GitHub
              </a>{" "}
              account. Below are the github repo's , have a look over them:
            </p>
          </div>
          <img
            src={Github_logo}
            alt="Github"
            className="openSourceProjects_info_right"
          />
        </div>
        <div className="openSourceProjects_list">
          {openSourceRepo &&
            openSourceRepo.map((repos, idx) => {
              return (
                <a
                  href={repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="openSourceProjects_list_individual"
                  key={idx}
                >
                  <p className="openSourceProjects_list_individual_title">
                    {repos.name}
                  </p>
                  <div className="openSourceProjects_list_individual_hr" />
                  <p>{repos.description}</p>
                  <div className="openSourceProjects_list_individual_lang_star">
                    <div>{repos.language}</div>
                    <div>&#9734; {repos.stargazers_count}</div>
                    <div>&#128065; {repos.watchers_count}</div>
                    <div>&#9282; {repos.forks_count}</div>
                  </div>
                  <div className="openSourceProjects_list_individual_dates">
                    <div>
                      Create on: {new Date(repos.created_at).toDateString()}
                    </div>
                    <div>
                      Updated on: {new Date(repos.updated_at).toDateString()}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default OpenSourceProjects;
