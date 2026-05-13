//  JavaScript1

//  Case: menghitung Keliling dan luas lingkaran
let Rijari = 7;
const phi = 3.14;
const phi2 = 22 / 7;
let luas = 0;
let keliling = 0;

if (Rijari % 7 === 0) {
  luas = phi2 * Rijari * Rijari;
} else {
  luas = phi * Rijari * Rijari;
}

if (Rijari % 7 === 0) {
  keliling = 2 * phi2 * Rijari;
} else {
  keliling = 2 * phi * Rijari;
}

console.log("Luas Lingkaran : " + luas);
console.log("Keliling Lingkaran : " + keliling);
