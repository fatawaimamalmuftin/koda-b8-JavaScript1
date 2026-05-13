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
