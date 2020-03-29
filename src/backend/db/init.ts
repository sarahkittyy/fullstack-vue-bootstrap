import mongoose from 'mongoose';

let db = process.env.DB_NAME;

mongoose.connect(`mongodb://db/${db}`, { useNewUrlParser: true });