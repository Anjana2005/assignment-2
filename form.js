var em=document.getElementById("email");
var pwd=document.getElementById("password");
var phn=document.getElementById("phone number");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
var err3=document.getElementById("err3");

var regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
   if(em.value.trim()==""){
    err1.innerText="field cannot be filled";
    err2.innerText="field cannot be filled";
    err3.innerText="field cannot be filled";
    em.style.border="2px solid red";
    return false
   }
  else  if(em.test(em.value)){
    err1.innerText="please enter proper email";
    em.style.border="2px solid red";
    return false;
   }
  else{
     err1.innerText="please enter valid password";
      em.style.border="2px solid green";
    return true;
   }
}