//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Libro = sequelize.define("libro", {
        titulo: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        anioPublicacion: {
            type: Sequelize.INTEGER
        },
        genero: {
            type: Sequelize.STRING
        },  
        disponible: {
            type: Sequelize.BOOLEAN
        }
    });
    return Libro;
};