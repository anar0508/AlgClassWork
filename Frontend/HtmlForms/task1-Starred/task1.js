window.addEventListener('load', handleDocumentLoad);

function handleDocumentLoad() {
    document.forms.feedback.addEventListener('submit', handleFormSubmit);
    registerHint();
}

function handleFormSubmit(e) {
    e.preventDefault();
    appendMessage(e.target.elements);
    e.target.reset();
}

function appendMessage(controls) {
    const container = document.getElementById('messages-container');
    const message = document.createElement('div');
    message.className = 'message';

    const comment = document.createElement('p');
    comment.innerHTML = controls.message.value;

    const author = document.createElement('p');
    author.className = 'author';

    let userName = controls.user_name.value;
    if (controls.email.value==null|| controls.email.value==''){
        userName = controls.user_name.value;
        }
    else if (!controls.hide_email.checked){
        userName = `<a href="mailto:${controls.email.value}">${userName}</a>`;}


    const age = controls.age.value;

    const report = controls.sex.value == 'male' ? 'сообщил' : 'сообщила';

    let years = '';
    if (age % 10 == 1) {
        years = 'год';
    }
    else if (age >= 5 && age <= 20 || (age % 10 == 5 
                                   || age % 10 == 6 
                                   || age % 10 == 7 
                                   || age % 10 == 8 
                                   || age % 10 == 9 
                                   || age % 10 == 0)) {
        years = 'лет';
    }
    else years = 'года';

    //author.innerHTML = userName + ' (' + age + ' лет) ' + report + ':' ;
    author.innerHTML = `${userName} (${age} ${years}) ${report}:`;

    message.appendChild(author);
    message.appendChild(comment);

    container.insertBefore(message, container.firstChild);
}

function registerHint() {
    const input = document.getElementById('feedback-form-text');
    const hint = document.getElementById('feedback-form-text-hint');

    input.addEventListener('focus', () => hint.style.display = 'block');
    input.addEventListener('blur', () => hint.style.display = 'none');
}