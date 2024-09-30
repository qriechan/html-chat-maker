import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ notification: 'Username and password are required' });
        }

        try {
            const existingUser = await sql`SELECT * FROM users WHERE username = ${username}`;
            if (existingUser.rows.length > 0) {
                return res.status(409).json({ notification: 'Username already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await sql`
                INSERT INTO users (username, password)
                VALUES (${username}, ${hashedPassword});
            `;

            return res.status(201).json({ notification: 'User registered successfully' });
        } catch (error) {
            console.error('Error during signup:', error);
            return res.status(500).json({ notification: 'Failed to register user' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
