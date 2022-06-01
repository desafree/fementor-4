fetchData('https://api.github.com/users/octocat');

const API_LINK = 'https://api.github.com/users/';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchData(API_LINK + form.user.value);
  form.reset();
});

async function fetchData(url) {
  const dataJSON = await fetch(url);
  const data = await dataJSON.json();
  console.log(data);
  refreshData(data);
}

function refreshData({
  login: name,
  avatar_url: image,
  url,
  followers,
  following,
  created_at,
  bio,
  blog = 'not available',
  public_repos,
  location = 'not available',
  company = 'not available',
  twitter_username,
}) {
  if (!blog) {
    blog = 'None';
    console.log(blog);
  }
  if (!location) {
    location = 'None';
  }
  if (!company) {
    company = 'None';
  }

  if (!twitter_username) {
    twitter_username = 'None';
  }
  console.log(company);
  const nameBox = document.querySelector('.content .name');
  nameBox.textContent = name;
  const imgBox = document.querySelector('.img-container img');
  imgBox.setAttribute('src', image);
  const urlBox = document.querySelector('.content .url');
  urlBox.textContent = url;
  const followerBox = document.querySelector('.followers p');
  followerBox.textContent = followers;
  const followingBox = document.querySelector('.following p');
  followingBox.textContent = following;
  const createdAtBox = document.querySelector('.intro p');
  createdAtBox.textContent = created_at;
  const bioBox = document.querySelector('.content .bio');
  if (!bio) {
    bio = 'This profile has no bio';
  }
  bioBox.textContent = bio;
  const blogBox = document.querySelector('.links .blog a');
  blogBox.textContent = blog;
  const repoBox = document.querySelector('.stats .repo p');
  repoBox.textContent = public_repos;
  const locationBox = document.querySelector('.links .location p');
  locationBox.textContent = location;
  console.log(locationBox.childNodes[0]);
  const companyBox = document.querySelector('.links .company p');
  companyBox.textContent = company;
  const twitterBox = document.querySelector('.links .twitter p');
  twitterBox.textContent = twitter_username;
}
