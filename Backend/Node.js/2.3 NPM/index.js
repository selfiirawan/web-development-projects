// Sillyname npm package
// var generateName = require('sillyname');

import generateName from 'sillyname';
var sillyName = generateName();

console.log(`Your new name is ${sillyName}`);


// Superheroes npm package
import {randomSuperhero} from 'superheroes';
const mySuperhero = randomSuperhero();

console.log(`Your superhero name is ${mySuperhero}!`);