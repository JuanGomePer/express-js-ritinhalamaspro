// Import dependencies
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
  
  exports.handler = async function (event, context) {
    const studentId = event.queryStringParameters.id;
  
    if (!Number.isInteger(Number(studentId))) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'ID debe ser un número entero' })
      };
    }
  
    const student = students[studentId];
    if (student) {
      return {
        statusCode: 200,
        body: JSON.stringify(student)
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Estudiante no encontrado' })
      };
    }
  };
  