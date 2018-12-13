import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';
import * as dbPay from './utils/DataBaseUntilsPay';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Set up connection of database
dbPay.setUpConnectionPay();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

// RESTful api handlers
app.get('/notespay', (req, res) => {
    dbPay.listNotesPay().then(data => res.send(data));
});

app.post('/notespay', (req, res) => {
    dbPay.createNotePay(req.body).then(data => res.send(data));
});

app.delete('/notespay/:id', (req, res) => {
    dbPay.deleteNotePay(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
