// es6문법 화살표 함수
const sum = (n1, n2) => {
  console.log('sum메소드 호출!');
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
  return;
};

const result = sum(10, 30);
console.log('result: ', result);

// 화살표 함수에서 생략 가능한 것

// 파라미터가 하나일 때 : 소괄호 생략
const abs = (val) => {
  return val < 0 ? -val : val;
};

console.log('abs:', abs(-10));
console.log('abs:', abs(11));

// 실행문이 한 줄일 때 : 중괄호 생략
const abs2 = (val) => console.log('val:', val < 0 ? -val : val);

abs2(-11);
abs2(3);

// 실행문이 한 줄일 때 : return 생략(중괄호도 없어야함)
const abs3 = (val) => (val < 0 ? -val : val);
