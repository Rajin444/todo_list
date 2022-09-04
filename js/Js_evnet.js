const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username == ""){
        alert("Please write your name");
    }else if(username.length > 15 ){
        //username.length = 변수 username의 길이를 지칭
        alert("your name is too long.")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);