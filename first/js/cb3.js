function sum(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}

const calc = (fn, n1, n2) =>
  {const result = fn(n1, n2);
    console.log('결과: ', result)}

calc(sum, 30, 20);
calc(sub, 30, 12);
