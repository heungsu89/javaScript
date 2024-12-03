/*
function 함수1(){};

함수1();

let 함수2 = function(){};

함수2();

const 화살표함수=()=>{};

화살표함수();
*/

const sum = (a,b) => a+b;

// 받아온 값으로 객체 생성해서 리턴하기
const getPerson = (name,age)=>({name,age});

console.log(getPerson('홍길동',32))


console.log(sum(3,2))

function nomalFn(){
    console.log(arguments);
}

const arrowFn =()=>{
    console.log(arguments);
}
