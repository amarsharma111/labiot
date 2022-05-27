

  

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();
      let name = document.querySelector("#name")
      let email = document.querySelector("#emailid") 
      let phonenumber = document.querySelector("#pnumber")
      let textmsg = document.querySelector("#messagetext") 

      console.log(name, email, phonenumber, textmsg);
  }

  
