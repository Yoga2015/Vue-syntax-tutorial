// forEach() 方法 ，迭代（遍历）数组

let arr = [1, 2, 3];
arr.forEach(function (item, index) {
  console.log(item, index);
  // return;
  // break;
  // continue;
})

let sum = 0;
// 每个数组元素 ，数组元素的索引号 ， 数组本身
arr.forEach(function (value, index, array) {
  console.log('每个数组元素' + value);
  console.log('每个数组元素的索引号' + index);
  console.log('数组本身' + array);
  sum += value;
})

console.log(sum);
// forEach（）循环一旦开始，无法在中间被停止


// some() 查找 数组中 是否 满足条件的元素
// 注意,它的返回值是布尔值，如果查找到这个元素，就返回true，如果找不到就返回false
let arr2 = [10, 20, 30, 40];
let flag = arr2.some(function (value) {
  return value >= 20;
})
console.log(flag);   // true
// 如果 找到第一个满足条件的元素，则终止循环，不再继续查找

let arr3 = ['red', 'pink', 'blue', 'black'];
let flag2 = arr3.some(function (value) {
  return value == 'pink';
})
console.log(flag2);  //true



// every()方法 是 所有成员的返回值 都是 true，整个every方法才返回 true，否则返回false。
let arr4 = [1, 2, 3, 4, 5];
let flag3 = arr4.every(function (elem, index, arr) {
  return elem >= 3;
});
console.log(flag3);

const arr5 = [
  { id: 1, name: '西瓜', state: true },
  { id: 2, name: '苹果', state: true },
  { id: 3, name: '草莓', state: true },
]
const result = arr5.every(item => item.state);
console.log(result);


// map() 方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
const oldArr = [1, 2, 3, 4, 5];

const newArr = oldArr.map(function (item) {
  return item * 2;
})

console.log(newArr);  // [2, 4, 6, 8, 10]

console.log(oldArr);  // [1, 2, 3, 4, 5]  旧数组不会被影响的



// // filter() 筛选数组   注意它直接返回一个新数组。
// // 需求：选出数组中大于等于 20的元素
let arr1 = [10, 20, 30, 40, 3, 7];
let newArr2 = arr1.filter(function (value, index) {
  // return value >= 20;   // [20, 30, 40]
  return value % 2 === 0;  //[10, 20, 30, 40]
})

console.log(newArr2);
