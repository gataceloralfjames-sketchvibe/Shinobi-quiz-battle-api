// What the Library Game Hub shows about YOUR game (Hub Contract, rule 1).
// Lab Step 6: replace every CHANGE_ME value with your own.
const pkg = require('../../package.json');

module.exports = {
  slug: 'shinobi-quiz-battle',            // your group's game, lower case with hyphens, for example shelf-climb
  name: 'shinobi quiz battle',            // the name players will see
  team: 'Group 2',            // your group's name and section, for example Bookworms (3-1)
  developer: 'gataceloralfjames-sketchvibe',       // YOUR GitHub username: this build is yours
  description: 'Shinobi Quiz Battle is a multiplayer quiz game where players answer questions, earn Chakra points, and compete to become the top ninja.',     // one sentence about how the game is played
  min_players: 2,               // change to the limits your game is designed for
  max_players: 50,
  version: pkg.version,         // read from package.json, do not edit here
};
