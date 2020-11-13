const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BackupSchema = new Schema({
    id: {type: Number, required: true, max: 100},
    vendor: {type: String, required: true},
    dbname: {type: String, required: true},
    backupDate: {type: Date, required: true},
    elapsedTimeMin: {type: Number, required: true},
    backupSizeMb: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Backup', BackupSchema);
