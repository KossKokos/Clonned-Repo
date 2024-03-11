
const cookie = document.cookie;

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
    },3000)
    
}

console.log(token)

