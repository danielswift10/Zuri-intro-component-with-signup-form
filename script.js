// let's get all required elements
const form = document.querySelector("form"),
    fField = form.querySelector(".first-name"),
    fInput = fField.querySelector("input"),
    lField = form.querySelector(".last-name"),
    lInput = lField.querySelector("input"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
    if (fInput.value == "") { //if first name input field is empty
        fField.classList.add("shake", "error"); //add the shake effect to the .first-name and give out the error
    }
    if (lInput.value == "") { //if last name input field is empty
        lField.classList.add("shake", "error"); //add the shake effect to the .last-name and give out the error
    }
    if (eInput.value == "") { //if email input field is empty
        eField.classList.add("shake", "error"); //add the shake effect to the .email and give out the error
    }else{
        checkEmail(); //calling checkEmail function
    }
    if (pInput.value == "") { //if password input field is empty
        pField.classList.add("shake", "error"); //add the shake effect to the .password and give out the error
   }
   
   setTimeout(()=>{ //remove shake after 500ms
    fField.classList.remove("shake");
    lField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
   }, 500);
    
   // let's work on the input keyup i.e. as the user enters any thing
   eInput.onkeyup = ()=>{
    checkEmail();//calling checkEmail function  
    
   }

   // let's create a function that checks the email and ppassword before submission
   function checkEmail(){
    let pattern = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/; //pattern to validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched with user entered value
        eField.classList.add("error", "err-1");
        let errorTxt = eField.querySelector(".error-txt");
        // if email is not empty then looks like this is not an email until email adderss is valid
        (eInput.value !== "") ? errorTxt.innerText = "Looks like this is not an email" : errorTxt.innerText = "Email cannot be empty";
    }else{
        eField.classList.remove("error");
        eField.classList.add("err");
    }
   }

     // first name aspect
     fInput.onkeyup = ()=>{
        if(fInput.value == ""){ //if first name is empty
            fField.classList.add("error");
        }else{
            fField.classList.remove("error");
        }
    }

      // last name aspect
   lInput.onkeyup = ()=>{
    if(lInput.value == ""){ //if last name is empty
        lField.classList.add("error");
    }else{
        lField.classList.remove("error");
    }
   }

   // password aspect
   pInput.onkeyup = ()=>{
    if(pInput.value == ""){ //if password is empty
        pField.classList.add("error");
    }else{
        pField.classList.remove("error");
    }
   }

   // let's work on what to do after user filled up correct details
   if (!fField.classList.contains("error") && !lField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")){
    
    window.location.reload();
    console.log("Form Submitted!");
   }
   
}