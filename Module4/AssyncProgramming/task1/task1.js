const SECRET_ID = 42;
function getCurrentUserId() { return Promise.resolve(SECRET_ID) }
function getUserName(a) {
    return a === SECRET_ID
        ? Promise.resolve("\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432")
        : Promise.reject(new Error(`There is no empoyee with ID: ${a}`))
}
function getUserDepartment(a) {
    return a === SECRET_ID
        ? Promise.resolve("IT")
        : Promise.reject(new Error(`There is no empoyee with ID: ${a}`))
}
function getUserWorkExpirience(a) {
    return a === SECRET_ID
        ? Promise.resolve(4)
        : Promise.reject(new Error(`There is no empoyee with ID: ${a}`))
}

let user = getCurrentUserId();
user.then((res) => {
    let userId = res; 
    Promise.all([getUserName(userId), getUserDepartment(userId), getUserWorkExpirience(userId)])
    .then(responses=>{
        console.log(`Сотрудник ${responses[0]} из отдела ${responses[1]} успешно работает уже ${responses[2]} лет`);
    })
})




