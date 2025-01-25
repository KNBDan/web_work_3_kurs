const enterButton = document.getElementById("enter_but");
const inputLogin = document.getElementById("input_login");
const inputPassword = document.getElementById("input_password");
const errorTetxMessage =  document.getElementById("error_text");
enterButton.onclick = tryEnterFunction;

//Активация кнопки "войти"
function tryEnterFunction (){
    errorTetxMessage.textContent = "";

    var login = inputLogin.value;
    var password = inputPassword.value;

    tryEnter(login, password);

    // if (checkLogin(login)){
    //     if (checkPassword(password)){
    //         // alert("вы вошли!")
    //         document.getElementById("error_text").textContent = "";
    //         return
    //     }
    // }
    // setErrorOnElement(enterButton,'animate_wrong_enter')
    //;
    // enterButton.classList.remove('animate_wrong_enter');
    // inputLogin.classList.remove('animate_wrong_enter_text');
    // inputPassword.classList.remove('animate_wrong_enter_text');
    // setTimeout(() => {
    //     enterButton.classList.add("animate_wrong_enter");
    //     inputLogin.classList.add('animate_wrong_enter_text');
    //     inputPassword.classList.add('animate_wrong_enter_text');
    // }, 0);

}
function setErrorOnElement(el, anim){
    el.classList.remove(anim);
    setTimeout(() => {
        el.classList.add(anim);
    },0);
}
function tryEnter(login,password){
    if (isNullEnter(login)) {
        setErrorOnElement(enterButton,'animate_wrong_enter');
        setErrorOnElement(inputLogin,'animate_wrong_enter_text');
        errorTetxMessage.textContent = "Введите логин!";
        return;
    }
    if (isNullEnter(password)) {
        setErrorOnElement(enterButton,'animate_wrong_enter');
        setErrorOnElement(inputPassword,'animate_wrong_enter_text');
        errorTetxMessage.textContent = "Введите пароль!";
        return;
    }
    if (!checkLogin(login)){
        errorTetxMessage.textContent = "Неверный логин и/или пароль!";
        return;
    }
    if (!checkPassword(password)){
        errorTetxMessage.textContent = "Неверный логин и/или пароль";
        return;
    }

}
function isNullEnter(text){
    if (text == ""){
        return true;
    }
    return false;
}
function checkLogin(login){
    if (login == "1"){
        return true;
    }
    setErrorOnElement(enterButton,'animate_wrong_enter');
    setErrorOnElement(inputLogin,'animate_wrong_enter_text');
    setErrorOnElement(inputPassword,'animate_wrong_enter_text');
    return false;
}
function checkPassword(password){
    if (password == "1"){
        return true;
    }
    setErrorOnElement(enterButton,'animate_wrong_enter');
    setErrorOnElement(inputLogin,'animate_wrong_enter_text');
    setErrorOnElement(inputPassword,'animate_wrong_enter_text');
    return false;
}
