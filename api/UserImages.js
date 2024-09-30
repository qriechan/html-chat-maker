import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { userId } = req.query;

        try {
            const result = await sql`SELECT * FROM userimages WHERE user_id = ${userId};`;
            return res.status(200).json({ images: result.rows });
        } catch (error) {
            console.error('Error fetching images:', error);
            return res.status(500).json({ notification: 'Failed to fetch images' });
        }
    } else if (req.method === 'POST') {
        const { userId, imageLink, imageName } = req.body;
    
        if (!userId || !imageLink || !imageName) {
            return res.status(400).json({ notification: 'All fields are required' });
        }
    
        try {
            await sql`
                INSERT INTO userimages (user_id, image_url, name)
                VALUES (${userId}, ${imageLink}, ${imageName});
            `;
            return res.status(201).json({ notification: 'Image added successfully' });
        } catch (error) {
            console.error('Error adding image:', error);
            return res.status(500).json({ notification: 'Failed to add image' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
}
