
// default Parameter
// 호출 했을때 인수값을 전달하지 않으면 기본값으로 설정된다.
// 인수 값은 반드시 순서대로 매개변수에 들어간다.

function greeting(name = '홍길동', interest = '뭘까요'){
    console.log(`안녕 ${name}님`);
    console.log(`내 관심사는 ${interest}`);
}

greeting('원빈','축구');  // 인수, 인가, argments. args

function defaultTest(x,y = +3){
    console.log(`x : ${x}`,`y : ${y}`)
}

defaultTest(3,5);
defaultTest(2); // y의 기본값 x+3, 2+3 = <5>출력