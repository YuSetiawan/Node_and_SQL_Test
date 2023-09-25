const express = require('express');
const router = express.Router();
const jobController = require('../controller/job');
const {protect} = require('../middlewares/auth');

router.get('/allUser', protect, jobController.getAllJob).get('/user/:id', protect, jobController.getSelectedJob);

module.exports = router;
