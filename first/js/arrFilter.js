const arr = [11, 32, 7, 19, 40, 56, 57];
const filterArr = arr.filter((item) => item % 2 === 0);
console.log('arr: ', arr);
console.log('filterArr: ', filterArr);

// const temp = [];
// temp.push(1);
// temp.push(2);
// temp.push(3);

// console.log(temp);

const myArr = {
  0: 11,
  1: 32,
  2: 7,
  3: 19,
  4: 40,
  5: 56,
  6: 57,
  length: 7,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
  map: function (cb) {
    const temp = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
      temp[i] = cb(this[i], i);
    }
    return temp;
  },
  filter: function (cb) {
    const temp = [];
    for (i = 0; i < this.length; i++) {
      if (cb(this[i], i) === true) {
        temp.push(this[i]);
      }
  // switch (cb(this[i], i)) {
  //   case true:
  //     temp.push(this[i]);
  //     break;
  //   case false:
  //     break;
  // }
    }
    return temp;
  },
};
const myFilterArr = myArr.filter((item) => item > 20);
console.log('myFilterArr: ', myFilterArr);


