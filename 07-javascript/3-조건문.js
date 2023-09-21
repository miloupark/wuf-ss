// // 조건문

// // if문
// if (조건){
//   실행문
// }

// if (조건) {
//   // 조건이 참일 때 실행되는 코드
// } else {
//   // 조건이 거짓일 때 실행되는 코드
// }

// if (조건1) {
//   // 조건1이 참일 때 실행되는 코드
// } else if (조건2) {
//   // 조건2가 참일 때 실행되는 코드
// } else {
//   // 조건1과 조건2가 모두 거짓일 때 실행되는 코드
// }

// 예시
function isPositive(num) {
  if (num > 0) {
    return '양수입니당';
  } else if (num < 0) {
    return '음수입니당';    
  } else {
    return '0입니당';
  }
}

console.log(isPositive(1)); /* 양수입니당 */
console.log(isPositive(-1)); /* undefined */
console.log(isPositive(0)); /* 음수입니당 */


// switch문
// switch (조건) {
//   case 값1:
//     실행문; /* 조건과 값1이 일치하면 실행 */
//     break;

//   case 값2:
//     실행문; /* 조건과 값2이 일치하면 실행 */
//     break;
  
//   default:
//     실행문; /* 조건과 일치하는 값이 없을 때 실행 */
//   }

// 예시
function getSound(animal) {
  let sound;
  switch (animal) {
    case '개':
      sound = '왕왕으르렁';
      break;
    case '고양이':
      sound = '냐옹먀옹';
      break;
    case '참새':
      sound = '째애애액콱';
      break;
    case '비둘기':
      sound = '구구구구구';
      break;
    case '인간':
     sound = '뭐요뭐요오';
     break;
  }
  return sound;
}

console.log(getSound('인간'));
console.log(getSound('비둘기'));


// if문으로 변환 = 
function getSound2(animal) {
  if (animal === '개') return '으르렁컁컁'
  if (animal === '고양이') return '냐옹먀옹'
  if (animal === '비둘기') return '구구구구구'
  if (animal === '인간') return '뭐요뭐요오'
}
console.log(getSound2('인간'));


// for (초기화; 조건; 증감) { 실행될 코드 }
for (let i = 0; i < 10; i = i + 1) {
  console.log(i); /* 0부터 9까지 출력 */
}

// 감소하는 for문
for (let i =9; i >= -1; i--) {
  if(i < 4) {
    break;
  }
  console.log(i)
}

// continue문
for (let i = 9; i > 0; i--) {
  if(i % 2 === 0) { /* i를 2로 나눴을 때 나머지가 0 */
    continue; /* continue를 만나면 아래 코드를 실행하지 않고 건너뛴다. */
  }
  console.log(i);
}


// dog cat fish 배열로 만들어서 animalsA 변수에 할당
const animalsA = ['dog', 'cat', 'fish', 'lion']

console.log(animalsA[0])
console.log(animalsA[1])
console.log(animalsA[2])

// for (초기화; 조건; 종료식) {
//   실행문;
// }
// console.log(animalsA[i])

for (let i = 0; i < animalsA.length; i = i + 1) {
  console.log(animalsA[i]);
}
// 배열의 길이 : 배열.length 


// for of 
// for (변수 of 배열) {
//   실행문;
// }
for (let animal of animalsA) {
  console.log(animal)
}

// 예시2 
const users = [
  { name: '겨울이', age: 2},
  { name: '개밀루', age: 1},
  { name: '박혜빈', age: 28},
]

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

for (let i = 0; i < 3; i++) {
  console.log(users[i])
}

for (let user of users) {
  console.log(user)
  console.log(user.name)
}


// for in 문
// for (변수 in 객체) {실행문}

const user = {
  name: '밀루',
  age: 1,
  cute: true,
  ziral: 'max',
  bite: 'everyday',
}

for (let key in user) {
  console.log(key);
  console.log(user[key])
}


// while문
// while (조건) {실행문}

// 0~9까지 출력
let j = 0;

while (j < 10) {
  console.log(j);
  j = j + 1 /* 재할당 */
}

// do while
// do {t실행문} while (조건)ㅣ

// 0~9까지 출력
let k = 0;

do {
  console.log(k);
  k++;
} while (k < 10);
