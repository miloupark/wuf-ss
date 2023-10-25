// 숫자
// toFixed : 숫자를 고정소수점 표기법으로 변환하여 문자열로 반환
const num = 3.1415926535;
console.log(num.toFixed(2)); // 3.14
console.log(typeof num.toFixed(2)); // string
console.log(parseFloat(num.toFixed(2))); /* 3.14 */
console.log(Number(num.toFixed(2))); /* 3.14 */


// toLocalString() : 숫자를 표준 숫자 형식의 문자열로 변환
const num2 = 10000000;

console.log(num2.toLocaleString()); // 10,000,000
console.log(`${num2.toLocaleString()}원`); // 10,000,000원
// '${}'는 JavaScript에서 템플릿 리터럴(또는 백틱 문자열)을 사용하는 문법 
// 이것은 문자열 내에서 변수나 표현식의 값을 삽입하는 데 사용


// Number.isInteger() : 전달된 인수가 정수인지 확인
console.log(Number.isInteger(0.5)); // false
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-1)); // true

// Math 객체
// Math.random() : 0이상 1미만의 랜덤한 숫자를 반환

console.log(Math.random());

function getRandom() {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandom);

// 7세 이하 어린이 찾기
const users = [
  { name: '신짱구', age: 40 },
  { name: '신짱아', age: 36 },
  { name: '흰둥이', age: 6 },
];

const children = users.filter((user) => {
    return user.age <= 7;
});
console.log(children);

// 흰둥이 찾기 
const whitepuppy = users.find((dog) => dog.name === '흰둥이');
console.log(whitepuppy);


// .flat()
const arr = [1, [2, [3, [4]]]];

console.log(arr.flat()); // [1, 2, [3, [4]]]
console.log(arr.flat(1)); // [1, 2, [3, [4]]]
console.log(arr.flat(2)); // [1, 2, 3, [4]]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]


// .forEach()
const arrr = [1, 2, 3];

arr.forEach((item) => console.log(item)); // 1 2 3