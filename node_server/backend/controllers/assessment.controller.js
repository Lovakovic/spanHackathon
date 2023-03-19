const { pool } = require('../app');
const alienvault = require('../services/alienvault');
const safebrowsing = require('../services/safebrowsing');

const getAssessment = async (req, res) => {
    try {
        const url = req.params.url;
        console.log(`Assessing threat risk of url: ${url}`)
        let report = await alienvault.assess(url);

        // Insert short report
        let conn = await pool.getConnection();
        await conn.query('INSERT INTO assessmentReport (pulseCount, malwareCount) VALUES' +
            '(?, ?)',
            [report.pulseCount || 0, report.malwareCount || 0]);
        conn.release();

        // Get a more detailed report
        if(report.pulseCount || report.malwareCount) {
            report = {
                ...report,
                matches: await safebrowsing.assess(url).matches
            };
        }

        return res.status(200).json(report);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
};

const getAssessments = async (req, res) => {
    try {
        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM assessmentReport');
        conn.release();


        return res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports = {
    getAssessments,
    getAssessment
}
