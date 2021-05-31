var { hash, compare } = require('bcrypt');
var { sign } = require('jsonwebtoken');
import Database from '../db_utils/db-connection'
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

function login(name, password) {
    const valid = true // await compare(password, user.password)
    //console.log(con+ "555555")
    console.log("I'm here >_< ^O^");
    const query = "SELECT user_id, user_name, email_address FROM USER WHERE user_name = '123' AND password = '456'";
    const db = new Database();
    console.log("I'm here >_< ^O^");
    console.log("I'm here >_< ^O^");
    console.log("I'm here >_< ^O^");
    return db.query(query).then( rows => {
        console.log(rows);
        return new Promise((resolve, reject) => {
            const user = {
                id: 123456,
                name: name,
                email: 'test@test.com',
            }
    
            const token = sign({userId: user.id}, APP_SECRET)
            resolve({
                token,
                user
            });
        })
    },
    err => {
        const user = {
            id: 123456,
            name: name,
            email: 'test@test.com',
        }

        const token = sign({userId: user.id}, APP_SECRET)
        return {
            token,
            user
        };
    });
}

export default {
    signup,
    login,
}