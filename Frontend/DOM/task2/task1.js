let addStudent = (name)=>{
    let list = document.querySelector('ul');
    let point = document.createElement('li');
    point.innerHTML = name;
    list.appendChild(point);
    let elArr = Array.from(list.children).sort(function (a, b) {
        if (a.innerHTML < b.innerHTML) return -1;
        if (a.innerHTML > b.innerHTML) return 1;
        return 0;
    });
    elArr.forEach(element => {
        list.appendChild(element)
    });
}

addStudent("Adam Johnson");
addStudent("Zhang Weili");
addStudent("Tim Cook");