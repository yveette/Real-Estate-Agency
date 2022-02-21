const Housing = require('../models/Housing');
const User = require('../models/User');

async function createHousing(trip) {
    const result = new Housing(trip);
    await result.save();
}

async function getLastThree() {
    return Housing.find().sort({ createdAt: -1 }).limit(3).lean();
}

async function getAll() {
    return Housing.find({}).lean();
}

async function getHouseById(id) {
    return Housing.findById(id).populate('renters', 'name').lean();
}

async function joinRent(houseId, userId) {
    const house = await Housing.findById(houseId);

    if (house.renters.includes(userId)) {
        throw new Error('User is already part of the rent!');
    }

    house.renters.push(userId);
    await house.save();
}

module.exports = {
    createHousing,
    getLastThree,
    getAll,
    getHouseById,
    joinRent
};