import dotenv from "dotenv";
import connectDB  from "./db/connectDB.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import  contactRoutes  from "./routes/contactRoutes.js"; 
// Initialize app
dotenv.config({});
const app = express();

// Middleware
app.use(cors()); // For cross-origin requests
app.use(bodyParser.json()); // Parse JSON body

// Routes
app.use('/api/contact', contactRoutes);



// Server
const PORT = process.env.PORT || 9000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
