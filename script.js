async function fetchData(url) {
  const dataJSON = await fetch(url);
  const data = await dataJSON.json();
  refreshData(data);
}

function refreshData({
  name,
  avatar_url: image,
  url,
  followers,
  following,
  created_at,
  bio,
  blog,
  public_repo,
  location,
  company,
}) {
  console.log(name);
}

fetchData('https://api.github.com/users/octocat');
