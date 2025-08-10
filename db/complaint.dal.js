import { getDatabase } from "./connect.js";

export async function getComplaintByPassword(password) {
    const db = await getDatabase();
    return db.collection("complaints").findOne({password: password});
}

export async function addComplaint(complaint) {
    const db = await getDatabase();
    const result = await db.collection("complaints").insertOne(complaint);
    return result.insertedId;
}

