
var xhr = new XMLHttpRequest();
xhr.open("get","https://jsonplaceholder.typicode.com/todos" , true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            var toDoList = JSON.parse(xhr.responseText);
            var list ='';
            var check = '';
            toDoList.forEach(element=> {
                check = `${element.completed}`
                
                if(check==="false"){
                    list+=`<input type="checkbox" id="ch1">${element.title}<br><br>`
                }
                else{
                    list+=`<input type="checkbox" checked disabled>${element.title}<br><br>`
                    
                }           
            });
            document.getElementById('ul').innerHTML = list;  
            document.getElementById('ul').style.marginTop = "20px";
        }
    }
}