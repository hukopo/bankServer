import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    login: { type: String },
    password: { type: String }
});

mongoose.model('Users', UsersSchema);
