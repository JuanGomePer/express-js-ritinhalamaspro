const express = require('express');
const app = express();
const port = 3000;



// Information Students
const students = {
  1: {
    name: "Rita",
    lastName: "Trindade da Cruz",
    email: "ritatrcr@unisabana.edu.co",
    id: "297040"
  },
  2: {
    name: "Juan Andrés",
    lastName: "Gómez Pérez",
    email: "juangomeper@unisabana.edu.co",
    id: "300535"
  }
};

// Endpoint to get students information with the ID
app.get('/user-info/:id', (req, res) => {
  const studentId = req.params.id;

  // Validation Id is a number
  if (!Number.isInteger(Number(studentId))) {
    return res.status(400).json({ error: 'ID debe ser un número entero' });
  }
  
  // Check if the student exists in the data
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
