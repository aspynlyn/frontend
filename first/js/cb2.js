const div = function (n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
};

function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

const calc = function (cb, n1, n2) {
  cb(n1, n2);
};

calc(sum, 10, 20);
calc(div, 10, 2);
calc(
  function (n1, n2) {
    console.log(n1 * n2);
  },
  30,
  2
);

function max(n1, n2) {
  // if (n1 >= n2) {
  //   console.log(n1);
  // } else {
  //   console.log(n2);
  // }
  console.log(n1 >= n2 ? n1 : n2);
}

const findMax = (n1, n2) => console.log(n1 >= n2 ? n1 : n2);
// 화살표함수 사용, 또 호출할수도 있으니 상수 findMax에 함수 주소값 복사

calc(findMax, 40, 30);
