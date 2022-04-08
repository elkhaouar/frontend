var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Administrateur" && password == "Admin123"){

   let myWindow = window.location = "index.html"; // Redirecting to other page.
return false;
}
if ( username == "User" && password == "User123"){

   let myWindow = window.location = "user.html"; // Redirecting to other page.
return false;
}

   else{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
   document.getElementById("username").disabled = true;
   document.getElementById("password").disabled = true;
   document.getElementById("submit").disabled = true;
   document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if(e.keyCode == 116){
        e.preventDefault();
    }
});
return false;
}
}
}




 