/**
 * Created by youxiachai on 14-4-6.
 */



var Sequelize = require('sequelize');

var node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

var config = require('../config/config')[node_env];

console.log(config)

var dbStroage = new Sequelize(config.database, config.username, config.password, config.option);



//定义我们的表

var User = dbStroage.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
})

dbStroage.sync()
    .success(function () {
        User.create({
            username : 'youxiachai',
            password : '123456'
        }).done(function (err, result){
                console.log(err)
                console.log(result)
            })
    })
    .error(function (err){
            console.log(err);

})

