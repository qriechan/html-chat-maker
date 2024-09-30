import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ notification: 'Username and password are required!' });
        }

        try {
            const result = await sql`SELECT * FROM users WHERE username = ${username}`;
            const user = result.rows[0];

            if (!user) {
                return res.status(401).json({ notification: 'Invalid username or password!' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ notification: 'Invalid username or password!' });
            }

            return res.status(200).json({ notification: 'Login successful!', user });
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ notification: 'Failed to login.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
