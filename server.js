// Importamos el modulo express 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "UMG Web Application" });
});

try {
  require("./app/routes/libro.routes.js")(app);
  console.log("✅ libros.routes.js cargado correctamente");
} catch (err) {
  console.error("❌ Error al cargar libros.routes.js:", err.message);
}

try {
  require("./app/routes/estudiante.routes.js")(app);
  console.log("✅ estudiante.routes.js cargado correctamente");
} catch (err) {
  console.error("❌ Error al cargar estudiante.routes.js:", err.message);
}

try {
  require("./app/routes/prestamo.routes.js")(app);
  console.log("✅ prestamo.routes.js cargado correctamente");
} catch (err) {
  console.error("❌ Error al cargar prestamo.routes.js:", err.message);
}
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado correctamente en el puerto ${PORT}.`);
}); 