import fetch from 'node-fetch';

const BASE_URL = 'http://api.football-api.com/2.0';
export default class Football {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  getCompetitions () {
    const COMPETITIONS_URL = `${BASE_URL}/competitions?Authorization=${this.apiKey}`;
    return fetch(COMPETITIONS_URL)
      .then(competitions => {
        return competitions.json();
      });
  }
  findCompetition (id) {
    const COMPETITION_URL = `${BASE_URL}/competitions/${id}?Authorization=${this.apiKey}`;
    return fetch(COMPETITION_URL)
      .then(competition => {
        return competition.json();
      });
  }
}