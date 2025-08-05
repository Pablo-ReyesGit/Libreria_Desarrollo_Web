module.exports = app => {
    const estudiante = require("../controllers/estudiante.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", estudiante.create);
    // Retrieve all Client
    router.get("/", estudiante.findAll);
    // Retrieve all published Client
    router.get("/status", estudiante.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", estudiante.findOne);
    // Relieve all the books that the student had booked
    router.get("/:id/prestamos", estudiante.findWithPrestamos);
    // Update a Client with id
    router.put("/update/:id", estudiante.update);
    // Delete a Client with id
    router.delete("/delete/:id", estudiante.delete);
    // Delete all Cliente
    router.delete("/delete/", estudiante.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/estudiante", router);
};