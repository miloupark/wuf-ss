const users = [
  { name: '홍길동', age: 36 },
  { name: '고길동', age: 12 },
  { name: '둘리', age: 6 },
];

const newUsers = users.map(
  (user) => ({
    ...user, 
    email: null,
}));

console.log(newUsers)

// 평균 나이 구하기
// 누산기(accumulator)
// 현재 값(currentValue)
// 현재 인덱스(currentIndex)
// 원본 배열(array)
const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge); 

const avgAge = (totalAge / users.length).toFixed();
// 54 / 3(배열의 길이) = 18 (toFixed()=소수점X)
console.log(avgAge); // 18


// 모든 이름 출력하기
const namesArr = users.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []).join(', ');

console.log(namesArr); 

// 모든 이름을 한 줄로 출력하기
// const names = namesArr.join(', ');
// console.log(names);

// .reverse() : 배열의 순서를 반전하는 메서드
const arr = [1, 2, 3];

console.log(arr.reverse()); // [3, 2, 1]
console.log(arr); // [3, 2, 1] 원본도 변경됨