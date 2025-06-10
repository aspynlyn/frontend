// 객체에 사용
const person2 = {
  name: '민태호',
  age: 38,
  language: ['한국어', '영어', '일본어'],
  education:{
    school: '금오공대',
    major: ['전자공학', '전기공학'],
    graduate: true
  }
};

for(const item in person2){
  console.log(item);
}

console.log('-------------');

for(const item in person2){
  console.log(item , person2[item]);
}