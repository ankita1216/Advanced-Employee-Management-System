const mongoose=require("mongoose")


const coonectDB= async() =>{
    try{
            const conn=await mongoose.connect(
                'mongodb+srv://Emp_team:employee123@cluster0.7s2xn.mongodb.net/itemdb?retryWrites=true&w=majority&appName=Cluster0'
            );
            console.log('Database Connected:${conn.c}');
    }
    catch(error)
    {
        console.error(error);
        process.exit(1);

    }
};
module.exports=coonectDB;