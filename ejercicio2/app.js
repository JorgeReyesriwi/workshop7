class User {
    constructor(nombre, email, clave) {
      this.nombre = nombre
      this.email = email
      this.clave = clave
    }
  
    autenticacion() {}
  }
  
  class Cliente extends User {
    constructor(nombre, email, clave, direccion, telefono) {
      super(nombre, email, clave)
      this.direccion = direccion
      this.telefono = telefono
    }
  
    realizarPedido() {}
  
    verHistorialPedidos() {}
  }
  
  class Repartidor extends User {
    constructor(nombre, email, clave, vehiculo, disponibilidad) {
      super(nombre, email, clave)
      this.vehiculo = vehiculo
      this.disponibilidad = disponibilidad
    }
  
    aceptarEnvio() {}
  
    actualizarUbicacion() {}
  
    completarEntrega() {}
  
    actualizarEstado() {}
  }
  
  class Restaurante {
    constructor(nombre) {
      this.nombre = nombre
    }
  
    agregarPlato(plato) {}
  
    actualizarPlato(plato) {}
  }

  class RestauranteFisico extends Restaurante {
    constructor(nombre, direccion, menuFisico) {
      super(nombre)
      this.menuFisico = menuFisico
      this.direccion = direccion
    }
  
    agregarPlato(plato) {}
  
    actualizarPlato(plato) {}
  
    eliminarPlato(plato) {}
  }
  
  class RestauranteDigital extends Restaurante {
    constructor(nombre, direccion, menuQR) {
      super(nombre, direccion)
      this.menuQR = menuQR
    }
  
    agregarPlato(plato) {}
  
    actualizarPlato(plato) {}
  }
  
  class Menu {
    constructor(platos) {
      this.platos = platos
    }
  }
  
  class MenuQR extends Menu {
    constructor(platos, URL) {
      super(platos)
      this.URL = URL
    }
  
    generarQR() {}
  }
  
  class MenuFisico extends Menu {
    constructor(platos) {
      super(platos)
    }
  
    impresion() {}
  
    visualizacion() {}
  }

  
  class Plato {
    constructor(nombre, precio, ingredientes) {
      this.nombre = nombre
      this.precio = precio
      this.ingredientes = ingredientes
    }
  
    obtenerInfo() {}
  }
  
  class Pedido {
    constructor(cliente, restaurante, detallesPedido, estadoPedido) {
      this.cliente = cliente
      this.restaurante = restaurante
      this.detallesPedido = detallesPedido
      this.estadoPedido = estadoPedido
    }
  
    actualizarEstado() {}
  
    calcularTotal() {}
  }
  