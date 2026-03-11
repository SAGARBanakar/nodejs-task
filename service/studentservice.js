const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/students.json");

exports.getStudents = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};