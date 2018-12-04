import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
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
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

