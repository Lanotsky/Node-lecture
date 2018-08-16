// exporting stuff

let variable = {
    name: 'aaron',
    message: 'Greetings',
    changeName: function(newName) {
        this.name = newName;
    },
    getAge: (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
        }
};

module.exports = variable;
