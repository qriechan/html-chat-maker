import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { suggestionText } = req.body;

        if (!suggestionText) {
            return res.status(400).json({ notification: "Please don't leave the contents blank!" });
        }

        try {
            const result = await sql`
                INSERT INTO feedback (text, status, timestamp) 
                VALUES (${suggestionText}, 'unread', NOW())
                RETURNING *;
            `;

            return res.status(200).json({ 
                notification: 'Feedback submitted successfully.', 
                feedback: result.rows[0] 
            });
        } catch (error) {
            console.error('Error submitting feedback:', error);
            return res.status(500).json({ notification: 'Failed to submit feedback!' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
