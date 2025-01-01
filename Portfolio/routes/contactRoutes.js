// routes/contactRoutes.js
import express from "express";
// import { submitContactForm } from "../controllers/contactControllers.js";
import { submitContactForm } from '../controllers/contactControllers.js';

const router = express.Router();

// Route to handle contact form submission
router.post('/', submitContactForm);

export default router;