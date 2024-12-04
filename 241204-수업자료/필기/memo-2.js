// 1. 데이터 내보내기, 가져오기 - export, import
import data from '../js/board.js';

// 2. DOM요소 선택( Document Object Model)
/* 

  단수로 사용하는 것은 인덱스x
    ㄴ getElementById
    ㄴ querySelector (여러개 존재할 경우, 첫번째 것만 선택해옴)

  복수로 선택하는 것은
    ㄴ 반드시 접근할 때, 인덱스번호를 써줘야 한다.
    ㄴ 유사배열(배열 기능 사용 제한적) -> 필요에 따라 배열로 변경하여 사용
        ㄴ HTML Collection : 동적(추가되면 자동 업데이트) - getElementByClassName, ~Tag
        ㄴ NodeList : 정적 (가져온 시점에서 계속 고정, 업데이트x) - querySelectAll
  
  * 주의사항
  - getElement~~ : 기호 없음, <<이름만!>> 써 준다
  - querySelector~~~ : css 선택자로 써준다
*/

let id = document.getElementById('board'); // 단수
let tag = document.getElementsByTagName('li'); // 복수
let wrap_class = document.getElementsByClassName('wrap'); // 복수

// 태그, 클래스, 아이디 모두 선택 가능
// css 선택자 기록(기호 포함)
let qs = document.querySelector('.wrap'); // 단수
let wrap_qsAll = document.querySelectorAll('.wrap'); // 복수

for(let i = 0; i < tag.length; i++){
  tag[i].style.color='red';
  tag[i].style.fontSize = '24px';
}

console.log(wrap_class)
console.log(wrap_qsAll)

id.style.color="red";


// 3. 자바스크립트로 태그 생성/추가하기

// 1) 생성
// 행 -> 넘버, 제목, 작성자, 조회수, 작성일
const board = document.querySelector('.board_list_wrap tbody');
const row = document.createElement('tr');
const numberCell = document.createElement('td');
const titleCell = document.createElement('td');
const writerCell = document.createElement('td');
const viewCountCell = document.createElement('td');
const regiDateCell = document.createElement('td'); 

// 2) 내용 설정
// innerHTML, innerText, textContent
numberCell.textContent = 1;
titleCell.textContent = "강아지가 자꾸 기침해요";
writerCell.textContent = "사랑이견주";
viewCountCell.textContent = "150";
regiDateCell.textContent = "2024-12-04";

// 3) html 안에 추가
// td -> tr 추가
row.appendChild(numberCell);
row.appendChild(titleCell);
row.appendChild(writerCell);
row.appendChild(viewCountCell);
row.appendChild(regiDateCell);

// tr -> tbody추가
board.appendChild(row); // 자식의 마지막 요소로 추가



// 4. 가져온 데이터 반복작업
/* 
** el에서 받아온 데이터는 객체임

문제1. 
객체의 프로퍼티를 순회하는 반복문을 사용하여
객체의 내용을 출력해 보시오.


문제 2.  - 각각 출력
 el을 사용하지 않고 데이터 출력할 수 있도록 구문 수정
 어제 마지막 교시에 배웠던 내용 참고
 */

 /*
data.forEach( el =>{
  // destructuring = 구조분해
  // { key } = 객체
  // { key : 변수명 } = 객체
  const {id : no, title, writer, viewCount, regidate} = el; 
  
  console.log(no)
  console.log(title)
  console.log(writer)
  console.log(viewCount)
  console.log(regidate)

 
  //for (let key in el){
  //  console.log(el[key])
  //}  
})

*/