
    function validateemail() {
  	var x = document.myform.email.value ;
  	var atposition = x.indexOf("@");
  	var dotposition = x.lastIndexOf(".");

    if(atposition <1 || dotposition < atposition+2 || dotposition +2 >= x.length)
    {
    	alert("please enter a valide email addreass");
    }
     return false;
  }


     function validateform() {
  
     var password= document.myform.password.value;
    
     if(password.length<6){
      alert("Password must be six character long");
      return false;

     }
}

function matchpass(){

    var firstpassword = document. myform. password.value;
    var secondpassword = document. myform. conformpassword.value;

    if(firstpassword == secondpassword){
      return true;
    }
    else{
      alert("password must be same");
      return false;
    }
  }


  function numbervalidate(){
    var num = document.myform.num.value;
    if (isNaN(num)) {
      document.getElementById('numloc').innerHTML  = alert("enter numerical value only");
      return false;

    }
    else{
      return true;
    }
  }
  