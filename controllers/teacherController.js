let teachers = [];

exports.getTeachers = (req, res) => {
  res.json(teachers);
};

exports.createTeacher = (req, res) => {
  const teacher = req.body;
  teachers.push(teacher);
  res.json({ message: "Teacher added", teacher });
};

exports.updateTeacher = (req, res) => {
  const id = req.params.id;
  teachers[id] = req.body;
  res.json({ message: "Teacher updated", teacher: teachers[id] });
};

exports.deleteTeacher = (req, res) => {
  const id = req.params.id;
  teachers.splice(id, 1);
  res.json({ message: "Teacher deleted" });
};