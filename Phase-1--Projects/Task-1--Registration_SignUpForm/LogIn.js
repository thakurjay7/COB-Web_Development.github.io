 
const lognIn_container = document.querySelector('.lognIn_container');
const reg_link = document.querySelector('.reg_link');
const login_link = document.querySelector('.login_link');

reg_link.addEventListener('click', () => {
    lognIn_container.classList.add('active');
});

login_link.addEventListener('click', () => {
    lognIn_container.classList.remove('active');
});
