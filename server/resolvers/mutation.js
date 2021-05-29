var { hash, compare } = require('bcrypt');
var { sign } = require('jsonwebtoken');
import con from '../db_utils/db-connection'
const APP_SECRET = 'Video_Chart_V1';
const saltRounds = 10;

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
    //console.log(con+ "555555")
    return con.user_login(name, password).then((res, err) => {
        //console.log(res);
        // console.log(user_info)
        if (!valid) {
            throw new Error('Invalid password')
        }

        const user = {
            id: user_info.user_id,
            name: name,
            email: 'test@test.com',
        }

        const token = sign({userId: user.id}, APP_SECRET)

        return {
            token,
            user
        }
    }) 
}

export default {
    signup,
    login,
}