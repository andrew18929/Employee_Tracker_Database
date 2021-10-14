// import and require queries.js
const app = require('./queries/queries');
// import and require inquirer
const inquirer = require('inquirer');

/*
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
Try to add some additional functionality to your application, such as the ability to do the following:
Update employee managers.
View employees by manager.
View employees by department.
Delete departments, roles, and employees.
View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
*/
function choices() {
    console.log('Welcome to your Employee Tracker.\n');
    inquirer.prompt({
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update and employee role',
            'Update employee manager',
            'View employees by manager',
            'View employees by department',
            'Delet a department',
            'Delete a role',
            'Delete an employee',
            'View total utilized budget of a department',
            'Exit'
        ]
    }).then(function ({ choice }) {
        /*
        WHEN I choose to view all departments
        THEN I am presented with a formatted table showing department names and department ids
        */
        if (choice === 'View all departments') {
            app.viewAllEmployees()
            .then(function() {
                console.log('/n');
                choices();
            });
        /*
        WHEN I choose to view all roles
        THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
        */
        } else if (choice === '') {
            ./queries.functionName()
            .then(function() {
                console.log('/n');
                choices();
            });
        /*
        WHEN I choose to view all employees
        THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        */
        } else if (choice === '') {
            ./queries.functionName()
            .then(function() {
                console.log('/n');
                choices();
            });
        /*
        WHEN I choose to add a department
        THEN I am prompted to enter the name of the department and that department is added to the database
        */
        } else if (choice === '') {
            // add a department function;
        /*
        WHEN I choose to add a role
        THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
        */
        } else if (choice === '') {
            // add a role functioni;
        /*
        WHEN I choose to add an employee
        THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        */
        } else if (choice === '') {
            // add an employee function;
        /*
        WHEN I choose to update an employee role
        THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
        */
        } else if (choice === '') {
            // add an update employee function;
        /*
        WHEN I choose to update employee managers
        THEN I am prompted to select an employee manager to update and their new role and this information is updated in the database
        */
        } else if (choice === '') {
            // add a update employee manager function;
        /*
        WHEN I choose to view employees by manager
        THEN I am presented with a formatted table showing employees by manager.
        */
        } else if (choice === '') {
            // add a view employeess by manager function
        /*
        WHEN I choose to view employees by department
        THEN I am presented with a formatted table showing employees by department.
        */
        } else if (choice === '') {
            // add a view employees by department
        /*
        WHEN I choose to delete a department
        THEN
        */
        } else if (choice === '') {
            // add a function to delete a department
        /* 
        WHEN I choose to delete a role
        THEN
        */
        } else if (choice === '') {
            // add a function to delete a role
        /*
        WHEN I choose to delete an employee
        THEN
        */
        } else if (choice === '') {
            // add a function to delete an employee
        /* 
        WHEN I want to view the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
        THEN
        */
        } else if (choice === '') {
            // add a function to vire total utilized budget of a department
        } else {
            // EXIT
            // add a function to exit app
        }
    });
}