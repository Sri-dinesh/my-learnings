// ==========================================
// Mini-Project: Employee Payroll Processor
// ==========================================

// 1. Raw Data (Simulating a CSV file or API response)
const rawEmployeeData = [
  "Sridinesh,40,30",
  "Vasisht,45,25",
  "Rahul,35,40",
  "Charan,50,20",
];

// 2. Constants
const OVERTIME_THRESHOLD = 40;
const OVERTIME_MULTIPLIER = 1.5;

// 3. Helper Function: Parse raw string data into Objects - Uses string manipulation and conversion
const parseData = (dataArray) => {
  const parsedEmployees = [];

  for (let i = 0; i < dataArray.length; i++) {
    const record = dataArray[i];
    const parts = record.split(",");

    const employee = {
      name: parts[0],
      hours: Number(parts[1]),
      rate: Number(parts[2]),
    };

    parsedEmployees.push(employee);
  }
  return parsedEmployees;
};

// 4. Core Logic: Calculate Gross Pay including Overtime
const calculateGrossPay = (hours, rate) => {
  if (hours > OVERTIME_THRESHOLD) {
    const regularPay = OVERTIME_THRESHOLD * rate;
    const overtimeHours = hours - OVERTIME_THRESHOLD;
    const overtimePay = overtimeHours * rate * OVERTIME_MULTIPLIER;
    return regularPay + overtimePay;
  } else {
    return hours * rate;
  }
};

// 5. Higher Order Function: Process Payroll - Takes the list of employees and a 'taxCallback' function to determine the deduction
const processPayroll = (employees, taxCallback) => {
  const processedData = [];

  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    const grossPay = calculateGrossPay(emp.hours, emp.rate);

    // Using the callback to calculate tax
    const taxAmount = taxCallback(grossPay);
    const netPay = grossPay - taxAmount;

    processedData.push({
      name: emp.name,
      gross: grossPay,
      tax: taxAmount,
      net: netPay,
    });
  }

  return processedData;
};

// 6. Callback Functions: Different Tax Strategies
// Strategy A: Standard Flat Tax (20%)
const standardTax = (amount) => {
  return amount * 0.2;
};

// Strategy B: Progressive Tax (Higher earners pay more)
const progressiveTax = (amount) => {
  if (amount > 1500) {
    return amount * 0.3; // 30% for high earners
  } else {
    return amount * 0.15; // 15% for others
  }
};

// 7. Execution and Reporting
console.log("--- Parsing Data ---");
const employees = parseData(rawEmployeeData);
console.log("Parsed Employees:", employees);

console.log("\n--- Payroll Report (Standard Tax) ---");
const standardPayroll = processPayroll(employees, standardTax);

for (let i = 0; i < standardPayroll.length; i++) {
  const p = standardPayroll[i];
  console.log(
    `Employee: ${p.name} | Gross: $${p.gross} | Tax: $${p.tax} | Net Pay: $${p.net}`
  );
}

console.log("\n--- Payroll Report (Progressive Tax) ---");
const progressivePayroll = processPayroll(employees, progressiveTax);

// Using 'map' for display
progressivePayroll.map((p) => {
  console.log(
    `Employee: ${p.name} | Gross: $${p.gross} | Tax: $${p.tax} | Net Pay: $${p.net}`
  );
});

/*
  ==========================================
  PROJECT DESCRIPTION
  ==========================================
  
  Project Name: Simple Payroll Processor
  
  Functionality:
  This script simulates a backend system that processes employee payroll. 
  It takes raw "CSV-like" string data, parses it into usable objects, 
  calculates wages (handling overtime logic), and applies flexible tax rules.
  
  Key Features:
  1. Data Parsing: Converts raw strings into structured Objects.
  2. Business Logic: Calculates overtime pay automatically.
  3. Extensibility: Uses Higher Order Functions (processPayroll) and 
     Callbacks (standardTax, progressiveTax) to allow changing the 
     tax calculation logic without rewriting the core processor.
     
  Why:
  This mimics real-world scenarios where data comes in raw formats, 
  needs processing pipelines (ETL), and business rules (like tax) 
  change frequently, requiring code that is easy to extend using callbacks.
*/
