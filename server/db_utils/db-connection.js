const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "19941124",
    database : 'video_chat'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
})

function register_user() {
    return undefined;
}

async function user_login(user_name, password, callback) {
    const query = `SELECT user_id, user_name, email_address FROM USER WHERE user_name = '${user_name}' AND password = '${password}'`;
    
    con.query(query, (err, rows) => {
        if (err) throw err;
        console.log(rows)
        return user {
            
        }
    });
    return res;
}

export default {
    register_user,
    user_login
}