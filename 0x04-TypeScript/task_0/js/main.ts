interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "Elias",
  lastName: "Belay",
  age: 23,
  location: "Addis Ababa, Ethiopia",
};

const student_2: Student = {
  firstName: "Eyerusalem",
  lastName: "Azmeraw",
  age: 21,
  location: "Addis Ababa, Ethiopia",
};

const studentsList: Array<Student> = [student_1, student_2];

// vanilla javascript

// Create table
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

// Add header row
const headerRow = document.createElement("tr");
["First Name", "Location"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Add student rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
