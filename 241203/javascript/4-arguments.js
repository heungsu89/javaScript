function printArgs(a,b,c){
    // console.log(a);
    // console.log(b);
    // console.log(c);

    // 변수, 함수 이름을  argments로 작명하면 안됨
    for(const arg of arguments){
        console.log(arg);
    }
    console.log('-----------------');
}

printArgs('john','alice','aderw');
printArgs('captain');
printArgs('jayden');
printArgs('suri','jack','joy','noel');

function firstWord(){
    let word = '';

    for(const arg of arguments){
        word += arg[0];
    }
    console.log(word)
    // let el = document.createElement( "div")
    //     el.innerHTML = word;
    // document.body.appendChild(el);

}

firstWord('얼어','죽어도','아이스 아메리카노');
firstWord('분위기','좋은','카페');

function printRank(first,second,...others){
    console.log('레이스 최종 결과');
    console.log(`${first}}`);
    console.log(`${second}`);
    for(const arg of arguments){
        console.log(`${arg}`);
    }
}

printRank('phil','Won','Emma','Min');
