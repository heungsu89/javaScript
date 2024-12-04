
import data from './board.js';

// 선택
const board = document.querySelector('.board_list_wrap tbody');

const searchForm = document.querySelector('#search_form');

// 초기화 - 함수 - 초기화 용도로 쓰는 함수 -  바로실행함수
// renderingData 함수가 초기에 바로 실행될수 있도록 구문 작성
(
  function init(data) {
    renderingData(data);
  }
)(data);


// 그리는 작업을 - 함수화 시킴 - 호출해야만 실행됨 
// 매개변수에 원하는 데이터를 받아서 그려줄 수 있다.
function renderingData( data ) {
  
  // 초기화
  board.innerHTML = '';

  data.forEach( el =>{
    const {id : no, title, writer, viewCount, regidate} = el;
  
    // 1) 생성
    const row = document.createElement('tr');
    const numberCell = document.createElement('td');
    const titleCell = document.createElement('td');
    const writerCell = document.createElement('td');
    const viewCountCell = document.createElement('td');
    const regiDateCell = document.createElement('td'); 
  
    // 2) 내용 설정
    numberCell.textContent = no;
    titleCell.textContent = title;
    writerCell.textContent = writer;
    viewCountCell.textContent = viewCount;
    regiDateCell.textContent = regidate.split('T')[0]; // 문자열 구분 기호로 분리 (배열)

  
    // ** 기타 옵션 작업
    if(viewCount >= 100){
      row.classList.add('hot'); // 클래스 추가
    }

    // 3) 태그 추가
    row.appendChild(numberCell);
    row.appendChild(titleCell);
    row.appendChild(writerCell);
    row.appendChild(viewCountCell);
    row.appendChild(regiDateCell);


  
    board.appendChild(row); // 자식의 마지막 요소로 추가
  
  })
}



// 검색하기
searchForm.addEventListener('submit', (e)=>{ // 콜백
  // input에 현재 입력된 검색어 가져오기
  e.preventDefault(); // 해당 이벤트의 기본 기능을 막겠다
  const searchWord = document.querySelector('#search_word').value;
  
  // 조건에 일치하는 데이터만 새로 생성  
  // 프로퍼티 사용하기 : item => item.title / item => item[title] / ({title}) => title
  const filteredData = data.filter( item => item.title.includes(searchWord) );
  renderingData(filteredData);

});

