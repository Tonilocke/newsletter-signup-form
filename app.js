const main = document.querySelector("main");
const successMessage = document.querySelector(".success-message");
const subscribeBtn = document.querySelector("#subscribe");
const dismissBtn = document.querySelector("#dismiss");
const emailInput = document.querySelector("input[type=email]");
const form = document.querySelector("form");


subscribeBtn.addEventListener("click",()=>{
    if(emailInput.validity.valueMissing || emailInput.validity.typeMismatch){
        console.log("value missin");
        form.classList.add("form-error");
    }
    else{
        main.classList.add("disable");
        successMessage.classList.add("active");
        form.classList.remove("form-error");
    }
});

dismissBtn.addEventListener("click",()=>{
    main.classList.remove("disable");
    successMessage.classList.remove("active");
});