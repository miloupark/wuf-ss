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