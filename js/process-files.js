data.lastModified = new Date().toISOString();
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

