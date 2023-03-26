import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormDate, 500));

const formData = {};

function onFormDate(evt){
    formData[evt.target.name] = evt.target.value;
    //console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function onFormSubmit(evt){
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}


function storageData(){
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    
    if (data){
        email.value = data.email;
        message.value = data.message;
    };
};


storageData();