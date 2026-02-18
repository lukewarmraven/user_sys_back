import express from "express"
import User from "../models/User"

const router = express.Router()

// update
router.put("/:id",
    async (req,res) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(user)
    }
)

