// make connection to connect.js
const db = require('./connect.js');

// create variable for queries
const app = {
   viewAllDepartments: function() {
       return new Promise(function(resolve, reject) {
           const queryStr = 'SELECT * FROM department';
           db.query(queryStr, function(err, result) {
               if (err) {
                   return reject (err);
               }
               console.table(result);
               return resolve;
           });
       });
   },

   viewAllRoles: function() {
       return new Promise(function(resolve, reject) {
           const queryStr = 'SELECT role.id, title, salary, name FROM role LEFT JOIN department on role.department_id = department.id';
           db.query(queryStr, function(err, result) {
               if (err) {
                   return reject(err);
               }
               const newTable = [];
               for (let i = 0; i < result.length; i++) {
                   const roleObj = {
                       'ID': result[i].id,
                       'Title': result[i].title,
                       'Salary': result[i].salary,
                       'Department': result[i].name
                   };
                   newTable.push(roleObj);
               }
               console.table(newTable);
               return resolve();
           });
       });
   }
};

module.exports = app;