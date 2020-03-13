document.querySelector('button').addEventListener('click', function () {

    let i1 = 'Добро пожаловать в зимбабвийский "Кто хочет стать мультимиллионером?. \nНа кону 1 миллион!';
    let q1 = "Кто проживает на дне океана?";
    let v1 = "1) Путин. 2) Твоя самооценка. 3) Губка Боб. 4) Боб";
    let a1 = '3';

    let i2 = 'Отлично! Следующий вопрос. \nНа кону 3 миллиона! Вопрос №2!';
    let q2 = "Вы готовы дети?";
    let v2 = "1) Да. 2) Нет. 3) Сарказм. 4) 300.";
    let a2 = '1';

    let i3 = 'Вы молодец! Последний вопрос. \nНа кону 10 миллионов!';
    let q3 = "Кто мультимиллионер?";
    let v3 = "1) Ты. 2) Безос. 3) Цукерберг. 4) Гейтс.";
    let a3 = '1';
    let ques=0; 
    

    if (question(i1, q1, v1, a1, ques, 0)==true){
        ques+=1;
        if (question(i2, q2, v2, a2, ques, '1 миллион') ==true) {
            ques+=1;
            question(i3, q3, v3, a3, ques, '3 миллиона' )
        }
    };

});

function question(i, q, v, c, n, p) {
    let message = `${i} \n${q} \n${m}`;
    let answer = prompt(message);
    if (answer == c) {
        alert('Совершенно верно!');
        return true;
    } else if (answer== null){
        alert(`Вы правильно ответили на ${n} вопросов из 3 и Ваш выигрыш составил ${p}`);
        return false;
    } else if (anwer == '50/50'){
        fifty(q, );
    }
    else {
        alert('Тутуту. Испытайте удачу ещё раз!');
        return false;
    }
} 

function fifty(){

}