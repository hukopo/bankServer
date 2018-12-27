import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Users';

const User = mongoose.model('Users');

export function setUpConnectionPay() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.namepay}`);
}

export function auth(login, password) {
    //return login === "1" && password == "1";
    //return User.find({ login: login }).password === password;
    //User.find()
    //console.log(User.find());
    //console.log(User.find({ login: login }).password + " " + password + " " + User.find({ login: login }).password === password)
    return User.find();

}

export function createUsers(data) {
    const user = new User({
        login: data.login,
        password: data.password
    });

    return user.save();
}
