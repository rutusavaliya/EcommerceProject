import express from'express';
import dotenv from 'dotenv';
const app = express();
import mongoose from 'mongoose';
dotenv.config();
const port : Number = Number(process.env.PORT);
const dbURL : string =  process.env.MONGO_DB_URL as string;
 
app.use(express.json());

// ROUTES:- 

// Admin Routes
import adminRoutes from "./src/routes/admin/index.routes";
app.use('/api/admin', adminRoutes);

// // User Routes
import usersRoutes from "./src/routes/user/index.routes";
app.use('/api/user', usersRoutes);

// DATABASE COLLECTION
app.listen(port, async() => {                                                        // Online Database
    mongoose.connect(dbURL)
    .then(() => console.log('DB is Connected...'))
    .catch(err => console.log(err.message));
    console.log(`Server start at http://localhost:${port}`);
});