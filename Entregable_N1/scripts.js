console.log("¡Bienvenido a la tienda!");

// Clase Producto
class Producto {
    constructor(id, nombre, descripcion, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
    }

    verProducto() {
        return `ID: ${this.id} | Producto: ${this.nombre} | Descripción: ${this.descripcion} | Precio: $${this.precio}`;
    }
}

// Creación del array con productos
const productos = [
    new Producto(2, "mouse", "Mouse gamer inalámbrico", 15, 35000),
    new Producto(1, "teclado", "Teclado mecánico RGB", 20, 75000),
    new Producto(3, "monitor", "Monitor curvo 144Hz", 10, 150000),
    new Producto(4, "audífonos", "Audífonos con micrófono RGB", 25, 50000),
    new Producto(5, "silla", "Silla gamer ergonómica", 5, 120000),
    new Producto(6, "micrófono", "Micrófono para streaming", 8, 45000),
    new Producto(7, "mousepad", "Mousepad XL RGB", 30, 20000),
    new Producto(8, "control", "Control inalámbrico para PC y consola", 12, 70000),
    new Producto(9, "tarjeta gráfica", "Tarjeta gráfica RTX 4070", 4, 450000),
    new Producto(10, "lámpara", "Lámpara LED RGB para setup", 18, 15000)
];

// Mostrar productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach((prod) => console.log(prod.verProducto()));
}

// Selección de productos
function seleccionarProductos() {
    const carrito = [];
    let seguirComprando = true;

    mostrarProductos();

    while (seguirComprando) {
        const idProducto = parseInt(
            prompt("Selecciona el ID del producto que deseas agregar al carrito:")
        );

        const productoSeleccionado = productos.find(
            (prod) => prod.id === idProducto
        );

        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            alert(`Se agregó "${productoSeleccionado.nombre}" al carrito.`);
        } else {
            alert("ID no válido. Por favor, selecciona un producto existente.");
        }

        seguirComprando = confirm("¿Deseas agregar otro producto?");
    }

    return carrito;
}

// Mostrar detalle y calcular el total de la compra
function mostrarDetalleCompra(carrito) {
    if (carrito.length === 0) {
        alert("El carrito está vacío. No se puede realizar la compra.");
        return 0;
    }

    console.log("Detalle de la compra:");
    let total = 0;

    carrito.forEach((prod) => {
        console.log(`Producto: ${prod.nombre} | Precio: $${prod.precio}`);
        total += prod.precio;
    });

    console.log(`Total a pagar: $${total}`);
    return total;
}

// Mostrar mensaje de compra exitosa
function confirmarCompra(total) {
    if (total > 0) {
        alert("¡Felicitaciones! Tu compra ha sido confirmada.");
        alert(`Total a pagar: $${total}`);
    } else {
        alert("No se pudo completar la compra. Carrito vacío.");
    }
}

// Flujo principal
function iniciarTienda() {
    const carrito = seleccionarProductos();
    const total = mostrarDetalleCompra(carrito);
    confirmarCompra(total);
}

// Iniciar el programa
iniciarTienda();