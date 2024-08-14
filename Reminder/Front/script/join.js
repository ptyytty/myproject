
function joinLink(){
    location.href = "main.html";
}

function submit(){
    const id = document.getElementById("id").value;
    const pws = document.getElementById("pws").value;

    if(id == "" || pws == ""){
        alert("회원가입을 할 수 없습니다.")
    }else{
        alert("회원가입 성공\n환영합니다!")
        location.replace('mynote.html');
    }
}