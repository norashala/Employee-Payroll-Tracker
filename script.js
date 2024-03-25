// Function to collect employee data
// Collect employee data
function collectEmployees() {
  const employees = [];
  
  while (true) {
    const name = prompt("Enter employee name");
    if (!name) break;

    const salary = parseFloat(prompt("Enter employee salary:"));
    if (isNaN(salary)) {
      continue;
    }
    
    employees.push({ name: name, salary: salary });
  }
  
  return employees;
}

// Display the average salary
function calculateAverageSalary(employeesArray) {
  let totalSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  
  return totalSalary / employeesArray.length;
}

// Select a random employee
function selectRandomEmployee(employeesArray) {
  const employeesArray[randomIndex];
}

// Event listener for collecting employee data and performing actions
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', function() {
  const employees = collectEmployees();
  if (employees.length === 0) {
    return;
  }
}
});


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
