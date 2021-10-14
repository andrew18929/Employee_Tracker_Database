INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 75000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 125000, 2),
    ('Accountant', 90000, 3),
    ('Chief Accounting Officer', 225000, 3),
    ('Legal Team Lead', 200000, 4),
    ('Marketing Executive', 160000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Myers', 1, 3),
    ('Jason', 'Voorhies', 2, 1),
    ('Freddy', 'Krueger', 3, null),
    ('Leather', 'Face', 4, 3),
    ('Pin', 'Head', 5, null),
    ('Chucky', 'TheDoll', 2, null),
    ('Linda', 'Blair', 4, 7),
    ('Ghost', 'Face', 1, 2);