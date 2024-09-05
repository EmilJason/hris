  import { sql } from '@vercel/postgres';

  export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { firstName, lastName, dateOfBirth, email, phoneNumber, address, jobTitle, department, salary } = req.body;

      if (!firstName || !lastName || !dateOfBirth || !email || !phoneNumber || !address || !jobTitle || !department || !salary) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      try {
        await sql`
          INSERT INTO employee (firstName, lastName, dateOfBirth, email, phoneNumber, address, jobTitle, department, salary)
          VALUES (${firstName}, ${lastName}, ${dateOfBirth}, ${email}, ${phoneNumber}, ${address}, ${jobTitle}, ${department}, ${salary})
        `;
      
        return res.status(201).json({ message: 'Employee saved successfully' });
      } catch (error) {
        console.error('Error saving employee:', error);
        return res.status(500).json({ error: 'Error saving employee' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
