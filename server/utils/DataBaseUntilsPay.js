import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/PayNote';

const NotePay = mongoose.model('NotePay');

export function setUpConnectionPay() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.namepay}`);
}

export function listNotesPay(id) {
    return NotePay.find();
}

export function createNotePay(data) {
    const note = new NotePay({
        cardNum: data.cardNum,
        cardYear: data.cardYear,
        cardCVC: data.cardCVC,
        sum: data.sum,
        comment: data.comment,
        email: data.email,
        recInn: data.recInn,
        bic: data.bic,
        scoreNum: data.scoreNum,
        phoneNum: data.phoneNum,
        payerNum: data.payerNum,
        createdAt: new Date(),
        check: false
    });

    return note.save();
}

export function deleteNotePay(id) {
    console.log("deletePay")
    return NotePay.findById(id).remove();
}

