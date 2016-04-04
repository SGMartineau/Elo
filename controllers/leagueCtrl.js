var League = require('../models/league');

module.exports = {
    
    addLeague (req, res) {
        new League(req.body).save((err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    },
    
    addUnit (req, res) {
        League.findById(req.query.league, (err, league) => {
            if (err) {
                res.status(500).send(err);
            } else {
                league.units.push(req.body);
                league.save(function (err, data) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    },
    
    getLeague (req, res) {
        if (req.query.league) {
            League.findById(req.query.league, (err, league) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(league);
                }
            })
        } else {
            League.find().then( (response) => {
                res.send(response);
            })
        }
    },
    
    
    editLeague (req, res) {
        League.findByIdAndUpdate(req.query.league, req.body, {new: true}, (err, league) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(league);
            }
        })
    },
    
    editUnit (req, res) {
        League.findById(req.query.league, (err, league) => {
            if (err) {
                res.status(500).send(err);
            } else {
                for (var i = 0; i < league.units.length; i++) {
                    if (req.body._id.toString() === league.units[i]._id.toString()) {
                        league.units[i].name = req.body.name;
                        league.units[i].games = req.body.games;
                        league.units[i].rating = req.body.rating;
                        league.save( (err, data) => {
                            if (err) {
                                res.status(500).send(err);
                            } else {
                                console.log(data);
                                res.status(200).send(data);
                            }
                        })
                    }
                }
            }
        })
    },
    
    deleteLeague (req, res) {
        League.findByIdAndRemove(req.query.league, function (err, deleted) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(deleted);
            }
        })
    },
    
    deleteUnit (req, res) {
        League.findById(req.query.league, (err, league) => {
            if (err) {
                res.status(500).send(err);
            } else {
                for (var i = 0; i < league.units.length; i++) {
                    if (league.units[i]._id.toString() === req.query.unit) {
                        league.units.splice(i, 1);
                        league.save( (err, data) => {
                            if (err) {
                                res.status(500).send(err);
                            } else {
                                res.status(200).send(data);
                            }
                        })
                    }
                }
            }
        })
    }
    
}