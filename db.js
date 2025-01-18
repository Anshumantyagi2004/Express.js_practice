import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/tyagidb";
if (!uri){
    console.log("No database connection string provided");
}
//mongodb://localhost:27017/

const db = async () => {
    try {
        const conn = await mongoose.connect(uri);
        if (conn) {
            console.log("Connected to MongoDB");
        }
        else{
            console.log("Failed to connect to MongoDB");
        }
    }
    catch (e) {
        console.log("Error");
    }
}
export default db;