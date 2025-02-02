const fs = require('fs');

try {
  
  const data = JSON.parse(fs.readFileSync('archivo.json', 'utf-8'));

  // Establecer la fecha específica (1 es febrero)
  const specificDate = new Date(2025, 1, 1, 11, 53);
  
  
  data.modificado = specificDate;
  
  data.lockfileVersion = data.lockfileVersion + 1;

  fs.writeFileSync('archivo.json', JSON.stringify(data, null, 2));

  console.log("Archivo actualizado correctamente con la fecha específica.");
} catch (error) {
  console.error("Error al procesar el archivo:", error.message);
}
