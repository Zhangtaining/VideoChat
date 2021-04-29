'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('bcrypt'),
    hash = _require.hash,
    compare = _require.compare;

var _require2 = require('jsonwebtoken'),
    sign = _require2.sign;

var APP_SECRET = 'Video_Chart_V1';

async function signup(name, password, email) {
    //const password = await hash(password, 10)
    var user = {
        id: 123456,
        name: name,
        email: email
    };
    var token = sign({ userId: user.id }, APP_SECRET);

    return {
        token: token,
        user: user
    };
}

async function login(name, password) {
    var valid = true; // await compare(password, user.password)
    if (!valid) {
        throw new Error('Invalid password');
    }

    var user = {
        id: 123456,
        name: name,
        email: 'test@test.com'
    };

    var token = sign({ userId: user.id }, APP_SECRET);

    return {
        token: token,
        user: user
    };
}

exports.default = {
    signup: signup,
    login: login
};