import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { project, firstName, lastName, phone, cityCountry, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or use another email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password
      },
    });

    try {
      // Send email using nodemailer
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: 'owner@example.com', // list of receivers
        subject: `New Inquiry from ${firstName} ${lastName}`, // Subject line
        text: `
          Project: ${project}
          Name: ${firstName} ${lastName}
          Phone: ${phone}
          Location: ${cityCountry}
          Email: ${email}
          Message: ${message}
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
