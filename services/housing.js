const Housing = require('../models/Housing');
const User = require('../models/User');

async function createHousing(trip) {
    const result = new Housing(trip);
    await result.save();
}

module.exports = {
    createHousing,
};