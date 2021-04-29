var { hash, compare } = require('bcrypt');
var { sign } = require('jsonwebtoken');
const APP_SECRET = 'Video_Chart_V1';

async function signup(name, password, email) {
    //const password = await hash(password, 10)
    const user = {
        id: 123456,
        name: name,
        email: email,
    }
    const token = sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function login(name, password) {
    const valid = true // await compare(password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const user = {
        id: 123456,
        name: name,
        email: 'test@test.com',
    }

    const token = sign({userId: user.id}, APP_SECRET)

    return {
        token,
        user
    }
}

export default {
    signup,
    login,
}