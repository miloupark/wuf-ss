// 배열 리터럴
// const animals = ['dog', 'bear', 'frog', 'rabbit'];

// 생성자 함수를 통해서 배열을 생성할 수 있다.
// const animals = new Array('dog', 'bear', 'frog', 'rabbit');

// console.log(animals); /* ['dog', 'bear', 'frog', 'rabbit'] */
// console.log(animals.length); /* 4 */
// console.log(animals[1]); /* bear */
// console.log(animals.includes('dog')); /* true */
// console.log(animals.includes('cat')); /* false */
// 위와 같이 length, includes등을 프로토타입 속성이라고 한다.


// prototype을 이용한 메소드 생성 
const animals = new Array('dog', 'cat', 'fish');

// 배열의 프로토타입에 odada 메소드 추가
Array.prototype.odada = function() {
   console.log(this);
}

animals.odada();

const arr = [1, 2, 3];

// 메소드를 사용한 fullname출력
// const winter = {
//   firstName: 'winter',
//   lastName: 'son',
//   getFullName(){
//     // 일반함수에서 this는 호출한 객체를 가리킨다.
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const fall = {
//   firstName: 'fall',
//   lastName: 'kim',
//   // getFullName(){
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
// };

// console.log(winter);
// console.log(fall);
// console.log(winter.getFullName());
// // console.log(fall.getFullName());
// console.log(winter.getFullName.call(fall));


// 생성자 함수를 통해 객체를 만들어보자
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function (){
//   return`${this.firstName} ${this.lastName}`;
// };


// class 함수를 이용한 생성자 함수
class User {
  constructor(first, last) {
    this.firstName = first,
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


// new를 통해 객체를 생성한다.
const winter = new User('winter', 'kim');
const fall = new User('fall', 'son');

console.log(winter);
console.log(fall);
console.log(winter.getFullName());
console.log(fall.getFullName());
