import express from 'express';
import mongoose from 'mongoose';
import { Router } from 'express';
import Ctrl from './controllers/Ctrl.js';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



//Codigo del archivo

import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Image from './models/Image.js'
import mimetypes from 'mime-types'



const app = express();
app.use(express.json());
const router = Router();

app.set('port', 8001);
app.listen(app.get('port'),() => {
    console.log('Server is on port: ' + app.get('port'));
});

(async () => {
    try {
        const mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        };
        const db = await mongoose.connect(
            'mongodb+srv://proyecto:maximo18@cluster0.kitxk.mongodb.net/test',mongooseOptions
        );

        console.log(`Connected to: ${db.connection.name}`);
    } catch (err) {
        console.error(err);
    }
})();

router.post("/register",Ctrl.register);
router.post("/login",Ctrl.login);


app.use(router)  

app.use(router);

