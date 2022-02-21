const { Schema, model, Types: { ObjectId } } = require('mongoose');

const houseSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['Apartment', 'Villa', 'House'], required: true },
    year: { type: Number, required: true },
    city: { type: String, required: true },
    homeImg: { type: String, required: true },
    description: { type: String, required: true },
    pieces: { type: Number, required: true },
    owner: { type: ObjectId, ref: 'User', required: true },
    renters: { type: [ObjectId], ref: 'User', default: [] },
},
{timestamps: true});

const Housing = model('Housing', houseSchema);

module.exports = Housing;