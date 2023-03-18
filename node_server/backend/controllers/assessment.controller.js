const { pool } = require('../app');
const alienvault = require('../services/alienvault');

const assessUrl = async (req, res) => {
    try {
        const url = req.params.url;
        const report = await alienvault.assessUrl(url);

        // Insert short report
        let conn = await pool.getConnection();
        await conn.query('INSERT INTO assessmentReport (pulseCount, malwareCount) VALUES' +
            '(?, ?)', [report.pulseCount, report.malwareCount]);
        conn.release();

        return res.status(200).json(report);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports = {
    assessUrl
}
