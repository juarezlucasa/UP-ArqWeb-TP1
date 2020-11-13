const Backup = require('../models/backup.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.backup_create = function (req, res, next) {
    let backup = new Backup(
        {
            id: req.body.id,
            vendor: req.body.vendor,
	    dbname: req.body.dbname,
	    backupDate: req.body.backupDate,
	    elapsedTimeMin: req.body.elapsedTimeMin,
	    backupSizeMb: req.body.backupSizeMb
        }
    );

    backup.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Backup guardado exitosamente')
    })
};


exports.backup_details = function (req, res, next) {
    Backup.findById(req.params.id, function (err, backup) {
        if (err) return next(err);
        res.send(backup);
    })
};

exports.backup_update = function (req, res, next) {
    Backup.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, backup) {
        if (err) return next(err);
        res.send('Backup Actualizado con exito');
    });
};

exports.backup_delete = function (req, res, next) {
    Backup.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Backup Eliminado exitosamente');
    })
};
