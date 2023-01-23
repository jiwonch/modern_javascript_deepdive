// string 생성자 함수에 의한 string 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

// number 생성자 함수에 의한 number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

// boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

// function 생성자 함수에 의한 function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func);
console.log(func);

// array 생성자 함수에 의한 array 객체(정규 표현식) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성nn
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

// data 생성자 함수에 의한 data 객체 생성
const date = new Date();
console.log(typeof date);
console.log(date);