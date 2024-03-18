
const cookie = document.cookie;
const loader = document.querySelector('.loader')
const cookieParts = cookie.split(';');


let token;
for (const part of cookieParts) {
    if (part.trim().startsWith('token=')) {
        token = part.trim().substring('token='.length);
        break;
    }
}
if (!token) {
    setTimeout(() => {
        document.location.href = '/login'
    },1900)
    
}
setTimeout(() => {
    loader.style.opacity = '0'
}, 1100);
console.log(token)

