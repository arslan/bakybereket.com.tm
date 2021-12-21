export default async function (req, res) {
  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    tls: { rejectUnauthorized: false },
    auth: {
      user: 'bart.prosacco38@ethereal.email',
      pass: 'wZYwqeq5dahrAktnmx',
    },
  })
  const message = {
    from: `Email <bart.prosacco38@ethereal.email>`,
    to: 'maksat.bek93@gmail.com',
    subject: 'Cвяжитесь с нами',
    text: `Number <${req.body.Number}> \n Message <${req.body.Message}>`,
  }
  try {
    await transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(`Error occurred. ${err.message}`)
      }
      console.log(info)
    })
    await res.status(200).json(req.body)
  } catch (error) {
    res.status(500)
  }
}
