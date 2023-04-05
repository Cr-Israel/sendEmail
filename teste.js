const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 3000;


const user = "teste.cadastro23@hotmail.com";
const pass = "password of e-mail";



app.get('/', (req, res) => res.send('Hello World!'))


app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",                                             // é o SMTP
        port: 587,                                             // porta do envio de e-mail
        auth: { user, pass }
    })

    transporter.sendMail({
        from: user,
        to: "teste.desenvolvimento07@gmail.com",
        replyTo: "teste.desenvolvimento07@gmail.com",
        subject: "Olá, seja bem vindo!",
        text: "Fala, Pelicana Ana!"
    }).then(info => {
        res.send(info);
    }).catch(error => {
        res.send(error);
    });
});

app.listen(port, () => console.log(`Running on port ${port}!`));

