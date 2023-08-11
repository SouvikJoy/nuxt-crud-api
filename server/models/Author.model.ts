import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);
export default mongoose.model("Author", schema)