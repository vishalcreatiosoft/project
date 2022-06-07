const mongoose = require('mongoose');



const connectToMongo = ()=>{
    const MONGO_URI=`${process.env.MONGODB_URI_PREFIX}://${process.env.MONGODB_IP}:${process.env.MONGODB_PORT}/${process.env.MONGODB_APP_DATABASE_NAME}`;
    mongoose.connect(MONGO_URI,()=>{
        console.log('mongodb Path', MONGO_URI);
        console.log('db connected');
    })
};


module.exports = connectToMongo;