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

const woman = {name : 'Alice', age : 30};

const arr = [1,2,3,4,5];


// ...:rest (나머지 배열로 받기)
const sum = (a,b,...c) =>{
    return a+b+c
}

console.log(sum(arr)) // a에 arr 들어간다
console.log(sum(...arr)) //a,b,c arr 값이 쪼개져서 들어 간다


let copy1 = arr;
let copy2 = [...arr];


const arr01 = [1,2];
const arr02 = [3,4,5];
const combined = [...arr01,...arr02];

//배열을 합쳐서 저장
console.log(combined);




arr[0] = 100;

console.log(copy1); // 얕은 복사
console.log(copy2); // 깊은 복사