const db = require('../config/db');

class User {
    static findAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    // Add other methods as needed
}

module.exports = User;
