document.querySelector('button').addEventListener('click', function () {

    let sentence = '.fasfasfafafas.fafaf.fasfaf.3.3.3.';
    alert('Секундочку, сейчас вычислим!');
    console.log(compute(sentence));

});

function compute(sentence) {
    let newSentence='';
    if (sentence==null){
        return '';
    }for (let i = 0; i < sentence.length; i++) {
        if (sentence[i]=='.'){
            newSentence = newSentence + '!';
        } else newSentence = newSentence + sentence[i];
        }
        return newSentence;
    }


