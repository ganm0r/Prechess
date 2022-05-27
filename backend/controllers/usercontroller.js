const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/usermodel");

/*
    @description    register new user
    @route          POST /api/users
    @access         public
*/
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("please add all fields");
    }

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hash,
    });

    if(user) {
        res.status(201).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("invalid user data");
    }
});

/*
    @description    authenticate user
    @route          POST /api/users/login
    @access         public
*/
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("invalid credentials");
    }
});

/*
    @description    get user data
    @route          GET /api/users/me
    @access         private
*/
const getUserData = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).send({
        id: _id,
        name,
        email
    });
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '2d',
    });
}

module.exports = {
    registerUser,
    loginUser,
    getUserData,
};