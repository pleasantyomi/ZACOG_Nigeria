const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-gmail-username@gmail.com', // Replace with your Gmail username
    pass: 'your-gmail-password', // Replace with your Gmail password
  },
});

// POST route to handle message sending
app.post('/sendEmail', (req, res) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: 'your-gmail-username@gmail.com', // Replace with your Gmail username
    to: email, // Replace with the recipient's email address
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
