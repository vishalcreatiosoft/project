const userdb = require('../dbQuery/dbQueries');
const userHandler = {};



userHandler.Registration = async(req, res) => {
    
    const requestData = {
        email : req.body.email,
        name : req.body.name,
        password : req.body.password
    }
    const checkUser = await userdb.checkUserExists(requestData.email);
    
    if(checkUser){
        res.send({ success : false, result : "This email already exists"});
    }
    else{
        const result = await userdb.userRegistration(requestData);
        res.send({ success : true, result : "User registered successfully"});
    }
};

userHandler.userLogin = async(req, res) => {
    
    const loginData = {
        email : req.body.email,
        password : req.body.password,
    }
    const result = await userdb.userLogin(loginData);
    if(result){
        res.send({ success : true, result : "User logged in successfully"});
    }else{
        res.send({ success : false, result : "User does not exists login failed"});
    }
    
    
}



module.exports = userHandler;