const myArray = ['A', 'B', 'C', 'D'];

console.log('Array.isArray(myArray)', Array.isArray(myArray));

for(const item of myArray){
  console.log(item);
}

// 유사배열
const myArray2 = {
  0: '가',
  1: '나',
  2: '다',
  3: '라',
  length: 4
};

for(i=0; i<myArray2.length; i++){
  console.log('for', myArray2[i]);
}
const myArray2Iterable = Array.from(myArray2); // 유사배열을 진짜 배열로 만듦
// 에러 발생 myArray2 is not iterable
// for(const item of myArray2){
//   console.log(item);
// }

for(const item of myArray2Iterable){
  console.log(item);
}