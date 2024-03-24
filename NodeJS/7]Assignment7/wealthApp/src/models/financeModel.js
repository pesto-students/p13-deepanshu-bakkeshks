const db = require('../config/db');

class Finance {
    static findAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM finance', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    // Add other methods as needed
}

module.exports = Finance;
