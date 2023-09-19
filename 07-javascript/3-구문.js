// 객체 구조 분해 할당
const obj = {
  h: 1,
  i: 2,
  j: 3,
};

// const ee = obj.e;
// const ff = obj.f;
// const gg = obj.g;

// 구조 분해 할당
// const {h, i, j} = obj;
const { h = 4, i: free, k: kk = 10} = obj;

console.log(h, free, kk);
// undefined undefined undefined - 객체의 키와 변수명이 다를 경우

// 선택적 체이닝 (?.)
let user = null; /* 정보가 없는 사용자 */

// console.log(user.name); /* Uncaught TypeError: Cannot read properties of null (reading 'name') */

console.log(user?.name); /* undefined, 에러가 발생하지 않습니다. */


let user2 = {
  name: "winter",
  age: 2,
  address: {
      city: "Seoul",
      zipcode: "123456"
  }
};

let user3 = {
  name: "fall",
  age: 3,
};

function printCity(user) {
  return user.address?.city || "주소 정보가 없습니다.";
  // ?. 사용하여 user.address가 유효한지 확인
  // or 연산자를 사용하여 user.address가 유효하지 않은 경우 "no city"를 반환
  // || 또는 연산자 (참을 반환함)
}

console.log(printCity(user2)); // Seoul
console.log(printCity(user3)); // 주소 정보가 없습니다.