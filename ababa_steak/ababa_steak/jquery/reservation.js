var username;
var userphone;
var userperson

function getDOM(){
    username = document.getElementById("username");
    userphone = document.getElementById("userphone");
    userperson = document.getElementById("userperson");
}

function validate() {
    getDOM();
    if(username == ""){
        document.getElementById("error_message").innerHTML
        = "<b>username can't be empty</b>";
        return false;
    }
}