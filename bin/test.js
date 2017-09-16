const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../db/test.json'); // test database
const db = low(adapter);

// https://github.com/typicode/lowdb
// set defaults
db.defaults({user: {}, bets: []})
  .write();

db.get('bets')
  .push({id: 1, user: 'brad', amount: 25})
  .write();

