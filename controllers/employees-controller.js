const employees = require('../models/employee-model');

function getEmployees (req, res) {
    res.render('employees/list', { employees: employees });
}

function getEmployeeById(req, res) {
    res.send('Employee details page')
}

function createEmployee(req, res) {
    res.send('Create Employee');
}

function updateEmployee() {
    res.send('Delete Employee');
}

function deleteEmployee() {
    res.send('Delete Employee');
}

module.exports = {
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,

    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
};