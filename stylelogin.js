function validateform() {
	
     var password= document.myform.password.value;

   
     if(password.length<6){
     	alert("Password must be six character long");
     	return false;

     }
}