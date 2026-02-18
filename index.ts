import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { configDotenv } from "dotenv"

configDotenv()
const app = express()
app.use(cors()) // fixes browser cors issues
app.use(express.json()) // turns output to json

const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI){
    throw new Error("MONGO_URI is not defined in .env")
}
mongoose.connect(MONGO_URI)
.then(
    ()=>console.log("MongoDB connected.")    
)
.catch(err => console.error(err))

