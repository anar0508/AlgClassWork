client = {
    name: 'Anar', 
    age: 26,
    sex: 'male', 
    exists: function(){
        return true;
    },
    getYearsBeforeRetirement: function(){
        return this.sex =='male'? 65-this.age: 63-this.age;
    }
    

}

console.log(client.getYearsBeforeRetirement());
