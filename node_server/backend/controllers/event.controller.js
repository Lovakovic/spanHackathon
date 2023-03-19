const { pool } = require('../app');

const getAllEvents = async (req, res) => {
    try {
        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM completeReport');
        conn.release();

        return res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        console.log(`Deleting event with id: ${eventId}`);


        let conn = await pool.getConnection();
        await conn.query('CALL deleteEvent(?)', [eventId]);
        conn.release();

        return res.status(200).send();
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports = {
    getAllEvents,
    deleteEvent
};

