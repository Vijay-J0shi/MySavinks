import mongoose from "mongoose"

const connectDb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,
            {dbName:"Savinks"})

        
    }

    catch(error){
        console.log(error)
    };
    
}