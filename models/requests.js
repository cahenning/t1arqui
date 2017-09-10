var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var requestSchema = new Schema({
    ipAddress: String,
    timestamp: Date
});
var Request = mongoose.model('Request', requestSchema);
