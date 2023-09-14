// 산술 연산자
// +,_,*,/,%,++,--

console.log(1 + 2);/* 3 */
// = 피연산자(1) 연산자(+) 피연산자(2) 

console.log(5 - 7); /* -2 */

console.log(5 * 7); /* 35 */

console.log(10 / 2); /* 5 */

console.log(7 % 5); /* 나머지 2 */
console.log(6 % 3); /* 6이 3의 배수인지 알아보기, 나머지가 0 */
console.log(8 % 2); /* 8이 2의 배수인지 알아보기, 나머지가 0 */

function isEven(num) { /* 짝수이니? / num이라는 매개변수 */
  return num % 2 === 0; /* 나머지가 0이 맞니? */
}
console.log(isEven(3)); /* true, false로 나타남 */
console.log(isEven(4));


// 할당 연산사
let a = 2;
console.log(a); /* 2 */

// 재할당
a = 3;
console.log(a); /* 3 */

// a = a + 3;
a %= 3;
console.log(a); /* 6 */


// 증가 연산자
let b = 1;

// b = b + 1;
console.log(b++); /* 1 / 선출력 후 연산 / 다음 숫자부터 더해짐*/
console.log(b++); /* 2 */

// console.log(++b);
// console.log(++b); /* 선연산 후 출력 */


// 감소 연산자 
let c = 1;

console.log(c--); /* 1 / 선출력 후 연산 */
console.log(c); /* 0 */

// c = c - 1;
// console.log(--c); /* 1 / 선연산 후 출력 */
// console.log(c); /* 1 */


// 부정연산자
console.log(!true); /* false */
console.log(!false); /* true */
console.log(!0); /* true */
console.log(!1); /* false */
console.log(!!0); /* false */

console.log(![]); /* false */
console.log(!{}); /* false */
console.log(!null); /* true */
console.log(!function(){}); /* true */