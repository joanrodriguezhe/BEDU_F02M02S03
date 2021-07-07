class Anuncio {
    constructor(id, titulo, categoria, fecha, estado) {
        this.id = id; //ID
        this.titulo = titulo; // titulo del anuncio
        this.categoria = categoria; // perro | gato | otro
        this.fecha = fecha; //Fecha en que se publicó
        this.estado = estado; //Estado del anuncio
    }

    guardar() {
        // función para guardar un nuevo registro en la base de datos.
    }

    getCuidadores(){
        //Ver todos los Cuidadores
    }

    getCuidador(id){
        //Ver Cuidador
    }

    updateCuidador(id){
        //Editar Cuidador
    }

    toggleCuidadorStatus(id){
        //Cambiar estado del Cuidador
    }

}