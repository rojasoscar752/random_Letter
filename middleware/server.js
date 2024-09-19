const express = require('express');
const axios = require('axios');
const cors = require('cors');  
const app = express();
const port = 8000;
const path = require('path');

// Define los puertos de los servidores a los que se hará la solicitud
const ports = [3001, 3002];

app.use(cors()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta correcta
app.get('/middleware', async (req, res) => {
  try {
    // Seleccionar aleatoriamente un puerto
    const randomPort = ports[Math.floor(Math.random() * ports.length)];
    // Construir la URL para la solicitud
    const url = `http://localhost:${randomPort}/numberRandom`;

    // Intentar obtener datos del servidor seleccionado
    const response = await axios.get(url);
    // Devolver los datos obtenidos
    return res.json(response.data);
  } catch (error) {
    // Si la solicitud falla, devolver un error 500
    console.error('Error al consultar el servidor aleatorio:', error); 
    return res.status(500).json({ error: 'Error al consultar el servidor aleatorio' });
  }
});

app.listen(port, () => {
  console.log(`Servidor combinado corriendo en http://localhost:${port}`);
});
