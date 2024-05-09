class User {
    constructor(nombre, email, clave) {
      this.nombre = nombre;
      this.email = email;
      this.clave = clave;
    }
  }
  
  class Usuario extends User {
    constructor(nombre, email, clave, puntosAcumulados) {
      super(nombre, email, clave);
      this.puntosAcumulados = puntosAcumulados;
    }
  
    acumularPuntos(puntos) {
      this.puntosAcumulados += puntos;
    }
  
    canjearPuntos(puntos) {
    }
  }
  
  class Administrador extends User {
    constructor(nombre, email, clave) {
      super(nombre, email, clave);
    }
  
    agregarProducto(producto) {
    }
  
    modificarProducto(producto) {
    }
  
    eliminarUsuario(usuario) {
    }
  }
  
  class Producto {
    constructor(nombre, puntosNecesarios, cantidadDisponible, stock) {
      this.nombre = nombre;
      this.puntosNecesarios = puntosNecesarios;
      this.cantidadDisponible = cantidadDisponible;
      this.stock = stock;
    }
  
    obtenerInfo() {
    }
  }
  
  class ProductoFisico extends Producto {
    constructor(nombre, puntosNecesarios, cantidadDisponible, stock, precio) {
      super(nombre, puntosNecesarios, cantidadDisponible, stock);
      this.precio = precio;
    }
  
    actualizarStock(cantidad) {
    }
  
    enviarProducto(usuario) {
    }
  }
  
  class ProductoDigital extends Producto {
    constructor(nombre, puntosNecesarios, cantidadDisponible, stock, URL) {
      super(nombre, puntosNecesarios, cantidadDisponible, stock);
      this.URL = URL;
    }
  
    descargar() {
    }
  
    obtenerProductoEmail() {
    }
  }
  
  class Actividad {
    constructor(tipo, puntosOtorgados) {
      this.tipo = tipo;
      this.puntosOtorgados = puntosOtorgados;
    }
  
    completarActividad() {
    }
  }
  
  class CategoriaProducto {
    constructor(nombre, descripcion) {
      this.nombre = nombre;
      this.descripcion = descripcion;
    }
  
    listarProductos() {
    }
  }
  