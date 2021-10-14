// make connection to connect.js
const connect = require('./connect');

// create variable for queries
const app = {
   viewAllDepartments: function() {
       return new Promise(function(resolve, reject) {
           const queryStr = 'SELECT * FROM department';
           connect.query(queryStr, function(err, result) {
               if (err) {
                   return reject (err);
               }
               console.table(result);
               return resolve;
           });
       });
   },
};

module.exports = app;