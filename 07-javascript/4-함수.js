// 함수 선언하기
hello()

// 함수 선언문
function hello() {
  console.log('hello')
}

// 함수 표현식
const world = function () {
  console.log('world')
}
world()

// 표현식보다는 선언문을 사용하는 게 좋음 
// (함수의 구현 부분은 보통 복잡하기 때문에 위쪽에 위치할 경우 코드의 가독성이 떨어진다.따라서 함수의 구현 부분은 아래쪽에 위치하는 것이 좋다.)


// 반환(Return) 및 종료(Exit)
// 함수는 return을 만나면 종료된다.
// return 뒤에 오는 코드는 실행되지 않는다.

function hello1() {
  return 'hello'
  console.log('hi')
}

function hello2() {
  return;
}

function hello3() {
  return 1;
  return 2; 
}

function hello4() {
 console.log('4')
}


console.log(hello1(), hello2(), hello3(), hello4())


// 예시
function getGrade(score) {
  if (score === 100) {
    // A+
    return 'A+'
  } else if (score >= 90) {
    // A
    return 'A'
  } else if (score >= 80) {
    // B
    return 'B'
  } else if (score >= 70) {
    // C
    return 'C'
  } else if (score >= 60) {
    // D
    return 'D'
  } else { 
    // F  
    return 'F'
  }
}

console.log(getGrade(50))


// 매개변수 패턴
function sum(x, y = 1) {
  return x + y
}

console.log(sum(1, 5))
console.log(sum(1)) /* NaN = Not a Number */


// 객체의 구조 분해 할당
/* {} = 객체 */
const user = {
  name : 'winter',
  age : 2,
  email : 'helenapark96@naver.com'
} 

function getName ({ name }) {
  return name
}
function getEmail ({ email = '이메일이 없습니다.'}) {
  return email
}

console.log(getName(user))
console.log(getEmail(user))


// 배열 구조 분해 할당
const animals = ['dog', 'cat', 'fish'];

// 두번째 요소 반환하는 기능
function getSecond([, b, c]) {
  return [b, c]
}

console.log(getSecond(animals));


// 화살표 함수
function 함수이름(매개변수) {실행문}

(매개변수) => {실행문}

function hello() {
  console.log('hello')
}

const hello11 = function () {
  console.log('hello11')
}

const hello12 = () => {
  console.log('hello12')
}

hello()
hello11()
hello12()


// sum 함수
function sum1(x,y) {
  return x + y
}

// 표현식
const sum2 = function (x,y) {
  return x + y
}

// 화살표 함수
const sum3 = (x,y) => { 
  return x + y
}

// 화살표 함수 축약
const sum4 = (x,y) => x + y
 
console.log(sum1(1,2)) /* 3 */
// 1은 x에, 2는 y에 할당 -> return으로 1 + 2 -> 3결과
console.log(sum2(1,2)) /* 3 */
console.log(sum3(1,2)) /* 3 */
console.log(sum4(1,2)) /* 3 */

// 화살표 함수 예시
const a = () => {}
const b = x => {}
// 매개변수가 1개 소괄호()생략가능
const c = (x,y) => {}
// 매개변수가 2개 이상인경우 소괄호()생략불가능
const d = x => { return x + x }
const e = x => x + x
const f = x => {
  console.log(x)
  return x * x
}

const g = () => {return { a: 1 }}
const h = () => ({ a: 1 })

const i = () => { return [1,2]}
const j = () => [1,2]


// 객체 구조 분해 할당
const user1 = {
  name: '가을',
  age: 2,
};

function print(u){
  const {name, age} = u;
  return `${name}는 ${age}살 입니다.`;
}

console.log(print(user1));


// 배열의 구조 분해 할당
const animals1 = ['개', '고양이', '참새'];

function print2([, b]) {
  // const [, b] = arr;
  return b;
}
  
console.log(print2(animals1));


// 나머지 매개변수
function sum9(a, b, ...rest) {
  console.log(a, b, rest)
}

console.log(sum9(1, 2));
console.log(sum9(1, 2, 3, 4, 5, 6));


// 화살표 함수
// 기본 문법
// const name = () => {};
// x => {} /* 매개변수가 하나일 때 소괄호 생략 가능 */
// (x, y) => {} /* 매개변수가 여러개일 때 소괄호 생략 불가능 */
// x => {return x + x}
// x => x + x /* 중괄호 생략 시 return문 생략가능 */
// x => {
//   console.log(x);
//   return x * x;
// } /* return 키워드로 시작하지 않는 경우는 중괄호를 생략할 수 없다. */

const gg = () => {return {a : 1}}
const ggg = () => ({a : 1}) /* 객체 반환 시 소괄호로 감싸준다. */

const hh = () => {return [1,2]}
const hhh = () => [1,2] /* 구분이 명확하기 때문에 소괄호로 감싸지 않아도 된당 */


// 콜백 함수
// 함수의 매개변수로 전달되는 함수
const aa = callback => {
  callback();
  console.log('a');
}
const bb = () => {
  console.log('b');
}

aa(bb);