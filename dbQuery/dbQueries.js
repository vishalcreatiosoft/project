const User = require('../models/userModel');

const userdb = {}

userdb.userLogin = async(loginData) => {
    return await User.findOne({email : loginData.email, password : loginData.password});
}


userdb.checkUserExists = async(email) => {
    return await User.findOne({email : email});
}


userdb.userRegistration = async(data) => {
    const register = new User(data);
    return await User.create(register)
                 .then((response)=> response)
                 .catch((error)=> error);
                   
};




module.exports = userdb;