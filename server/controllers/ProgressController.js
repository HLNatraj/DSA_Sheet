const db = require('../mysql/mysql');  

const getProgress = (req, res) => {
    const query = `
        SELECT 
            level,
            SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END) AS completed_count,
            COUNT(*) AS total_count
        FROM problems
        GROUP BY level
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching progress:', err);
            res.status(500).json({ error: 'Failed to fetch progress' });
        } else {
            res.json(results);
        }
    });
};

module.exports = { getProgress };