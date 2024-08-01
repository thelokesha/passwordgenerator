function copy(){
  
  var limit = document.getElementById("length").value;
  if(limit === '' || limit===0 ){
    alert("select the lenght or type of the password");
    document.getElementById("password").style.visibility="hidden";
    document.getElementById("result").style.visibility="hidden";
  }
  document.getElementById("password").style.visibility="visible";
  document.getElementById("result").style.visibility="visible";
  if(document.getElementById("weak").checked && limit>0){
    var password;
    var weakchars="1234567890qwertyuiopasdfghjklzxcvbnm";
    var password='';
    for(let i=0;i<limit;i++){
        var random = Math.floor((Math.random()*35)+1);
        password +=  weakchars[random];
    }
    document.getElementById("password").innerHTML=password;
  }
  else if(document.getElementById("medium").checked){
    var password;
    var mediumchars="1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var password='';
    for(let i=0;i<limit;i++){
        var random = Math.floor((Math.random()*61)+1);
        password +=  mediumchars[random];
    }
    document.getElementById("password").innerHTML=password;
  }
  else if(document.getElementById("strong").checked){
    var password;
    var strongchars="1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
    var password='';
    for(let i=0;i<limit;i++){
        var random = Math.floor((Math.random()*93)+1);
        password +=  strongchars[random];
    }
    document.getElementById("password").innerHTML=password;
  }
  else{
    document.getElementById("password").style.visibility="hidden";
  document.getElementById("result").style.visibility="hidden";
  }
}
