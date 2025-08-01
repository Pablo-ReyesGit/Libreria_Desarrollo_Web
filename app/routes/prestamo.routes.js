module.exports = app => {
    const prestamos = require("../controllers/estudiante.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", prestamos.create);
    // Retrieve all Client
    router.get("/", prestamos.findAll);
    // Retrieve all published Client
    router.get("/status", prestamos.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", prestamos.findOne);
    // Update a Client with id
    router.put("/update/:id", prestamos.update);
    // Delete a Client with id
    router.delete("/delete/:id", prestamos.delete);
    // Delete all Cliente
    router.delete("/delete/", prestamos.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/prestamos", router);
};