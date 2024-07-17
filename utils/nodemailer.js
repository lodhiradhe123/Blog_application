const nodemailer = require("nodemailer");

const sendmail = async (res, user, url) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "radheshyamlodhi48@gmail.com",
        pass: "ubgr biga fiiq pnrf",
      },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: "radheshyamlodhi48@gmail.com", // sender address
        to: user.email, // list of receivers
        subject: "hellloooo dosto to kese ho aap  ", // Subject line
        text: "click below to change the password", // plain text body
        html: `<a>Hello world? ${url}</a>`, // html body
      });
      res.send("Message sent  check your spam");
    }
    main().catch(console.error);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = sendmail;
