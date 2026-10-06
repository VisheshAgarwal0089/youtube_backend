import "dotenv/config";
import connectDB from "./db/index.js";

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
    throw new Error("MONGODB_URL is missing from the .env file");
}

connectDB();


/*;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)//why do we use async function here? because we are using await keyword which is used to wait for the promise to resolve or reject. so we need to use async function to use await keyword.
        app.on("error",(error)=>{
            console.log("Error:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error("Error:", error)
        throw error
    }
})() //in this whole code we are checking error in try and in catch also why so
 */