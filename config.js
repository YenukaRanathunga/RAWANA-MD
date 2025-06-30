const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "tm9DjS4Y#u2zLMGsxiLXLd6s-oZN2aGfXykg1jL0_XYKh1Hsl2Q0":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:quCNimqLfAodskIgVRRlZzAaJMDNSPIF@shinkansen.proxy.rlwy.net:25638",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
