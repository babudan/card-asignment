const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
    {
        ID: {
            type: String,
            unique: true,
        },
        Card_ID: {
            type: String,
            unique: true,
        },
        User_contact: {
            type: String,
        },
        Timestamp: {
            type: String,
        },
        Comment: {
            type: String,
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model("card", cardSchema);

