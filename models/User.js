const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO change user model
// TODO add validation

// const URL_PATTERN = /^https?:\/\/(.+)/;
// const NAME_PATTERN = /^[a-zA-Z]+$/;
// const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
    name: { type: String, required: [true, 'Full name is required!'] },
    username: { type: String, required: [true, 'Username is required!'] },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;