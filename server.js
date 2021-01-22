const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// pathLoaction Strategy
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})
console.log('Console Listening');
// app.use(express.static(__dirname + '/dist/npc-app'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/npc-app/index.html'));});
// app.listen(process.env.PORT || 8080);
