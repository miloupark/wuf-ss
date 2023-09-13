// string (문자열)

const string1 = 'hello'; // 큰 따옴표 가능 
const string2 = "hi"; // 작은 따옴표 가능 
const string3 = `hihihi ${string1} ${1+1}`; // 백틱 가능 

console.log(string1, string2, string3);


// number (숫자)
const number = 123;
// 123;에 따옴표를 넣으면 문자 그대로 출력됨
const negative = -123;
const float = 3.12;

console.log(number);
console.log(number + 1);
console.log(negative);
console.log(negative + number);
console.log(float);


// 데이터 타입 확인
const number2 = -123.123;

console.log(number2);
console.log(number2 + undefined);
console.log(typeof(number2 + undefined));


// 숫자로 변환
const a = 0.1;
const b= 0.2;

console.log(a + b);
console.log((a + b).toFixed(1));
// 소수점 자리수를 지정해주는 메소드, 문자열로 반환
console.log(typeof(a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));


// boolean 참과 거짓
const truthy = true;
const falsy = false;

if(truthy){
  console.log('truthy');
}


// null
let age = null;
// 재할당 가능하게 하려면 const 대신 let 
console.log(age);

// 재할당의 경우 let 사용하지 않음
age = 20;
console.log(age);


// undefined
let height;
console.log(height);

height = 'binbin';
console.log(height);

// ex
const user1 = {
  name: 'binny',
  age: 28,
  height: 160,
  email: null
};

console.log(user1);
console.log(user1.name);
console.log(user1.name, user1.age);
console.log(user1.name, user1.age, user1.height);
console.log(user1.name, user1.age, user1.height, user1);
console.log(user1.email);
console.log(user1.weight);


// array 배열
const animals = ['milou', 'coton', 'dog']

console.log(animals)
console.log(animals[0])
console.log(animals[0], animals[2])
// 배열의 인덱스는 0부터 시작 (Zero-based numbering)
console.log(animals.length)
// 배열의 길이는 length로 확인 가능
console.log(animals[animals.length - 1])
// 배열의 마지막 인덱스를 가져오는 방법


// object 객체 
const user2 = {
  name: 'binbinbin',
  age: 28
};

console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2['name']);
console.log(user2['age']);



// 
const userA = {
  name: 'Kim',
  age: 20,
};

const userB = {
  name: 'Lee',
  age: 30,
  parent: userA
};

console.log(userB)
console.log(userB.parent)
console.log(userB.parent.name)
console.log(userB['parent']['name'])


// 배열에 객체를 넣을 수 있음
const users = [userA, userB]

console.log(users[0])
console.log(users[0].name)
console.log(users[0]['name'])

// fuction 함수
function printHello() {
  console.log('hello');
}

printHello();

console.log(printHello);
console.log(printHello());


// 함수 표현식 (익명 함수)
const getNumber = function (){
  return 123;
};

console.log(getNumber);
console.log(typeof getNumber);
console.log(getNumber());
console.log(typeof getNumber());
// 함수를 호출할 때는 함수 이름 뒤에 괄호를 붙여줌


// Type Conversion (형 변환)
const aa = 1; /* number */
const bb = '1'; /* string */

console.log(aa == bb); /* true */
console.log(aa === bb); /* false */

const cc = false;
const dd = 0;

console.log(cc == dd); /* true */
console.log(cc === dd); /* false */

const ee = true;
const ff = 1;

console.log(ee == ff); /* true */
console.log(ee === ff); /* false */


// Truthy (참 같은 값) & Falsy (거짓 같은 값)
if (true){
  console.log('true');
}


// 데이터 타입 확인
console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object /* 배열 */
console.log(typeof function(){}) // function