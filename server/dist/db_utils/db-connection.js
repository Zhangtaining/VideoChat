"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "19941124"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});

function register_user() {
    return undefined;
}

function user_login() {
    return true;
}

exports.register_user = register_user;
exports.user_login = user_login;