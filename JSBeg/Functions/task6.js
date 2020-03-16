document.querySelector('button').addEventListener('click', function () {

    let fifty = true;
    let correct = true;

    let intro1 = '\nНа кону 1 миллион!';
    let question1 = "Кто проживает на дне океана?";
    let ver1_1 = "1) Путин.";
    let ver1_2 = "2) Твоя самооценка.";
    let ver1_3 = "3) Губка Боб.";
    let ver1_4 = "4) Боб.";
    let answer1 = '3';
    let prize1 = '0';

    let intro2 = 'Отлично! Следующий вопрос. \nНа кону 3 миллиона! Вопрос №2!';
    let question2 = "Вы готовы дети?";
    let ver2_1 = "1) Да.";
    let ver2_2 = "2) Нет.";
    let ver2_3 = "3) Сарказм.";
    let ver2_4 = "4) 300.";
    let answer2 = '1';
    let prize2 = '1 миллион';

    let intro3 = 'Вы молодец! Последний вопрос. \nНа кону 10 миллионов!';
    let question3 = "Кто мультимиллионер?";
    let ver3_1 = "1) Ты.";
    let ver3_2 = "2) Безос.";
    let ver3_3 = "3) Цукерберг.";
    let ver3_4 = "4) Гейтс.";
    let answer3 = '1';
    let quesNumber = 0;
    let prize3 = '3 миллионa';

    alert('Добро пожаловать в зимбабвийский "Кто хочет стать мультимиллионером?' +
        '\nОсновное правило: Вводите номер ответа, а не сам ответ!' +
        '\nЧтобы воспользоваться подсказкой 50/50, введите вместо ответа "50/50".' +
        '\nУдачи!');

    while (correct) {

        if (correct != question(intro1, question1, ver1_1, ver1_2, ver1_3, ver1_4, answer1, quesNumber, prize1)) {
            break;
        }
        quesNumber += 1;
        if (correct != question(intro2, question2, ver2_1, ver2_2, ver2_3, ver2_4, answer2, quesNumber, prize2)) {
            break;
        }
        quesNumber += 1;
        if (correct != question(intro3, question3, ver3_1, ver3_2, ver3_3, ver3_4, answer3, quesNumber, prize3)) {
            break;
        }
        correct = false;
    }


    function question(intro, quest, ver1, ver2, ver3, ver4, answer, quesNumber, prize) {
        let message = `${intro} \n${quest} \n${ver1} \n${ver2} \n${ver3} \n${ver4} `;
        let input = prompt(message);
        if (input == answer) {
            alert('Совершенно верно!');
            return true;
        } else if (input == null) {
            alert(`Вы правильно ответили на ${quesNumber} вопросов из 3 и Ваш выигрыш составил ${prize}`);
            return false;
        } else if (input == "50/50") {
            quest += '\nВы использовали подсказку';
            if (fifty) {
                fifty = false;
                return question(intro, quest, ver1, '', ver3, '', answer, quesNumber, prize);
            } else {
                fifty = false;
                return question(intro, quest, ver1, ver2, ver3, ver4, answer, quesNumber, prize);
            }
        }
        else {
            alert('Тутуту. Испытайте удачу ещё раз!');
            return false;
        }
    }

});