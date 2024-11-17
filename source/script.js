function changeTheme(){
    let body = document.querySelector('body');
    body.classList.toggle('dark')
    btn.classList.toggle('darkBtn')
}

let btn = document.querySelector('button');
btn.addEventListener('click', changeTheme);