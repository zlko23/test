let num1 = 100;
let num2 = 500;

let suma = num1 + num2;
let resta = suma - num1 - num1;
let mult = num1 * 7;
let div = num2 / num1;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicacion: ", mult);
console.log("Division: ", div);

console.log("\n");

let tienda = {
  nombre: "Black Tower",
  direccion: "Cairhen",
  numero: 2500,
  productos: [
    { item: "Sword", material: "Steel" },
    { item: "Shield", material: "Ironwood" },
    { item: "Axe", material: "Wood and iron" },
    { item: "Spear", material: "Wood and steel" },
  ],
};
console.log(tienda);

console.log("\n");

function nuevaTienda(nombre, direccion, numero, productos) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.numero = numero;
  this.productos = productos;
}
let tienda2 = new nuevaTienda("White Tower", "Tar Valon", 100, [
  { item: "Staff", material: "Wood" },
  { item: "Wand", material: "Wood" },
  { item: "Potions", material: "Varied" },
  { item: "Spells", material: "Varied" },
]);
console.log(tienda2);
