var content= document.getElementsByTagName("main")[0];
var button= document.getElementById("show-more");

button.onclick= function(){
    if(content.className== "open"){
        // Collapse Page
        content.className="";
        button.innerHTML="SHOW MORE";
    } else{ 
        //Open Page
        content.className= "open";
        button.innerHTML="SHOW LESS";
    };
};