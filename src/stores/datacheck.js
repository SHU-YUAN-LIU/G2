export function addlistener() {
    const registerform = document.getElementById('registerform');
    // if (loginform) {
        registerform.addEventListener('input', function (e) {
            handleInputChange(e.target);
        });
    // }
}



function handleInputChange(inputElement) {
    if (inputElement.id == 'email') {
        checkemail(inputElement);  
    }
    if (inputElement.id == 'name') {
        checkname(inputElement);  
    }
    if (inputElement.id == 'phone') {
        checkphone(inputElement);  
    }
    if(inputElement.id == 'psw'){
        checkpsw(inputElement);
    }
    if(inputElement.id=='date'){
        checkdate(inputElement);
    }
}

function checkemail(inputElement){
    let email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if(!inputElement.value.match(email)){
        document.getElementById('emailerror').innerHTML = 'email格式錯誤'
    }else{
        document.getElementById('emailerror').innerHTML = ''
    }
}

function checkname(inputElement){
    let num = /[0-9]/
    if(inputElement.value.length==0){
        document.getElementById('nameerror').innerHTML ='姓名不可為空';
    }else if(num.test(inputElement.value)){
        document.getElementById('nameerror').innerHTML ='姓名不可有數字';
    }else{
        document.getElementById('nameerror').innerHTML ='';
    }
}

function checkphone(inputElement){
    let phone = /^(09)[0-9]{8}$/
    if(!inputElement.value.match(phone)){
        document.getElementById("phoneerror").innerHTML = '非手機號碼';
    }else{
        document.getElementById('phoneerror').innerHTML ='';
    }
}

function checkpsw(inputElement){
    let psw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
    if(!inputElement.value.match(psw)){
        document.getElementById("pswerror").innerHTML = '密碼格式錯誤(6-18位包含大小寫英文和數字)';
    }else{
        document.getElementById("pswerror").innerHTML = '';
    }
}

function checkdate(inputElement){
    console.log(inputElement.value);
    let selectDate = new Date(inputElement.value);
    let today = new Date();
    if(today<selectDate){
        document.getElementById("dateerror").innerHTML = '出生日期錯誤';
    }else{
        document.getElementById("dateerror").innerHTML = '';
    }

}