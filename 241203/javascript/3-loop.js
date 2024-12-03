//리터럴객체
let man = {
    name : 'john',
    age : 30,
    addr : 'seoul'
};


let arr = [1,2,3];


/** 반복분 */
/*
let i=0

while(i<3){
    console.log(i++);
}
*/

// 인덱스 번호로 직접 값에 접근
for(let i = 0;i < 3;i++){
    console.log(i);
};

// 각 값을 num에 옮겨놓고 사용
// 자바에서 향샹된 for문과 비슷함
for(let num of arr){
    console.log(num);
};


// 객체 프로퍼티 순회(반복)
// 객체의 값 변경 가능
for(let key in man){
    console.log(man[key]);
};


// 배열.forEach((매겨면수)=>{실행문})
// 배열의 갯수만큼 반복한다
arr.forEach((el,index,array)=>{
    console.log(el,index,array)
});


// 요소, 인덱스, 전체배열
let newArr = arr.map((el,index,arr)=>{
    console.log(arr)
    return el * 10;
});

console.log(newArr)

// 반복을 돌면서 arr의 값을 변경해야 할 경우?
// 더 적압한 반복문은?
/*

1

1) 기본 for
2) for ~ in
3) for ~ of

*/