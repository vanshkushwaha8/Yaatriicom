import nodemailer from 'nodemailer';

const sendEmail = (tour) => {
  const transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ujjwalkumaroyy@gmail.com',
      pass: '7798992187'
    }
  });

  const mailOptions = {
    from: 'ujjwalkumaroyy',
    to: 'jay1414@gmail.com',
    subject: 'Tour update notification',
    text: `A change has been made to the ${tour} tour.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default sendEmail;