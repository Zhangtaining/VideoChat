const mysql = require('mysql')

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "19941124",
            database : 'video_chat'
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        });
    } 

    connect() {
        return new Promise( ( resolve, reject ) => {
            this.connection.connect( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }

    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

// async function user_login(user_name, password, callback) {
//     const query = `SELECT user_id, user_name, email_address FROM USER WHERE user_name = '${user_name}' AND password = '${password}'`;
    
//     con.query(query, (err, rows) => {
//         if (err) throw err;
//         console.log(rows);
//         callback(rows);
//     });
//     return res;
// }

export default {
    Database
}