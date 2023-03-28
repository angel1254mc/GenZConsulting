const sgMail = require('@sendgrid/mail');


// use sgMail API key
sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async function handler(req, res) {
  const { email, subject = "Business Inquiry", body, firstName, lastName } = req.body

  // Costruct message to send sgMail
  const msg = {
    to: process.env.EMAIL,
    from: "apol@emergingtech.co",
    subject,
    name: firstName + " " + lastName,
    text: body + `\n Email: ${email}`,
  };

  // Try sending the email, otherwise print an error and return an error to the client.
  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error sending email' })
  }
}