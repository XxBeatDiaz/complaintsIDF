import { getComplaintByPassword, addComplaint } from "../db/complaint.dal.js";

export async function getComplaintByPass(req, res) {
    const { password } = req.body;
    try {
        const complaint = await getComplaintByPassword(password);
        if (complaint) {
            res.status(200).json(complaint);
        } else {
            res.status(404).json({ message: "Complaint not found" });
        }
    } catch (error) {
        console.error("Error fetching complaint:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function addNewComplaint(req, res) {
    const complaint = req.body;
    try {
        const insertedId = await addComplaint(complaint);
        res.status(201).json({ message: "Complaint added successfully", id: insertedId });
    } catch (error) {
        console.error("Error adding complaint:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}