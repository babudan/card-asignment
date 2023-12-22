const cardmodel = require("../model/cardmodel");
const cardModel = require("../model/cardmodel");
const { isValidUserContact } = require("../validation/validate");

const getcard = async (req, res) => {
    try {
        let { Card_ID, User_contact } = req.query;
        const query = {};

        if (Card_ID && Card_ID.trim().length != 0) {
            query.Card_ID = Card_ID;
        }

        if (User_contact && User_contact.trim().length != 0) {
            if (isValidUserContact(User_contact)) {
                query.User_contact = User_contact;
            } else {
                return res.status(400).send({ status: false, message: "User_contact should be a string of 9 digits" });
            }
        }

        let fetchcards = await cardModel.find(query).select({ _id: 0, Comment: 1 });

        if (fetchcards.length == 0) return res.status(400).send({ status: false, data: [] });

        return res.status(200).send({ status: true, data: fetchcards, message: "cards status fetched succesfully" });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { getcard };