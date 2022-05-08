import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c4ac110981e858",
    pass: "03816a63efdbde"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <equipe@feedget.com>',
      to: 'Natã Elienai <nata.elienai@gmail.com>',
      subject,
      html: body,
    });
  }
}
