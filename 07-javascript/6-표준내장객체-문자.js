const str = 'Hello World';

// length : 띄어쓰기 포함 11
console.log(str.length);


// includes() 문자열에 특정 문자열이 포함되어 있는지 확인
console.log(str.includes('Hello')); /* = true */
console.log(str.includes('hello')); /* = false 대문자소문자 구분함 */ 
console.log(str.includes('Hello', 0)); /* = true */
console.log(str.includes('Hello', 1)); /* = false 두번째 자리부터 검색하기 때문에 false */
// 상단의 숫자는 position값인데 기본값은 0! 


// indexOf : 위치값 반환
console.log(str.indexOf('World')); /* = 6 */
console.log(str.indexOf('world')); /* = -1 */
// 찾을 수 없으면 -1을 반환한당


// 부정일치 연산자
if (str.indexOf('Hello')!==-1) {
  console.log('Hello가 포함된 문장입니다.');
}
/* = Hello가 포함된 문장입니다. */


// 부정연산자
if (!str.includes('hello')) {
  console.log('hello가 포함되지 않은 문장입니다.');
}
/* = hello가 포함되지 않은 문장입니다. */


// padStart()
// console.log(str2.padStart(지정한길이, '채울문자'));
const str2 = '12345';
console.log(str2.padStart(10, '0')); /* 0000012345 */
// 12345를 10길이로 지정하는데 앞에 0으로 채워줘

console.log(str.padStart(3, '0')); /* hello world */


// replace()
const str3 = 'hello winter winter';

console.log(str3.replace('winter', 'summer')); /* hello summer winter */
// winter를 summer로 바꿔줘
console.log(str3.replace(/winter/g, 'fall')); /* hello fall fall */
console.log(str3); /* = hello winter winter */
// 원본은 변경되지 않음 


// slice
const str4 = 'hello world';
console.log(str4.slice(0, 3)); /* hel */
console.log(str4.slice(6, -1)); /* worl */
// 6번째부터 -1은 맨 뒤 (=d) 직전까지 


// split : 문자열을 지정한 구분자를 기준으로 나누어 배열로 반환
console.log(str4.split(' ')); /* ['hello', 'world'] */
console.log(str4.split('')); /* ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'] */


// toLowerCase : 문자열을 소문자로 변환하여 반환
const str5 = 'Hello World';
console.log(str.toLowerCase()); /* hello world */
console.log(str.toUpperCase()); /* HELLO WORLD */


// trim : 문자열 앞뒤의 공백을 제거
const str6 = ' hello world ';

console.log(str6.trim()); /* hello world */
console.log(str6); /*  hello world  */
// 원본은 변경되지 않음