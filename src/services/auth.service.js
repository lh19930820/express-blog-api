const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async ({ email, password }) => {
    const exist = await User.findOne({ email });
    if (exist) throw new Error('Email already exists');

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        password: hashed
    });

    return { message: 'Registered', user };
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Wrong password');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token };
};
