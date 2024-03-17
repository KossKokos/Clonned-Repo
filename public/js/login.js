const registerForm = document.querySelector("#register-form");
const passwordInput = document.querySelector('#pass-word');
const signUpLink = document.querySelector('#sign_up_link');
const body = document.querySelector( 'body' );
let canTrigger = true ;

signUpLink.addEventListener("click", () => {
    const formBox = document.querySelector('.form-box');
    formBox.classList.add('puff-out-center'); 
    body.classList.remove('animated-background') ;  
    body.style.backgroundColor = 'black'; 
    setTimeout(()=>{
        window.location.href = '/sign_up';
    },3000)
})
passwordInput.addEventListener("dblclick", (event) => {
    if(canTrigger){
        canTrigger = false ;
        passwordInput.classList.add('reveal');
        setTimeout(() => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        },500)
        setTimeout(() => {
        passwordInput.classList.remove('reveal')
        },2000)
    };

    setTimeout(() => canTrigger = true,2000)
    
})

registerForm.setAttribute( "action", `http://${api}:${port}/api/register`);
registerForm.setAttribute("method","post"); 

registerForm.addEventListener( 'submit', async (event) => {  
    event.preventDefault();
    const formData = new FormData(registerForm);
    const objectFormData = Object.fromEntries(formData);
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(objectFormData),
        headers: {
            'Content-Type': 'application/json'
        }
        });
    const data =  await response.json();
    
})