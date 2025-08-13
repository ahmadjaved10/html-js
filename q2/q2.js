const employees = [
    { name: "Alice Johnson", age: 29, salary: 85000, department: "Engineering", yearsWithCompany: 4 },
    { name: "Bob Smith", age: 45, salary: 70000, department: "HR", yearsWithCompany: 6 },
    { name: "Charlie Doe", age: 32, salary: 90000, department: "Engineering", yearsWithCompany: 2 },
    { name: "Diana Rogers", age: 38, salary: 60000, department: "Finance", yearsWithCompany: 8 },
    { name: "Eve Thompson", age: 40, salary: 50000, department: "Engineering", yearsWithCompany: 5 }
];

// Display Engineering Employees
function displayEngineeringEmployees() {
    const engineeringEmployees = employees.filter(e => e.department === "Engineering");
    const ul = document.getElementById('engineering-employees');
    engineeringEmployees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = employee.name;
        ul.appendChild(li);
    });
}

// Display Employees with more than 3 years
function displayEmployeesMoreThan3Years() {
    const experiencedEmployees = employees.filter(e => e.yearsWithCompany > 3);
    const ul = document.getElementById('employees-more-than-3-years');
    experiencedEmployees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = employee.name;
        ul.appendChild(li);
    });
}

// Check for any employee with a salary greater than $75,000
function displayHighSalaryEmployee() {
    const highSalary = employees.some(e => e.salary > 75000);
    document.getElementById('high-salary').textContent = highSalary ? "Yes, there is at least one." : "No, all salaries are below $75,000.";
}

// Sort employees by salary (highest to lowest)
function displaySortedEmployeesBySalary() {
    const sortedEmployees = employees.sort((a, b) => b.salary - a.salary);
    const ul = document.getElementById('sorted-employees');
    sortedEmployees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.name}: $${employee.salary}`;
        ul.appendChild(li);
    });
}

// Calculate total salary expense
function displayTotalSalaryExpense() {
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    document.getElementById('total-salary').textContent = `$${totalSalary}`;
}

// Display all employee details (name, department, salary)
function displayAllEmployeeDetails() {
    const ul = document.getElementById('employee-details');
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.name} | ${employee.department} | $${employee.salary}`;
        ul.appendChild(li);
    });
}

// Call all functions when the window loads
window.onload = function() {
    displayEngineeringEmployees();
    displayEmployeesMoreThan3Years();
    displayHighSalaryEmployee();
    displaySortedEmployeesBySalary();
    displayTotalSalaryExpense();
    displayAllEmployeeDetails();
};
