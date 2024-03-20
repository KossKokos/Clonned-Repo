
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


setTimeout(() => { if (!token) {
        document.location.href = '/login';
}else {
    fetch(`http://${api}:${port}/api/user?data=${encodeURIComponent(token)}`, {
    method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const {userType,tempToken} = data;
        document.location.href = `/api/${userType}/${tempToken}`;
    })
    
}},1900)
setTimeout(() => {
    loader.style.opacity = '0';
}, 1100);


