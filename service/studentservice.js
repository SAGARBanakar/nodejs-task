let students = [];

exports.getStudents = () => {
  return students;
};

exports.addStudent = (student) => {
  students.push(student);
  return student;
};

exports.updateStudent = (id, student) => {
  students[id] = student;
  return student;
};

exports.deleteStudent = (id) => {
  students.splice(id, 1);
};