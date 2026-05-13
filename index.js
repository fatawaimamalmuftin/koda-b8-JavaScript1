//  JavaScript1

//  Case: menghitung Keliling dan luas lingkaran
let Rijari = "abc";
if (typeof Rijari !== "number") {
  console.log("harus nomor");
  return;
}
const phi = 3.14;
const phi2 = 22 / 7;
let luas = 0;
let keliling = 0;

if (Rijari % 7 === 0) {
  luas = phi2 * Rijari * Rijari;
  keliling = 2 * phi2 * Rijari;
} else {
  luas = phi * Rijari * Rijari;
  keliling = 2 * phi * Rijari;
}

console.log("Luas Lingkaran : " + luas);
console.log("Keliling Lingkaran : " + keliling);

// r = 0
// if(typeof r !== "number"){
//   console.log("Variable r harus bertipe data number")
// }

// bio = {};
// if (bio instanceof Object) {
//   console.log("Variable bio harus bertipe data object");
// }
