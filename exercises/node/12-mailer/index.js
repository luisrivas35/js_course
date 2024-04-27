import "dotenv/config";
import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import nodemailer from "nodemailer";
import Jimp from "jimp";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
app.set("layoutsDir", path.join(__dirname, "layouts"));
app.set("partialsDir", path.join(__dirname, "partials"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("example");
});

app.get("/image", async (req, res) => {
  try {
    const imageUrl = req.query.imageUrl;
    if (!imageUrl) {
      throw new Error("Image missing");
    }

    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");
    const image = await Jimp.read(buffer);
    image.resize(500, 500).quality(60).greyscale();

       
    const fileName = `${uuidv4()}.jpeg`;
    const imagePath = path.join(__dirname, "public", "images", fileName);
    await image.writeAsync(imagePath);
    
    const imageUrlToShow = `/images/${fileName}`;
    
    res.render("image-view", { imageUrlToShow });
  } catch (error) {
    console.error("Error capturing image:", error);
    return res
      .status(500)
      .json({ ok: false, error: "Error capturing image. Please try again." });
  }
});



app.get("/email/send", async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transport.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      html: "<b>Hello world?</b>",
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ ok: false, error: "Error sending email. Please try again." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
