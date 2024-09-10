const express = require('express');
const serverless = require('serverless-http');
const app = express();

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
  
  const student = students[studentId];
  // Check if the student exists in the data
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Estudiante no encontrado' });
  }
});

module.exports.handler = serverless(app);
