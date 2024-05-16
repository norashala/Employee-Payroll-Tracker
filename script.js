// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const employeeData = [];
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addMoreEmployees = true;
  while (addMoreEmployees) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    while (isNaN(salary)) {
      salary = prompt("Please enter a valid salary:");
    }

    employeeData.push({ firstName, lastName, salary });

    const continueAdding = confirm("Do you want to add another employee?");

    if (continueAdding === false) {
      addMoreEmployees = false;
    }
  }
  return employeeData;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const addTotal = addSalaries();

  function addSalaries() {
    let totalSalaries = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      totalSalaries += parseInt(employeesArray[i].salary); // Parse salary as an integer
    }
    return totalSalaries;
  }

  const actualLength = employeesArray.length;

  const averageTotal = averageSalaries();

  function averageSalaries() {
    const totalAverage = addTotal / actualLength;
    return totalAverage;
  }

  console.log(
    `Average Salary: $${averageTotal.toFixed(2)} for ${actualLength} employees.`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
