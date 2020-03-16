document.querySelector('button').addEventListener('click', function () {
    
    let intro1 = '\nНа кону 1 миллион!';
    let question1 = "Кто проживает на дне океана?";
    let version1 = "1) Путин. 2) Твоя самооценка. 3) Губка Боб. 4) Боб";
    let answer1 = '3';
    let prize1 = '0';

    let intro2 = 'Отлично! Следующий вопрос. \nНа кону 3 миллиона! Вопрос №2!';
    let question2 = "Вы готовы дети?";
    let version2 = "1) Да. 2) Нет. 3) Сарказм. 4) 300.";
    let answer2 = '1';
    let prize2 = '1 миллион';

    let intro3 = 'Вы молодец! Последний вопрос. \nНа кону 10 миллионов!';
    let question3 = "Кто мультимиллионер?";
    let version3 = "1) Ты. 2) Безос. 3) Цукерберг. 4) Гейтс.";
    let answer3 = '1';
    let prize3 = '3 миллионa';
    let quesNumber = 0;


    alert('Добро пожаловать в зимбабвийский "Кто хочет стать мультимиллионером?' +
        '\nОсновное правило: Вводите номер ответа, а не сам ответ!');

    if (question(intro1, question1, version1, answer1, quesNumber, prize1) == true) {
        quesNumber += 1;
        if (question(intro2, question2, version2, answer2, quesNumber, prize2) == true) {
            ques += 1;
            question(intro3, question3, version3, answer3, quesNumber, prize3)
        }
    };

    function question(intro, question, version, answer, quesNumber, prize) {
        let message = `${intro} \n${question} \n${version}`;
        let input = prompt(message);
        if (input == answer) {
            alert('Совершенно верно!');
            return true;
        } else if (input == null) {
            alert(`Вы правильно ответили на ${quesNumber} вопросов из 3 и Ваш выигрыш составил ${prize}`);
            return false;
        } 
        else {
            alert('Тутуту. Испытайте удачу ещё раз!');
            return false;
        }
    }
});