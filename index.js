const getForm = document.getElementById("toggle-form");
const submitForm = document.getElementById("toggle-submit");

submitForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    personal = document.getElementById("personal-info");
    if(personal.classList.contains("not-active") === true){
        personal.className = "col-md active"
    }
    email = document.getElementById("toggle-form");
    if(email.classList.contains("active") === true){
        email.className = "col-md not-active"
    }
})


