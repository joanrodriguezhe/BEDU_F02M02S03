class Usuario {
    constructor(id, nombre, telefono, direccion, estado) {
        this.id = id; // ID
        this.nombre = nombre; // nombre del usuario
        this.telefono = telefono; //Teléfono del usuario
        this.direccion = direccion; //Dirección del usuario
        this.estado=estado; // Usuario activo/inactivo
    }

    guardar() {
        // función para guardar un nuevo registro en la base de datos.
    }

    getUsers(){
        //Ver todos los usuarios
    }

    getUser(id){
        //Ver usuario
    }

    updateUser(id){
        //Editar usuario
    }

    toggleUserStatus(id){
        //Cambiar estado del usuario
    }

    
}