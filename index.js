#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.1.0')
  .option('-t, --time', 'Busque pelo nome do time')
  .option('-j, --jogador', 'Busque pelo nome do jogador')
  .option('-c, --campeonato', 'Busque pelo nome do campeonato')
  .parse(process.argv);


if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);