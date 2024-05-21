// Con la funcion datosUsuarios se piden los datos al usuario mediante prompt para un futuro posible logeo con usuario y contrasena

function datosUsuario() {
    let arrayUsuarios = ['CoderHouse'];
    let registrado = confirm('Esta usted registrado?')

    if (registrado === false) {
        alert('A continuacion, registre su nombre de usuario')
        let nombreAgregado = prompt('Ingrese un nombre de usuario');
        arrayUsuarios.push(nombreAgregado);
        alert('Bienvenido ' + nombreAgregado);
    } else if (registrado === true) {
        for (let index = 0; index < arrayUsuarios.length; index++) {
            if (arrayUsuarios[index] === prompt('Ingrese su usuario REGISTRADO')) {
                alert('Bienvenido');
            }
        }
    }
}

// Con la funcion comprarProducto se muestra una lista de opciones al usuario y se le pide que seleccione el nro del producto que desea
// Una vez elegido el producto se le pregunta si desea agregar algo mas al carrito y si la respuesta es afirmativa, se le vuelve a mostrar la lista
// Cada item que selecciona suma uno a la cantidad para saber cuantos productos esta comprando y ademas se suma el total de la compra.

//constructor de productos
class Producto {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    mostrar() {
        alert(this.marca + this.modelo + this.precio);
    }
}

function compraProducto() {
    let producto;
    let precio = 0;
    let cantidad = 0;
    let total = 0;
    let continuaCompra;
    let envio;

    do {


        const producto1 = new Producto({ marca: "Samsung", modelo: "S23", precio: 750000 });
        const producto2 = new Producto({ marca: "Samsung", modelo: "S23 Plus", precio: 850000 });
        const producto3 = new Producto({ marca: "Samsung", modelo: "S23 Ultra", precio: 960000 });
        const producto4 = new Producto({ marca: "Samsung", modelo: "S22 Ultra", precio: 650000 });

        producto = parseInt(prompt('Seleccione el producto deseado: 1 - S23, 2 - S23+, 3 - S23 Ultra, 4 - S22 Ultra'));
        switch (producto) {
            case 1:
                console.log(producto1);
                precio = 750000;
                cantidad++;
                break;
            case 2:
                console.log(producto2);
                precio = 850000;
                cantidad++;
                break;
            case 3:
                console.log(producto3);
                precio = 960000;
                cantidad++;
                break;
            case 4:
                console.log(producto4);
                precio = 650000;
                cantidad++;
                break;
            default:
                alert('La opcion ingresada no existe')
        }

        total = total + precio;
        continuaCompra = confirm('Desea agregar mas productos?');

    } while (continuaCompra === true);

    // Con el siguiente alert se muestra la cantidad de productos que lleva y el precio total
    // Ademas se le pregunta si quiere envio a domicilio. Si la respuesta es afirmativa, se le suman 1000 al total final y se muestra con otro alert

    alert('Usted esta llevando ' + cantidad + ' productos por un total de ' + '$' + total);
    envio = confirm('Desea envio a domicilio?(+ $3000)');
    if (envio === true) {
        total = total + 3000;
    }

    alert('El nuevo total a pagar es de $' + total);

}

datosUsuario();
compraProducto();



