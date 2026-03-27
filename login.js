const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const hide = document.querySelector('.hide');
const orig = document.querySelector('.orig'); //lgin for

signup.addEventListener('click', () => {
    hide.classList.add('show');
    orig.classList.add('hide');
})

login.addEventListener('click', () => {
    hide.classList.remove('show');
    orig.classList.remove('hide');
})