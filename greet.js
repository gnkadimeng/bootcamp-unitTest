module.exports = {
    greet: function(name){
        return "hello, " + name;
    },
    addNumbers: function(value1, value2){
        return value1 + value2;
    },
    isFromLimpopo: function(reg){
        return reg.endsWith("L")
    },

    yearAgo: function(numberOfYears){
        return numberOfYears;
    }
}