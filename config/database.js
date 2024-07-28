const mongoose= require('mongoose');
require('dotenv').config();


//just to rmember 
// mongodb+srv://username:pass@cluster0.ozsolec.mongodb.net/collection_name?retryWrites=true&w=majority


//ATLAS_URI="mongodb+srv://mikiyas:Ab123456Ab%3F%40@cluster0.ozsolec.mongodb.net/addis_music?retryWrites=true&w=majority"

const uri = process.env.ATLAS_URI;


exports.connectToDatabase = () => {
    try {
        mongoose.connect(uri,
            {useNewUrlParser:true},
            {useCreateIndex:true},
            {autoIndex: true})
        
        const connection = mongoose.connection;
        
        connection.once('open', () => {
            console.log("Connected to Mongo db Atlas")
        })
    } catch (error) {
        throw new Error('Unable to connect to Database')
    }
}