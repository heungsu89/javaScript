//destructuring = 펼치기
/*
const rank = ['유나','효연','태연','티파니','수영'];

let [a,b,c,...etc] = rank

console.log(a);
console.log(b);
console.log(c);
console.log(etc);

const woman = {name:'woman',age :30, addr : '서울' , pass : false};
// let name = '태연', - 상단에서 해상 key 값의 변수가 있다면 사용x
const {name,age,...info} = woman;
const {tel} = woman;


    let name = woman.name;
    let age = woman.age;


console.log(name);
console.log(age);
console.log(info); //남은 정보가 객체 형태로
console.log(tel); // 없는 key값을 넣으면 undefined가 된다.

*/
const macBook = {
    title : '맥북 프로 16형',
    price : 300,
    memory : '16g',
    storage : '1TB'
}

// macBook title의 프로퍼티 값을 뽑아서

// key에 할당 => key 값이 된다
let pick = prompt('1) 제품명 , 2)가격, 3)메모리, 4)용량');
let propoertyName = '';

const propertyMap = {
    1 : 'title',
    2 :'price',
    3 :'memory',
    4:'storage'
}
// 문제 :  없는 키 값이 들어오면 반환되는 값은 무엇일까?
// 객체 : 없는 키값, 배열 - 없는 인덱스 번호 호출 - undefined
// 제대로 입력하면 - 
// 1)값이 나옴  = true, 없으면 undefined = false
// 2)그래서 값이 있으면 반환값을 넣어주고 끝남(다음 항으로 넘어가지 않음)
// 없으면 다음 당르ㅗ 넘어가서 ''을 반환하게 됨;
// 3)undefined에 연산을 시도하면 - NaN값이 반환됨
// 4) ! = not 연산 / true->flase, false -> true;

let {title : productName, price: pay} = mecBook;

// console.log(productName,pay)


if(pick * 1 || 0 && !isNaN(pick *1)){
    // 공백, 문자열 입력한 경우
    alert('잘못 입력 하셨습니다.');
}else{
    propoertyName = propertyMap[pick*1] || '';
    const {[propoertyName] : key} = macBook;
    console.log(key+' 찍힘');
}



// switch(pick*1){ // *1을 하면 숫자형으로 바꿔 줌
//     case 1:
//         propoertyName = 'title';
//         break;
//     case 2:
//         propoertyName = 'price';
//         break;
//     case 3:
//         propoertyName = 'memory';
//         break;
//     case 4:
//         propoertyName = 'storage';
//         break;
//     default :
//         alert('에러');
// }


// const { title : key, ...rest} = macBook;


// const propoertyName = 'title'; //내가 뽑을 프로퍼티를 변수에 저장


//destructuring = 펼치기

