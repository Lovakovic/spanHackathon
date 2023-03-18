const { pool } = require('../app');

const getAllEvents = async (req, res) => {
    try {
        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM maliciousEvent');
        conn.release();

        return res.json('success!');
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports = {
    getAllEvents
};

