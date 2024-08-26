function validateform()
{
   var name=document.myform.name.value;
   var phone=document.myform.phone.value;
   var email=document.myform.email.value;
   var password=document.myform.password.value; 
   var radio = document.getElementsByName("feed");
   var formValid=false;

   if (name==null || name==""){  
      alert("Please enter your name.");  
      return false;  
      }

   if (email=="")
   {
    alert("Please enter your email.");
    return false;
   } 

   if(email.indexOf("@",0)<0) {
     alert("Please enter your valid e-mail.");
     return false;
   }
   if (password == "") 
   {
      alert("Please enter your password");
       password.focus();
       return false;
   }
   if(password.length!= "")
   {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
        { 
              alert("Password should be atleast 8 characters");
               alert("It should have atleast one uppercase,one special character,numbers");
           return false;
         }       
    }

    if(phone.length!= "")
    {
        var regex= /^(?=.*[0-9])(?=.{10,})/;
        if(regex.test(phone) === false)
        {
            alert("Please Enter the valid Phone Number");
            return false;
        }
    }
    
    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
    alert("Make sure you have entered all the fields.");
    return formValid;
  }
        
}