
const userInfo = {
    id : 'korea', 
    pw : 'abcd1234@@' // 영어소문자, 숫자, 특수문자로 이루어진 비밀번호로 설정
}

// 문제2) 필요한 요소를 선택해서 변수에 담아 놓기
let boxColor = document.getElementsByClassName('boxColor');
let inputBox = document.getElementsByClassName('inputBox');

let userId = document.getElementById("id");
let userPw = document.getElementById("pw");
let loginBtn = document.getElementById("loginBtn");
let errorMessage = document.getElementsByClassName("errorMessage")[0];

// 정규식 : 영어소문자, 숫자, 특수문자가 1개 이상 반드시 포함되어야 한다
const regex = /(?=.*[a-z])(?=.*[\d])(?=.*[@$!%*?&]])[a-z\d@$!%*?&]+/;


for(let i = 0; i < boxColor.length; i++){

    inputBox[i].addEventListener('click', function(){
        boxColor[i].classList.add('label_size_change','boder_change');
    });
    
    inputBox[i].addEventListener('blur', function(){
        if(this.value == ''){
            boxColor[i].classList.remove('label_size_change');
        }
        boxColor[i].classList.remove('boder_change');
    });
    
}

// 문제3. loginBtn을 클릭하면 아래의 동작 수행
// 1) addEventListener 이용하시오
// 2) 태그에 이벤트 연결하는 방법

loginBtn.addEventListener('click', function(){

    // 문제4) userId, userPW 값 검사
    // - id, pw 둘 다 입력 안 된 경우 - 메시지 처리
    // - id 입력 안 된 경우
    // - pw 입력 안 된 경우
    // - pw가 4~12글자가 아니면- 아이디는 4~12글자 입니다.
    // - pw가 숫자, 문자, 특수문자 포함 각각 반드시 1개 이상 포함 - 정규식 활용
    
    let idValue = userId.value;
    let pwValue = userPw.value;
    
    if(idValue =="" &&  pwValue==""){
        errorMessage.innerText = "ID와 PW를 입력해주세요";

    }else if(idValue ==""){
        errorMessage.innerText = "ID를 입력해주세요";

    }else if(pwValue ==""){
        errorMessage.innerText = "password를 입력해주세요";

    }else if(idValue.length < 4  || idValue.length > 12){
        errorMessage.innerText = "아이디는 4~12글자 입니다.";

    }else if(!regex.test(pwValue)){ // 정규식 검사 - 폼에서 입력 받은 값을 검사
        errorMessage.innerText = "비밀번호는 영문소문자, 숫자, 특수문자로 구성되어 있습니다.";
    }
    else{ // 모두 입력된 상태


        // 문제5. 객체에 담긴 userId, userPw가 일치하는 검사
        // 입력받은 내용과 일치하면 - alert('로그인성공')
        // 실패하면  - 아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 확인해주세요.
        if(idValue == userInfo.id && pwValue == userInfo.pw){
            errorMessage.innerText ="";
            userId.value = "";
            userPw.value = ""
            alert('로그인 성공');
        }else{
            errorMessage.innerText = "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 확인해주세요.";
            userId.value = "";
            userPw.value = "";
        }

    }
    
});
