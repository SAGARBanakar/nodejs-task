const studentService = require("../services/studentService");
const emailService = require("../services/emailService");

exports.getStudents = (req, res) => {
  const students = studentService.getStudents();
  res.json(students);
};

exports.createStudent = (req, res) => {
  const student = req.body;

  const newStudent = studentService.addStudent(student);

  emailService.sendEmail("student@email.com");

  res.json({
    message: "Student created",
    student: newStudent
  });
};

exports.updateStudent = (req, res) => {
  const id = req.params.id;

  const student = studentService.updateStudent(id, req.body);

  res.json({
    message: "Student updated",
    student
  });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;

  studentService.deleteStudent(id);

  res.json({
    message: "Student deleted"
  });
};