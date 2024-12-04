//1. 데이터 내보내기, 가져오기 - export, import
import data from './board.js';

//2.DOM - Document Object Model

/*
단수로 사용하는 것은 인덱스 x
    ㄴ getElementById
    ㄴ querySelector (여러개 존재할 경우, 첫번째 것만 선택하옴)

복수로 선택한은 것은
    ㄴ 반드시 접근 할때, 인덱스번호를 써줘야 한다.
    ㄴ 유사배열(배열 기능 사용 제한적) -> 필요에 따라 배열로 변경하여 사용
        ㄴ HTMLCollection : 동적(추가되면 자동으로 업데이트) - getElementByClassName, ~Tag
        ㄴ NodeList : 정적(가져온 시점에서 계속 고정, 업데이트 x) - querySelectAll
    
        getElement~~ : 기호 없음, <<이름만!>> 써 준다
        querySelector~~ : css 선택자로 써준다
*/
let id = document.getElementById('board'); //한개
let tag = document.getElementsByTagName('li'); // 여러개
let className = document.getElementsByClassName('wrap'); //여러개
let qs = document.querySelector('.wrap');
let qsAll = document.querySelectorAll('.wrap');
let wrap_class = document.querySelector('.wrap');
const board = document.querySelector('.board_list_wrap tbody');
/*
태그, 클래스, 아이디 모두 선택 
- css 선택자와 동일하게 기록하면 된다.(기호 포함)
*/



// 3.자바스크립트로 태그 생성/추가하기
const row = document.createElement('tr');
// 넘버, 제목, 작성자, 조회수, 작성일
const numberCell = document.createElement('td');
const titleCell = document.createElement('td');
const writerCell = document.createElement('td');
const viewCountCell = document.createElement('td');
const reiDateCell = document.createElement('td');

// innerHTML, innerText, textContent
numberCell.textContent = 1;
titleCell.textContent = '강아지가 자꾸 기침해요';
writerCell.textContent = '사랑이견주';
viewCountCell.textContent = '150';
reiDateCell.textContent = '2024-12-04';

// 3) html 안에 추가
// tr에 td 추가

row.appendChild(numberCell);
row.appendChild(titleCell);
row.appendChild(writerCell);
row.appendChild(viewCountCell);
row.appendChild(reiDateCell);

// tbody
board.appendChild(row);

/*가져온 데이터 반복 작업
객체의 프로퍼티를 순회하는 반복문을 사용하여
객체내용을 출력해보시오.

문제2. - 각각 출력
el을 사용하지 않고 데이터 출력할 수 있도록 구문 수정
*/



data.forEach(el=>{
    const el_tr = document.createElement('tr');
    for(let key in el){
        el_tr.innerHTML += `<td>${el[key]}</td>`;
    }
    board.appendChild(el_tr);
});

/*
data.forEach(el=>{
    const el_tr = document.createElement('tr');
    const {id,title,writer,viewCount,regidate} = el;
    
});
*/