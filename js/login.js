function openWindow(){
    let options = 'width=700, height=800, top=50, left=50'

    window.open('find.html','_blank',options)

};


function check(){
    let id = document.querySelector("#id");
    let pw = document.querySelector("#password");
    let agree = document.querySelector("#agree");

    //정규식
    let regIdPw = /^[a-z0-9]{4,12}$/;

    if(id.value == ""){
        alert("아이디를 입력하세요.")
        id.focus();
        return false;
    }
    //아이디 조건 확인(영어 소문자, 숫자
    else if(!regIdPw.test(id.value)){
        alert("4~12자 영문 소문자와 숫자만 입력 가능합니다")
    }

    if(pw.value == ""){
        alert("비밀번호를 입력해주세요");
        pw.focus();
        return false;
    }
    else if(!regIdPw.test(pw.value)){
        alert("영문 소문자, 숫자를 포함하여 4~12자로 작성해주세요.")
        pw.focus();
        return false;
    }
    

};//check END
