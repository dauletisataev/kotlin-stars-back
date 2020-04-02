import fetch from "node-fetch";

const fetchingData = async () => {
  const res = await fetch("https://api.github.com/repos/jetbrains/kotlin");
  let repo_info = await res.json();
  return {
      datetime: (new Date()).toISOString(),
      count: repo_info.stargazers_count
  };
};

export default fetchingData;