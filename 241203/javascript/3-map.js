const fruits = ['apple','banana','orange'];

// 기본형식
// let 변수명 = 배열명.map((el)=>{});

console.log(fruits[0].toUpperCase());

let newFruits = fruits.map( e => e.toUpperCase());

console.log(newFruits);


const users = [
    {name:'Alice',age:30},
    {name:'Bob',age:25},
    {name:'Charlie',age:35}
];

//const user = [{},{},{}]

let userName = users.map(e=>e.name);

console.log(userName);


let userAge = users.map(e=>e.age);

//유저의 나이만 새로운 배열로 추출하고, 나이 평균 구하기

let total = 0;
userAge.forEach(e=> total += e);
let avg = total / userAge.length

console.log(avg);

// 각각의 배열을 합쳐서 새로운 객체 만들기

const names = ['Alice','Bob','Charlie'];
const age = [30,27,39]
const obj = names.map(( num,i) =>{
    return {name : names[i], age : age[i]};
});

console.log(obj);



const person = {name:'anne',age:'27'};

person['adderss'] = '서울';

console.log(person);


const adderList = ['서울','경기','인천'];
// addrList의 값을
// user의 각 객체에 addr 키 값으로 추가하시오.(순서대로)
// --> 새로운 리스트 생성 (newUser);

let newUser = users.map((e,i)=>{
    e['addr'] = adderList[i];
    return e
});

console.log(newUser);

