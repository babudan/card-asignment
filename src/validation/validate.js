



const isValidUserContact = function (contact) {
    return /^\d{9}$/.test(contact);
}

module.exports = { isValidUserContact }