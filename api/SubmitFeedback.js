const { Client } = require('pg');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { suggestionText } = req.body;

        if (!suggestionText) {
            return res.status(400).json({ notification: 'Feedback text is required' });
        }

        const client = new Client({
            connectionString: process.env.POSTGRES_URL, 
            ssl: {
                rejectUnauthorized: false, 
            },
        });

        try {
            await client.connect();

            const query = 'INSERT INTO feedback (text, status) VALUES ($1, $2) RETURNING *';
            const values = [suggestionText, 'unread'];
            const result = await client.query(query, values);

            await client.end();

            return res.status(200).json({ notification: 'Feedback submitted successfully', feedback: result.rows[0] });
        } catch (err) {
            console.error('Error submitting feedback:', err);
            await client.end();
            return res.status(500).json({ notification: 'Failed to submit feedback' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
