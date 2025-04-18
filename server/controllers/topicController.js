const db = require('../mysql/mysql');  // you imported as 'connection', change it to 'db'

// Get all topics, subtopics, and problems
const getTopics = (req, res) => {
    const query = `
        SELECT 
            p.id AS problem_id,
            t.name AS topic_name,
            s.name AS subtopic_name,
            p.name AS problem_name,
            p.youtube_link,
            p.leetcode_link,
            p.article_link,
            p.level,
            p.completed
        FROM problems p
        INNER JOIN subtopics s ON p.subtopic_id = s.id
        INNER JOIN topics t ON s.topic_id = t.id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching topics:', err);
            res.status(500).json({ error: 'Failed to fetch topics' });
        } else {
            res.json(results);
        }
    });
};

// Update the completed status of a problem
const updateProblemStatus = (req, res) => {
    const { problemId } = req.params;
    const { completed } = req.body;

    const query = 'UPDATE problems SET completed = ? WHERE id = ?';
    db.query(query, [completed ? 1 : 0, problemId], (err, result) => {
        if (err) {
            console.error('Error updating problem:', err);
            res.status(500).json({ error: 'Failed to update problem' });
        } else {
            res.json({ message: 'Problem updated successfully' });
        }
    });
};



module.exports = { getTopics, updateProblemStatus };


