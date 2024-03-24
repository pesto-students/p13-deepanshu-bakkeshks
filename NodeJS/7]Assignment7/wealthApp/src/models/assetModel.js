const db = require('../config/db');

class Asset {
    static findAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM assets', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    // Add other methods as needed
}

module.exports = Asset;
