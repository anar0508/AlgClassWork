const employees = [
  {name: 'Устинов Авдей', age: 25, workExperience: 3, role: 'Дизайнер'},
  {name: 'Яушкин Олег', age: 28, workExperience: 4, role: 'Программист'},
  {name: 'Сарайкин Валентин', age: 36, workExperience: 11, role: 'Менеджер'},
  {name: 'Яцковский Эдуард', age: 24, workExperience: 1, role: 'Программист'},
  {name: 'Пелевин Платон', age: 19, workExperience: 1, role: 'Дизайнер'},
  {name: 'Бердяев Потап', age: 37, workExperience: 7, role: 'Программист'},
  {name: 'Константинов Артём', age: 45, workExperience: 12, role: 'Менеджер'},
  {name: 'Харитонов Всеволод', age: 23, workExperience: 2, role: 'Программист'},
  {name: 'Язев Ян', age: 26, workExperience: 3, role: 'Программист'},
  {name: 'Белоглазова Анастасия', age: 25, workExperience: 4, role: 'Программист'},
  {name: 'Тальдаева Анна', age: 31, workExperience: 5, role: 'Программист'},
  {name: 'Улицкая Христина', age: 30, workExperience: 5, role: 'Тестировщик'},
  {name: 'Греф Оксана', age: 24, workExperience: 0, role: 'Программист'},
  {name: 'Савинкова Аза', age: 24, workExperience: 4, role: 'Тестировщик'},
  {name: 'Худякова Евдокия', age: 23, workExperience: 3, role: 'Программист'},
  {name: 'Машкова Раиса', age: 28, workExperience: 5, role: 'Дизайнер'},
];

let copy = employees.slice();
let filteredCopy= copy.filter((employee)=> {return employee.workExperience>=5 && employee.role==='Программист'}); 


filteredCopy.map((employee)=>{ console.log
(`Программист ${employee.name} трудится у нас уже ${employee.workExperience} лет!`)});