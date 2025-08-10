import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.DB_CONNECTION);
let db;

export async function connectToDatabase() {
    if(!db){
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log("Connected to database");     
    }
    return db;
}

export async function getDatabase() {
    if (!db) {
        throw new Error("Database not connected. Call connectToDatabase first.");
    }
    return db;
}

await connectToDatabase();