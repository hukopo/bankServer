import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    cardNum: { type: String },
    cardYear: { type: String },
    cardCVC: { type: String },
    sum: { type: String },
    comment: { type: String },
    email: { type: String },
    recInn: { type: String },
    bic: { type: String },
    scoreNum: { type: String },
    phoneNum: { type: String },
    payerNum: { type: String },
    createdAt: { type: Date }
});

mongoose.model('Note', NoteSchema);
