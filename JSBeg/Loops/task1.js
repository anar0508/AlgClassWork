document.querySelector('button').addEventListener('click', function () {

let hex = '#56F87D'; 

alert (toRGB(hex));

});



function converter(ch){
    switch (ch) {
        case 'A':
            return 10;
        case 'B':
            return 11;
        case 'C':
            return 12;
        case 'D':
            return 13;
        case 'E':
            return 14;
        case 'F':
            return 15;
        default:
            return Number (ch);
    }
}

function toRGB(hex){
    let r;
    let g;
    let b;
    r = converter(hex[1])*16 + converter (hex[2]);
    g = converter(hex[3])*16 + converter (hex[4]);
    b = converter(hex[5])*16 + converter (hex[6]);

    let RGB = `RGB (${r}, ${g}, ${b}) `;
    return RGB;
}