const array = { my: [{ favor: [0, 1, 2, { fruit: { is: "apple" } }] }] };
const result = array.my[0].favor[3].fruit.is;
console.log(result);
