
const { MongoClient, ServerApiVersion } = require('mongodb');

async function main(){
    const uri = "mongodb+srv://Karz:LT5NNdb3kbVZBqS5@karz.ukzewkf.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();
    }
    catch (e){
        console.error(e);
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);



function validate_signup(){

    //email and password input
    const email = document.getElementsByClassName('email_input');
    const password = document.getElementsByClassName('password_input');
    const re_password = document.getElementsByClassName('re_password_input');

    //email and password check
    let valid_email = check_email(email[0]);
    let valid_password = check_password(password[0]);
    let valid_re_password = check_password(re_password[0]);


    if((valid_email && valid_password) === true){
        if(valid_password === valid_re_password){
            alert("Account Created Successfully!");
        }
        else{
            alert("Account Creation Failed!");
        }
    }
    else{
        alert("Account Creation Failed!");
    }

}


function validate_Account(){

    //email and password input
    const email = document.getElementsByClassName('login-email-input');
    const password = document.getElementsByClassName('login-password-input');

    //email and password check
    let valid_email = check_email(email[0]);
    let valid_password = check_password(password[0]);


    if((valid_email && valid_password) === true){
        alert("Login Successfully!")
    }
    else{
        alert("Login Failed!")
    }

}


function oneTimeCode(){
    let code = 321543;


    //email and password input
    const onetime_email = document.getElementsByClassName('reset-email-label');
    const onetime_code = document.getElementsByClassName('onetime-code-input');
    const onetime_password = document.getElementsByClassName('new-password-input');
    const onetime_rePassword = document.getElementsByClassName('re-password-reset-input');

    //email and password check
    let reset_email = check_email(onetime_email[0]);
    let onetimeCode = checkCode(onetime_code[0]);
    let valid_password = check_password(onetime_password[0]);
    let valid_re_password = check_password(onetime_rePassword[0]);


    if((reset_email && valid_password && valid_re_password) === true){
        if(onetimeCode === 321543){
            alert("Account Reset Successfully!");
        }
        else{
            alert("Account Reset Failed!");
        }
    }
    else{
        alert("Account Creation Failed!");
    }
}


//checks email
function check_email(email_val){

    //email pattern using regex
    const email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid;

    if(email_val.value.match(email_format)) {
        isValid = true;
    }
    else {
        alert("You have entered an invalid email address!");
        isValid = false;
    }

    return isValid;
}

//checks password
function check_password(password_val){

    const password_format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$/;

    if(password_val.value.match(password_format)){
        return true;
    }
    else {
        alert('Invalid password!')
        return false;
    }

}

function checkCode(re_code){
    return 321543;
}