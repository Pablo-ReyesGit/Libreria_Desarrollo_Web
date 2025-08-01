//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Prestamo = sequelize.define("prestamo", {
        libroId: {
            type: Sequelize.INTEGER
        },
        estudianteId: {
            type: Sequelize.STRING
        },
        fechaPrestamo: {
            type: Sequelize.DATE
        },
        fechaDevolucion: {
            type: Sequelize.DATE
        }
    });
    return Prestamo;
};