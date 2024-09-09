const express = require('express');
const app = express();
const port = 3000;



// Information Students
const students = {
  1: {
    name: "Rita",
    lastName: "Trindade da Cruz",
    email: "ritatrcr@unisabana.edu.cp",
    id: "297040"
  }

  //here goes the information of student 2
};

// Endpoint to get students information with the ID
app.get('/user-info/:id', (req, res) => {
  const studentId = req.params.id;

  
  // Student exist
  const student = students[studentId];
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Estudiante no encontrado' });
  }
});




// Start server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
