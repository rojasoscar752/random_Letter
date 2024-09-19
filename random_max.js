const express = require('express');
const app = express();
const port = 3001;

function generarLetraAleatoria() {
    const codigoAscii = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  
    const letra = String.fromCharCode(codigoAscii);
  
    return letra;
  }
  
  const letraAleatoria = generarLetraAleatoria();
  console.log(letraAleatoria);
  

app.get('/numberRandom', (req, res) => {
    res.json(generarLetraAleatoria());
  });
  
  app.listen(port, () => {
    console.log(`Letra mayuscula corriendo en http://localhost:${port}`);
  });
  