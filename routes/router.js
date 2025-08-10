import express from "express";
import { getComplaintByPass, addNewComplaint } from "../contorllers/complaints.ctrl.js";

const router = express.Router();

router.get('/get-complaint', getComplaintByPass);
router.post('/add-complaint', addNewComplaint);

export default router;