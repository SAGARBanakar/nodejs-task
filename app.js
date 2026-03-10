const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

app.use(express.json());

app.use("/", studentRoutes);
app.use("/", teacherRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});