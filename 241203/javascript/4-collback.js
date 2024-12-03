// 값으로 함수
// 매개변수로 - 함수의 이름을 받아서 함수 안에서 호출하여 실행 하능
// 함수 안에 함수가 들어간 것
// 함수가 먼저 실행되고 -> 매개변수로 받은 함수가 실행(순서가 정해짐)
// 값으로서의 함수 = 콜백함수 이것의 리

function makeQuiz(quiz, answer, success,fil){

    if(prompt(quiz) == answer){
        console.log(success());
    }else{
        console.log(fil());
    };
}

function getSuccess(){
    return '정답';
};

function getFail(){
    return '오답';
};

const question = '5+3 = ?';

// makeQuiz(question,'8',getSuccess,getFail);s

function getPrintHi(){
    return function(){
        console.log('안녕하냐');
        // 고차 함수 :  Higer order Functiion
    }
}

// 함수의 표현식 : const 함수 = function(){}

// 1) 일급함수
getPrintHi()();

 //활호 꼭 써워야 함

/*
2) 고차 함수 - 변수에 한번 저장해서 사용
    ㄴ getPrintHi()의 리턴값인 함수를 sayHi 저장
    const sayHi = getPrintHi();
*/