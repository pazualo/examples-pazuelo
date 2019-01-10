import Axios from 'axios';

let id = 'a924c76d540f2b743801';
let sec = '85596c1ece4d40841f18e2e50380fb6729ca0613';
let params = '?client_id=' + id + '&client_secret=' + sec;

export const fetchPopularRepo = language => {
  let encodedURI = window.encodeURI(
    'https://api.github.com/search/repositories?q=stars:>1+language:' +
      language +
      '&sort=stars&order=desc&type=Repositories'
  );

  return Axios.get(encodedURI).then(res => {
    return res.data.items;
  });
};

export const battle = players => {
  return Axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
};

export const getProfile = username => {
  return Axios.get(`https://api.github.com/users/${username + params}`).then(
    user => {
      return user.data;
    }
  );
};

export const getRepos = username => {
  return Axios.get(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  );
  // return Axios.get(
  //   'https://api.github.com/users/' +
  //     username +
  //     '/repos' +
  //     params +
  //     '&per_page=100'
  // );
};

export const getStarCount = repos => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
};

export const calculateScore = (profile, repos) => {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
};

export const handleError = error => {
  console.warn(error);
  return null;
};

export const getUserData = player => {
  return Axios.all([getProfile(player), getRepos(player)]).then(data => {
    let profile = data[0];
    let repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
};

export const sortPlayers = players => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};
