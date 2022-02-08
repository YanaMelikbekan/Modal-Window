const btn = document.querySelector('.btn');
const inputName = document.querySelector('.inputName');
const inputPhone = document.querySelector('.inputPhone');
const inputEmail = document.querySelector('.inputEmail');
const title = document.querySelector('h2').textContent;
const btnForm=document.querySelector('.btn-form');

const hiddenInput = document.querySelector('input[type="hidden"]')
hiddenInput.setAttribute('value', title)

btn.addEventListener('click',()=> {
    document.querySelector('.containerForm').style.display = 'flex';
})
inputName.addEventListener('input',()=>{
    inputName.value = inputName.value.replace(/[^а-я, ,^А-Я]/, '');
});
inputPhone.addEventListener('input', () => {
    inputPhone.value = inputPhone.value.replace(/[^0-9,]/, '')
});
inputEmail.addEventListener('input', () => {
    inputEmail.value = inputEmail.value.replace(/[^a-z, ,^A-Z,@,. ]/, '')
});

btnForm.addEventListener('click',()=>{
    if((inputName.value=='')&&(inputPhone.value=='')&&(inputEmail.value=='')){
        alert('Заполните все поля')
    }
    localStorage.setItem('Name',inputName.value);
    localStorage.setItem('Email',inputEmail.value);
    localStorage.setItem('Phone',inputPhone.value);
})






