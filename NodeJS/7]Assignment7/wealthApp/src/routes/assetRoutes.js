const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.get('/assets', assetController.getAllAssets);
router.post('/assets', assetController.createAsset);
router.put('/assets/:id', assetController.updateAsset);
router.delete('/assets/:id', assetController.deleteAsset);

module.exports = router;
