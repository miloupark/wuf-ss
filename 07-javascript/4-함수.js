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
