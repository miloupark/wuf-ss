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


// 할당 연산자
let a = 2;
console.log(a); /* 2 */
// const는 재할당 불가

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


// 비교연산자 
// ==, ===, !=, !==, >, >=, <, <=
console.log(1 == '1'); /* 동등연산자 */
console.log(1 === '1'); /* 일치연산자 */
console.log(1 != '1'); /* false (부동연산자) */
console.log(1 !== '1'); /* true (불일치연산자) */
console.log(1 > 2); /* false */
console.log(1 < 2); /* true */
console.log(1 >= 2); /* false */
console.log(1 <= 2); /* true */


// 논리연산자
// &&, ||

const f = true;
const g = true;

if(f && g) {
  console.log('둘 다 참입니다.');
}
// 둘 다 참일 경우에만 출력됨 
console.log(true && false); /* false */
console.log(1 && 0); /* 0 */
console.log(1 && 2 && 0); /* 0 */
console.log(1 && 0 && 3); /* 0 */
console.log('a' & 'b' && ''); /* '' */ 
console.log('a' & 'b' && 'c') /* c */


// 또 (||)는 연산자
const h = false;
const i = true;

if (h || i) {
  console.log('둘 중 하나라도 참입니다.');
}


// 연산자를 기준으로 가장 먼저 만나는 참 데이터가 반환된다.
console.log(true || false); /* true */
console.log(1 || 0); /* 1 */
console.log(false || {} || 0); /* {} 객체데이터 반환(참) */
console.log(false || [] || null); /* [] 배열 반환(참) */
console.log(function () {} || '' || undefined); /* [] 배열 반환(참) */
console.log(false || 0 || '' || NaN); /* NaN / 모두가 거짓이라면 마지막 데이터가 반환 */


// 병합 연산자
// a ?? b
const j = 0;
console.log(j || 5); /* 5 */
console.log(j ?? 5); /* 0 */
console.log(null ?? 1); /* 1 */
console.log(undefined ?? 1); /* 1 */
console.log(undefined ?? null); /* null */
console.log(null ?? 1 ?? 2); /* 1 */
console.log(0 ?? 1 ?? 2); /* 0 */


// 삼항 연산자
// 조건? 참 : 거짓 
console.log(true ? 1 : 2); /* 1 */
console.log(false ? 1 : 2); /* 2 */


// if문
let p = 1; /* p = 5로 변경하면 큽니다로 바뀜 */ 

// if (p < 3) {
//   console.log('p는 3보다 작습니다.');
// }else {
//   console.log('p는 3보다 큽니다.');
// }

console.log(p < 3 ? '참' : '거짓'); /* 참 */

// ex
function isAnimal(text) {
  return text === '고양이' ? '고양이' : '고양이 아님'
}
console.log(isAnimal('고양이')); /* 고양이 */
console.log(isAnimal('개')); /* 고양이 아님 */


// 전개연산자
// 배열의 전개
const q = [1, 2, 3];
const r = [4, 5, 6];

console.log(q.concat(r)); /* [1, 2, 3, 4, 5, 6] */
console.log([...q,...r]); /* [1, 2, 3, 4, 5, 6] */


// 객체의 전개
const userC = {
  name: '김부모',
  age: 50,
};

const userD = {
  ...userC,
  nick: '김자식',
  // parent: userC,
}
console.log(userC);
console.log(userD);


// 함수의 인자에서의 전개
function sum(a, b, c) {
  console.log(a + b + c)
}

sum(1, 2, 3) /* 6 */

// 배열 데이터를 인자로 전달하려면?
const num = [1, 2, 3]
sum(num[0], num[1], num[2]) // 6

// 전개 연산자를 사용하면?
sum(...num) // 6