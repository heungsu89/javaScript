'use strict'
// var(구ver), let(신 ver), const(상수 = fical)
// 변수의 호이스팅
// 함수의 경우 선언을 뒤에 해도 컴파일 할때, 최상단으로 끌어 올려줌
// var로 선언하면 함수와 같이 선업하기 전에 접근을 시도하면,(내부적으로) 끌어올려짐. undefined 값이 나옴.
// 그래서 오류 상황을 캐치 못할 수 있음

// const (상수=final)
// 암묵적으로 - 대문자, snake 스타일로 작명

var x = 10; 
let y = 20;
let z; // 기본값 undefined
const MAX = 100;

/*
연산자
== : 값 만 비교, 5 == '5' ->true
=== : 값0, 자료형0, 5 ==='5' -> false
!= : 다르다-값0, 자료x : 5 == '5' -> false
!=== : 다르다- 값0, 자료0 : 5 == '5' -> true
*/

console.log("5 == '5'", 5 =='5');
console.log("5 === '5'", 5 === '5'); 
console.log("5 != '5'", 5 != '5');
console.log("5 !== '5'", 5 !== '5');


const add=(x,y)=>{
    return (x == y) ? '맞다' : '아니다';
};

console.log(x,y,z,MAX)


// property vs attribute 차이점 조사하기
// contentText = 보이는 대로 글 반환
// innerHTML = 해당 요소 안에 태그를 넣을 수 있음
// innerTxet = 글


let r = document.getElementById('result');

console.log(r);

r.innerHTML=add(30,40)

let boxList = document.getElementsByClassName('box');

console.log(boxList);

let boxlist1 = document.querySelectorAll('.box');

console.log(boxlist1)

console.log(Object.keys(boxlist1))



/*
자료형 종류
1) 윈시값 :  객체이외의 값
- String : 문자
- Number : 숫자
- Boolen : 논리형, trun, false
    ㄴ false 처리 : 0, false, null, '', undefined
    ㄴ 그 외에는 true
        ㄴ undefined : 변수 초기화x, 매개변수 값x

2) 객체(Object)

* 자료형 체크 : typeof(변수/값)


*/
