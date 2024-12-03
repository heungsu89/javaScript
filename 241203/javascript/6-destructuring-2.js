const macBook = {
    title : '맥북 프로 16형',
    price : 300,
    memory : '16g',
    storage : '1TB'
}


function printSummery(obj){
    //객체명을 안 붙이고 사용
    const {title,price,memory,storage} = obj;

    console.log( price * (1-0.1));
    console.log(title);
}

// 매개변수 단계에서 프로터피 추출
function printInfo({title,price,memory,storage}){
    //객체명을 안 붙이고 사용
    console.log( price * (1-0.1));
    console.log(title);
}
printSummery(macBook);
printInfo(macBook);

// 클릭 동작할때 -- 실행해줘
// 매개변수에 - 이벤트가 발생한 것에 대란 정보를 담고
// e.target - 이벤트가 발생한 html 태그 요소를 가리킴


// target 프로퍼티만 추출해서, 프로퍼티 이름으로 실행
const btn = document.getElementById('btn');
btn.addEventListener('click',({target})=>{
    console.log(target);
});

// 매개변수에 {} 붙는 것은 - 프로퍼티 추출
// {} 우무 여부를 잘 체크해라