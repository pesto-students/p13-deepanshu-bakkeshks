const Asset = require('../models/assetModel');

exports.getAllAssets = async (req, res) => {
    try {
        const assets = await Asset.findAll();
        res.json(assets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

 

exports.createAsset = async (req, res) => {
    // Implement logic to create a new asset
};

exports.updateAsset = async (req, res) => {
    // Implement logic to update an asset
};

exports.deleteAsset = async (req, res) => {
    // Implement logic to delete an asset
};