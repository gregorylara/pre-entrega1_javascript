// Diccionario de productos con precios
const productos = {
  1: { nombre: "Polo", precio: 22 },
  2: { nombre: "Jersey", precio: 35 },
  3: { nombre: "Pantalon", precio: 28 },
  4: { nombre: "Zapatos", precio: 40 },
  5: { nombre: "Gorra", precio: 15 },
};

// Pedirle al usuario que seleccione los productos
const seleccionados = [];
do {
  const seleccion = prompt(
    "Ingrese el número del producto que desea comprar (0 para finalizar): \n [1] Polo = $22 \n [2] Jersey = $35 \n [3] Pantalon = $28 \n [4] Zapatos = $40 \n [5] Gorra = $15");
  if (seleccion === "0") {
    break;
  }
  const seleccionInt = parseInt(seleccion);
  if (seleccionInt in productos) {
    seleccionados.push(seleccionInt);
  } else {
    alert("Producto inválido.");
  }
} while (true);

// Calcular el total y mostrarlo al usuario
let total = 0;
for (const seleccion of seleccionados) {
  total += productos[seleccion].precio;
}
alert(`El total de su compra es: $${total}`);
1;
