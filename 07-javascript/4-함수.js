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
