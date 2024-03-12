const registerForm = document.querySelector("#register-form");
const passwordInput = document.querySelector('#pass-word');
const signUpLink = document.querySelector('#sign_up_link');

signUpLink.addEventListener("click", () => {
    const formBox = document.querySelector('.form-box');
    formBox.classList.add('right-box'); 
})
passwordInput.addEventListener("dblclick", (event) => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
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