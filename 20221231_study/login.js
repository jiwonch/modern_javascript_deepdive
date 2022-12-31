var id_success = "admin";
var pw_success = 12345;

function login(id, pw) {
    if (id == id_success) {
        if (pw == pw_success) {
            alert("로그인에 성공!");
            document.getElementById('id_input').value = '';
            document.getElementById('pw_input').value = '';
        } else {
            alert("로그인에 실패했습니다. \n비밀번호를 다시 입력하세요.");
            document.getElementById('pw_input').value = '';
        }
    } else {
        alert("로그인에 실패했습니다. \n아이디를 확인하세요.");
        document.getElementById('id_input').value = '';
        document.getElementById('pw_input').value = '';
    }
}

$('#login_Btn').click(function () {
    var inputId = document.getElementById('id_input').value;
    var inputPw = document.getElementById('pw_input').value;
    login(inputId, inputPw);
});