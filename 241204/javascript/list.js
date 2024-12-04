
import data from './board.js';

const board = document.querySelector('.board_list_wrap tbody');

let filter_data = [...data];


function renderinData(data){
    board.innerHTML ='';
     if(data.length > 0){
        data.forEach(el=>{
            const {id:no,title,writer,viewCount,regidate} = el
            const el_tr = document.createElement('tr');
            for(let key in el){
                if(viewCount > 100){
                    el_tr.classList.add('hot');
                }
                 el_tr.innerHTML += `<td>${key == 'regidate' ? el[key].split('T')[0] : el[key]}</td>`;
            }
            board.appendChild(el_tr);
        });
     }else{
        const el_tr = document.createElement('tr');
        board.innerHTML = `<tr><td colspan = "5">검색된 결과가 없습니다.</td></tr>`;
     };
0}

(function init(){
    renderinData(data);
})(data);




// 검색하는 영역에 폼 태그 있음
// 1) form 가저오기 2) 검색어 입혁하는 칸 - 2가지 요소 가져오기
// id를 이용하여 요소를 가져오고
// searchForm 변수에 담으시오.

const searchForm = document.getElementById('search_form');
const searchKeyWord = document.getElementById('search_word');

searchForm.addEventListener('submit',(e)=>{ // 콜백
    e.preventDefault(); // 해당 이벤트의 기본 기능을 막겠다
    const word =  searchKeyWord.value;
    const f_val = document.querySelector('#search_form option:checked').value;

    // 조건에 일치하는 데이터만 새로 생성
    // 프로퍼티 사용하기 : item => item.title / item => item[title] / ({title}) => title
        const filter = data.filter(item => item[f_val].includes(word));
        filter_data = filter
        renderinData(filter);
});


const sort_btn = document.querySelector('.sort_btn');

let i = false;
sort_btn.addEventListener('click',()=>{
    if(i == false){
        renderinData(filter_data.sort((a, b) => a.viewCount - b.viewCount));
        i = true;
    }else{
        renderinData(filter_data.sort((a, b) => b.viewCount - a.viewCount));
        i = false;
    }
});




//JAVA
/*
 람다식 - 배열.메서드(()=>{});
 forEach : 갯수만 반복 - 원하는 거 실행
 map : 데이터를 가공해서, 새로운 배열 생성 -> 결과 값 생성
 filter : 조선에 맞는 것만 추출
 sorted : 기준을 설정, 정렬

*/