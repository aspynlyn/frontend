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

// '전기공학' 읽어와서 출력
console.log(person2.education.major[1]);
console.log(person2['education']['major'][1]);