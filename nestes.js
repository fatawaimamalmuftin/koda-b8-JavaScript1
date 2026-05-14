// 1
const we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};

const best = we.are.the.best;
console.log(best);
// ---------------------------------
//2
const objek = {
  hello: {
    world: "Hello World",
  },
};
const helloWorld = objek.hello.world;
console.log(helloWorld);
// ---------------------------------
//3
const obj = {
  str: [
    0,
    1,
    2,
    [0, [0, 1, { man: [{ tech: { academy: "Tech Academy" } }] }, 3], 4],
    5,
  ],
};
const objeck = obj.str[3][1][2].man[0].tech.academy;
console.log(objeck);
// ---------------------------------
//4
const array = { my: [{ favor: [0, 1, 2, { fruit: { is: "apple" } }] }] };
const result = array.my[0].favor[3].fruit.is;
console.log(result);
// ---------------------------------
//5
const kalkulasi = { num: { first: [0, 30] } };
const kalkulasi2 = { num2: { second: [0, 1, 2] } };
const hasil = kalkulasi.num.first[1] + kalkulasi2.num2.second[2];
console.log(hasil);
