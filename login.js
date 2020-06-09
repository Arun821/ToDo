
$(document).ready(function(){
    $('#bt').click(function(){
        var name = $("#uname").val();
        var pasword = $("#pass").val();

        if(name!=="Admin" && pasword!=="12345"){
            alert("Invalid Enrty");
        }
        else{
            location.assign("home.html");
        }
    });
});