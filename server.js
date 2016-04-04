var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    port = 8000,
    leagueCtrl = require('./controllers/leagueCtrl'),
    app = express(),
    mongoUri = 'mongodb://localhost:27017/elo';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post('/api/league', leagueCtrl.addLeague);
app.post('/api/unit', leagueCtrl.addUnit);

app.get('/api/league', leagueCtrl.getLeague);

app.put('/api/league', leagueCtrl.editLeague);
app.put('/api/unit', leagueCtrl.editUnit);

app.delete('/api/league', leagueCtrl.deleteLeague);
app.delete('/api/unit', leagueCtrl.deleteUnit);

app.listen(port, function () {
    console.log('listening on port ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('connected to mongod at ' + mongoUri);
});