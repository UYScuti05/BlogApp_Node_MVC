const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })
        console.log(`Database Connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB