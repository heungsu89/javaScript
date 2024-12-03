// console.log(this);


// 일반함수 - this - 나를 호출하는 영역을 가리킴
// 화살표 함수 - this - windows 임

function getFull(){
    console.log(this);
    //나를 호출하는 영역을 가리킴- 객체에서 호출하면 객체가 this.
}


const getFullName =()=>{
    //화살표 함수 안에서는 this는 window(=브라우저를 가리킴)
    console.log(this)
    return  `${this.firstName}${this.lastName}`;
}


const user = {
    firstName : 'Tess',
    lastName : 'jang',
    getFullName : getFullName
}

const admin = {
    firstName : '몽룡',
    lastName : '이',
    getFullName : getFullName

}

console.log(user.getFullName());
console.log(admin.getFullName());

// 객체 안에 함수를 만들때, 일반 함수 or 화살표 함수?
// ㄴ 객체 안에 변수/함수 호출을 하니까 ... 일반 함수