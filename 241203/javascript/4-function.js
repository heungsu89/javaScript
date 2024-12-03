// 기본형
// 어느 곳에서도 호출이 가능하다
function 함수1(){
    console.log('함수');
}

함수1();



// 함수2 유형 - 함수 표현식(Function Expression)
// - 반드시 선언을 먼저 해주고, 호출해야함.
// - 변수에 익명함수를 매칭한다.
// - 가독성을 높이는데 도움

const 함수2 = function(){
    console.log('함수', '유형')
};

함수2();

//즉시 실행 함수 - 이름이 없어도 실행 가능
(function(){
    console.log('즉시 실행')
})();

let n = (function(x,y){
    return x+y;
})(3,5)

console.log(n);

(function init(){

}());


(()=>{

})();

// 객체 안에 함수가 들어 갈 수 있음 (메서드)

const calculator ={
    var : 1.0,
    add : function(x,y){
        return x + y;
    },
    minus : function(x,y){
        return x - y;
    }
};

console.log(calculator.add(30,50),calculator.minus(40,20));

const calc = ['Korea It', 2030,function(x,y){
    return x + y;
}];

console.log(calc[2](3,4));