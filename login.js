function logi(callback){
    var username = document.getElementById('uname').value;
    var upassword = document.getElementById('pass').value;
    console.log(username);
    console.log(upassword);
    if(username=="Admin" && upassword=="12345"){
        callback();  
    }
    else{
        alert("invalid input");
    }
}
function page(){
    location.assign("home.html");
}
function login(){
    logi(page);
}
