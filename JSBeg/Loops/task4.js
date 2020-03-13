document.querySelector('button').addEventListener('click', function () {

    let sentence = prompt('Позязя, введите ваше любое предложение');
    alert('Секундочку, сейчас вычислим!');
    console.log(compute(sentence));

});

function compute(sentence) {
    let numbers = '';
    if (sentence==null){
        return '';
    }for (let i = 0; i < sentence.length; i++) {
        switch (sentence[i]) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                numbers += sentence[i] + ', ';
            case '0':
                continue;
            case '!':
            case '.':
            case '?':
                return numbers.slice(0, numbers.length - 2);
        }

    }

    return numbers.slice(0, numbers.length - 2);
}

