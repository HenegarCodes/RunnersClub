const {connect, connection} = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://henegarcodes:RunnerClub@cluster0.zkkehjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)


module.exports = mongoose.connection;