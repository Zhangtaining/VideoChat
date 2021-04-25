const bcrypt = require('bcrypt')
const {db_login, db_register} = require("../db_utils/db-connection")

const saltRounds = 10

function user_login(req, res) {
    const userId = req.body.userId;
    const password = req.body.password;
    db_login(userId, password).then(
        (r, e) => {
            if (e) {
                res.send({
                    "code":400,
                    "failed":"error ocurred"
                })
            } else {
                if(r.length >0){
                    const comparision = await bcrypt.compare(password, r[0].password)
                    if(comparision){
                        res.send({
                        "code":200,
                        "success":"login sucessfull"
                        })
                    }
                    else{
                    r.send({
                            "code":204,
                            "success":"Email and password does not match"
                    })
                    }
                }
                else{
                    res.send({
                        "code":206,
                        "success":"Email does not exits"
                    });
                }
              }
        }
    )
}

function user_register(req, res) {
    var userRegisterInfo = {
        'email': req.body.email,
        'userId': req.body.userId,
        'password': req.body.password
    }
    db_register(userRegisterInfo, res).then(
        (r, e) => {
            if (e) {
                res.send({
                    "code":400,
                    "failed":"error ocurred"
                });
            } else {
                res.send({
                    "code":200,
                    "success":"user registered sucessfully"
                });
            }
        }
    )

}

export {
    user_login,
    user_register
}