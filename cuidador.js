class Cuidador {
    constructor(id, nombre, telefono, direccion, estado) {
        this.id = id; // ID
        this.nombre = nombre; // nombre del Cuidador
        this.telefono = telefono; //Teléfono del Cuidador
        this.direccion = direccion; //Dirección del Cuidador
        this.estado=estado; // Cuidador activo/inactivo
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