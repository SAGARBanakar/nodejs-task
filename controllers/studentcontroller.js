const studentService = require("../service/studentservice");

exports.getStudents = (req, res) => {
  const students = studentService.getStudents();
  res.json(students);
};