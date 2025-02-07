const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID || "NNgjQT4S#t894nP-sBcY3d04gjLD78UhRKUBqNPE6nzVV7w6opYU",
};


