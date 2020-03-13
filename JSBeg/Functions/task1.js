document.querySelector('button').addEventListener('click', function () {

    let num = +(prompt("Введите число"));
    let rem = num % 10;
    let dec = num - num % 10;
    let strDec = '';
    let strRem = '';
    let result;
    if (dec != 10) {
        switch (rem) {
            case 1:
                strRem = 'один';
                break;
            case 2:
                strRem = 'два';
                break;
            case 3:
                strRem = 'три';
                break;
            case 4:
                strRem = 'четыре';
                break;
            case 5:
                strRem = 'пять';
                break;
            case 6:
                strRem = 'шесть';
                break;
            case 7:
                strRem = 'семь';
                break;
            case 8:
                strRem = 'восемь';
                break;
            case 9:
                strRem = 'девять';
                break;
        }

        if (dec >= 20 && dec <= 90) {
            switch (dec) {
                case 20:
                    strDec = 'двадцать';
                    break;
                case 30:
                    strDec = 'тридцать';
                    break;
                case 40:
                    strDec = 'сорок';
                    break;
                case 50:
                    strDec = 'пятьдесят';
                    break;
                case 60:
                    strDec = 'шестьдесят';
                    break;
                case 70:
                    strDec = 'семьдесят';
                    break;
                case 80:
                    strDec = 'восемьдесят';
                    break;
                case 90:
                    strDec = 'девяносто';
                    break;
            }
    } 
    } else {
        switch (num) {
            case 10:
                strDec = 'десять'
                break;

            case 11:
                strDec = 'одиннадцать'
                break;

            case 12:
                strDec = 'двенадцать'
                break;

            case 13:
                strDec = 'тринадцать'
                break;

            case 14:
                strDec = 'четырнадцать'
                break;

            case 15:
                strDec = 'пятнадцать'
                break;

            case 16:
                strDec = 'шестьнадцать'
                break;

            case 17:
                strDec = 'семнадцать'
                break;

            case 18:
                strDec = 'восемнадцать'
                break;

            case 19:
                strDec = 'девятнадцать'
                break;

        }
    }

    let message= strDec + ' ' + strRem

    alert( strDec == 0 ? strRem : message);
    

});
