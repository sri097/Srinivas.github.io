var validate = ()=>
{
     var fname = document.getElementById("fname").value 
     var lname = document.getElementById("lname").value

     if (fname.length==0)
      {
        document.getElementById("fnamemsg").innerHTML = 
        "First Name shd not be Empty"
        return false
                 
     }

     else if (fname.length<3)
     {
         document.getElementById("fnamemsg").innerHTML = 
         "First Name should be atleast three character "
       return false
        
     }

     else if (fname.length>15)
     {
         document.getElementById("fnamemsg").innerHTML=
         "First Name Exceeds 15 Characters"
         return false
     }

      if(lname.length==0)
     {
        document.getElementById("lnamemsg").innerHTML = 
        "Last Name shd not be Empty"
        return false

     }

     else if(lname.length>15)
     {
         document.getElementById("lnamemsg").innerHTML=
         "Last Name Exceeds 15 Characters"
         return false
     }

     var phoneno = document.getElementById("phoneno").value
     var rxphone = /^[6-9]{1}[0-9]{9}$/.test(phoneno)
     if(rxphone == false){
       document.getElementById("phonemsg").innerHTML =
       "Invalid Phone No "
       return false
     }

     var email = document.getElementById("email").value
     var rxemail = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(email)
     if(rxemail == false){
       document.getElementById("emailmsg").innerHTML=
       "Enter a valid email "
       return false
     }

     var password = document.getElementById("password").value
     var rxpassword= /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
     if(rxpassword == false){
       document.getElementById("passwordmsg").innerHTML=
       "password should contain atleast one number and one special character"
       
       alert("password should contain atleast one number and one special character");

       return false
     }

     var cpassword = document.getElementById("cpassword").value
     if(cpassword != password){
       alert("password mismatch")
       document.getElementById("cpasswordmsg").innerHTML="password mismatch"
       return false;
     }
}



     

   
     




    