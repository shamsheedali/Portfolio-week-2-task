//scroll -- design
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});  

//navbar -- toggle
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}



//form-- validation

function submission(event){
    event.preventDefault();
    let a, b, c;

    //name--Error--Checking
   let name = document.getElementById('name').value;
   let nameErr = document.getElementById('nameErr');
   if(name.length === 0){
       nameErr.innerHTML = 'You Forgot To Enter Your Name';
        nameErr.style.color = 'red';
    }else if(!name.includes(' ')){
        nameErr.innerHTML = 'Plese Enter Your Full Name';
        nameErr.style.color = 'yellow';
    }else{
        nameErr.innerHTML = '';
        a = true;
    }

    //email-Error-Checking
    let email = document.getElementById('email').value;
    let emailErr = document.getElementById('emailErr');
    if(email.length === 0){
        emailErr.innerHTML = 'You Forgot To Enter Your Mail';
        emailErr.style.color = 'red';
    }else if(!email.includes('@')){
        emailErr.innerHTML = 'OOPS! Something Went wrong';
        emailErr.style.color = 'yellow';
    }else {
        emailErr.innerHTML = '';
         b = true;
    }

    //msg--Error--Checkiing
    let msg = document.getElementById('msg').value;
    let msgErr = document.getElementById('msgErr');
    if(msg.length === 0){
        msgErr.innerHTML = "Plese Text Me Something";
        msgErr.style.color = 'red'
    }else if(msg.length < 4){
        msgErr.innerHTML = "Message Should be atleast 4 letters";
        msgErr.style.color = 'yellow'
    }else{
        msgErr.innerHTML = "";
        c = true;
    }

    if(a & b & c){
        submitForm();
    }
}


// form--submission
function submitForm(){
    // e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzgaGjDG2mL5DHb_DSZ8LQmpcAyMBvtEvY8EZECmKFxf7EVJlzYymwMAFC2OmiS5R-ZTg/exec",
        data: $("#submit-form").serialize(),
        method: "POST",
        success: function(response) {
            alert("Form submitted successfully");
            $("#response").html("Form submitted successfully");
        },
        error: function(err) {
            alert("Something went wrong");
            $("#response").html("Error occurred: " + err.statusText);
        }
    });
}