export default async function (req, res) {
  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls: { rejectUnauthorized: false },
    auth: {
      user: 'bakybereket.web@gmail.com',
      pass: 'bakyPa$$word123',
    },
  })
  const nda = req.body.NDA ? 'Да' : 'Нет'
  const message = {
    from: `Email <bakybereket.web@gmail.com>`,
    to: 'bakybereket@gmail.com',
    subject: 'Cвяжитесь с нами',
    text: `Mail: ${req.body.Email} \nNumber: ${req.body.Number} \nMessage: ${req.body.Message} \nЯ согласен на получение ответа и рассылок на эл. почту: ${nda}`,
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
