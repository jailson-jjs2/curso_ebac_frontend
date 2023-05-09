document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.querySelector('#name');
  const userElement = document.querySelector('#user');
  const avatarElement = document.querySelector('#avatar');
  const reposElement = document.querySelector('#repositorio');
  const followerElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following');
  const linkElement = document.querySelector('#link');

  fetch('https://api.github.com/users/jailson-jjs2')
  .then(function(resposta) {
    return resposta.json();
  })
  .then(function(json) {
    nameElement.innerText = json.name;
    userElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    reposElement.innerText = json.public_repos;
    followerElement.innerText = json.followers;
    followingElement.innerText = json.following;
    linkElement.href = json.html_url;
  })
  .catch(function(error) {
    console.log("Erro ao carregar dados do GitHub", error);
  })
})
