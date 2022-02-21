const Housing = require('../models/Housing');
const User = require('../models/User');

async function createHousing(trip) {
    const result = new Housing(trip);
    await result.save();
}

async function getLastThree() {
    return Housing.find().sort({ createdAt: -1 }).limit(3).lean();
}

async function getAll(){
    return Housing.find({}).lean();
}

module.exports = {
    createHousing,
    getLastThree,
    getAll
};