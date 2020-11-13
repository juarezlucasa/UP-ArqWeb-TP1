const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const backup_controller = require('../controllers/backup.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', backup_controller.test);module.exports = router;

router.post('/create', backup_controller.backup_create);

router.get('/:id', backup_controller.backup_details);

router.put('/:id/update', backup_controller.backup_update);

router.delete('/:id/delete', backup_controller.backup_delete);
