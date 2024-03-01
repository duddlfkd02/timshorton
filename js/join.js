
$(function(){
    $("#idcheck").on("click",function(e){
        console.log(e);
        e.preventDefault();
        if(timsform.id.value == "qwe"){
            document.querySelector("#display").innerText = "사용중인 아이디입니다."
        }else{
            document.querySelector("#display").innerText = "사용 가능한 아이디입니다."
        }
    })
});//idcheck 중복확인

function check(){
    //변수에 메서드 저장
    let id = document.querySelector("#id");
    let pw = document.querySelector("#password");
    let cpw = document.querySelector("#confirmPassword");
    let uname = document.querySelector("#username");
    let areanum = document.querySelector("#areanum");
    let phone1 = document.querySelector("#number1");
    let phone2 = document.querySelector("#number2");

    //정규식
    //id, pw
    let regIdPw = /^[a-z0-9]{4,12}$/;
    // 이름
    let regName = /^[가-힣a-zA-Z]{2,15}$/;


    if(id.value == ""){
        alert("아이디를 입력하세요.")
        id.focus();
        return false;
    }
    //아이디 조건 확인(영어 소문자, 숫자
    else if(!regIdPw.test(id.value)){
        alert("4~12자 영문 소문자와 숫자만 입력 가능합니다.")
    }

    /*비밀번호, 재확인 유효성 검사 */
    if(pw.value == ""){
        alert("비밀번호를 입력해주세요.");
        pw.focus();
        return false;
    }
    //비밀번호 조건 확인(4~12자 이상, 영어 소문자, 숫자
    else if(!regIdPw.test(pw.value)){
        alert("영문 소문자, 숫자를 포함하여 4~12자로 작성해주세요.")
        pw.focus();
        return false;
    }
    //비밀번호 공란 확인
    if(cpw.value == ""){
        alert("비밀번호를 재확인해주세요.")
        cpw.focus();
        return false;
    }

    //비밀번호, 재확인 동일값 확인
    if(!cpw.value == pw.value){
        alert("비밀번호가 일치하지 않습니다.")
        cpw.focus();
        return false;
    }

    //이름 확인, 한글과 영어만 입력
    if(uname.value == ""){
        alert("이름을 입력해주세요.");
        uname.focus();
        return false;
    }
    else if(!regName.test(uname.value)){
        alert("이름은 2글자 이상, 한글 혹은 영어만 입력 가능합니다.")
        uname.focus();
        return false;
    }

    /*전화번호 유효성 검사*/
    if(areanum.value == ""){
        alert("전화번호를 선택해주세요.");
        areanum.focus();
        return false;
    }

    if(phone1.value == "" || phone2.value == ""){
        alert("전화번호를 입력해주세요.");
        phone1.focus();
        return false;
    }

    if(isNaN(phone1.value) || isNaN(phone2.value)){//isNaN 숫자인지 판별
        alert("전화번호는 숫자만 입력가능합니다.");
        phone1.focus();
        return false;
    }
    
};