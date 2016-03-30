import test     from 'ava';
import Football from './';

let football;
test.beforeEach(t => {
  football = new Football('565eaa22251f932b9f000001d50aaf0b55c7477c5ffcdbaf113ebbda');
});

test(async t =>
  t.is(await football.apiKey, '565eaa22251f932b9f000001d50aaf0b55c7477c5ffcdbaf113ebbda')
);

test(async t =>
  t.same(await football.getCompetitions(),
    [{"id":"1005","name":"UEFA Champions League","region":"International"},{"id":"1007","name":"UEFA Europa League","region":"International"},{"id":"1093","name":"Bundesliga","region":"Austria"},{"id":"1102","name":"Pro League","region":"Belgium"},{"id":"1184","name":"Czech Liga","region":"Czech Republic"},{"id":"1198","name":"Fa Cup","region":"England"},{"id":"1204","name":"Premier League","region":"England"},{"id":"1205","name":"Championship","region":"England"},{"id":"1221","name":"Ligue 1","region":"France"},{"id":"1229","name":"Bundesliga","region":"Germany"},{"id":"1232","name":"Super League","region":"Greece"},{"id":"1265","name":"Serie B","region":"Italy"},{"id":"1269","name":"Serie A","region":"Italy"},{"id":"1322","name":"Eredivisie","region":"Netherlands"},{"id":"1352","name":"Primeira Liga","region":"Portugal"},{"id":"1397","name":"Copa Del Rey","region":"Spain"},{"id":"1399","name":"Primera Divisi\u00f3n","region":"Spain"},{"id":"1408","name":"Super League","region":"Switzerland"},{"id":"1425","name":"S\u00fcper Lig","region":"Turkey"},{"id":"1428","name":"Premier League","region":"Ukraine"},{"id":"1457","name":"Premier League","region":"Russia"}]
  )
);