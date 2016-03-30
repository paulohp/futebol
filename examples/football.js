var Football = require('../dist').default;

var football = new Football('565eaa22251f932b9f000001d50aaf0b55c7477c5ffcdbaf113ebbda');

var competitions = football.getCompetitions();

competitions.then(function(array){
  console.log(array);
});