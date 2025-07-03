const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve HTML/CSS/JS

// Email handler
app.post("/send", (req, res) => {
    const { name, email, subject, message } = req.body;

    // Email transport
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sanjushree12f@gmail.com", // Replace with your Gmail
            pass: "ayad seoo mguy kqrj"    // Use App Password (not regular password)
        }
    });

    const mailOptions = {
        from: email,
        to: "sanjushree12f@gmail.com",
        subject: `Portfolio Contact Form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("EMAIL SEND ERROR:", error); // 👈 log full error
        return res.status(500).send("Error sending email.");
    } else {
        console.log("Email sent: " + info.response);
        return res.sendFile(path.join(__dirname, "public", "tick.html"));
    }
});

});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
