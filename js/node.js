const fs = require('fs');

try {
  // Leer el archivo JSON
  const data = JSON.parse(fs.readFileSync('archivo.json', 'utf-8'));

  // Establecer la fecha específica (1 de febrero de 2025 a las 11:53)
  const specificDate = new Date(2025, 1, 1, 11, 53);  // Mes 1 = febrero
  
  data.modificado = specificDate;

  // Control para asegurarse de que lockfileVersion existe y lo incrementamos
  if (!data.lockfileVersion) {
    data.lockfileVersion = 1;  // Asignamos un valor inicial si no existe
  } else {
    data.lockfileVersion = data.lockfileVersion + 1;
  }

  // Escribir el archivo JSON actualizado
  fs.writeFileSync('archivo.json', JSON.stringify(data, null, 2));

  console.log("Archivo actualizado correctamente con la fecha específica y lockfileVersion.");
} catch (error) {
  console.error("Error al procesar el archivo:", error.message);
}

