//배열, 객체, 값 쪼개기
/*

    ... : spread

    문자, 배열, 객체와 같이 반복가능한 객체를
    개별요소를 분해 나열

*/

const users = [
    {name:'Alice',age:30},
    {name:'Bob',age:25},
    {name:'Charlie',age:35}
];

// 배열 스프레드 - []
// 객체 스프레드 - {}
const obj1 = {a:1,b:2};
const obj2 = {c:1,d:2};

// 객체 병합 key 값이 달라야함 
const combined_obj = {...obj1, ...obj2};
console.log(combined_obj);

const woman = {name : 'Alice', age : 30};
const newWoman = {...woman,addr : '서울'};

console.log(newWoman);

const newUser = users.map((e)=>{
    return {...e,addr:'서울',pass : false}
});

console.log(newUser);

const arr = [1,2,3,4,5];



// ...:rest (나머지 배열로 받기)
const sum = (a,b,...c) =>{
    return a+b+c
}

console.log(sum(arr)) // a에 arr 들어간다
console.log(sum(...arr)) //a,b,c arr 값이 쪼개져서 들어 간다

const arr01 = [1,2];
const arr02 = [3,4,5];
const combined = [...arr01,...arr02];

//배열을 합쳐서 저장
console.log(combined);

arr[0] = 100;


let copy1 = arr;
// 얕은 복사 - arr 배열의 주소값을 복사
// copy1의 이름으로 arr 접근해서 값을 조작 가능
// copy1, arr 접근하면 같은 곳 접근
let copy2 = [...arr]; // 깊은 복사 - 원본과 별개
console.log(copy1); // 얕은 복사
console.log(copy2); // 깊은 복사



// 과제
// 스프레드 문법 사용한 케이스 별로 - 암기해야 하는 구분 한줄로 정리하기

/*
배열 = []
객체 = {}


내용 / 설명 / 문법
1.함수 매개변수 : arg의 나머지를 저장
매개 변수는 유연하게
function add(a,b,c...){}

2.배열 병합
const arr01 = [1,2];
const arr02 = [3,4,5];
const combined = [...arr01,...arr02];

3.배열 복사 (깊은 복사)
const arr = [1,2,3,4,5];
const copy1 = arr; // 얕은 복사 
let copy2 = [...arr]; // 깊은 복사


4.객체 병합
 - 객체 병합 key 값이 달라야함 
const obj1 = {a:1,b:2};
const obj2 = {c:1,d:2};
const combined_obj = {...obj1, ...obj2};

5.객체 생성
const users = [
    {name:'Alice',age:30},
    {name:'Bob',age:25},
    {name:'Charlie',age:35}
];

const newUser = users.map((e)=>{
    return {...e,addr:'서울',pass : false}
});


 */