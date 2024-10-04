import express from "express";
import cors from "cors";
import { authorRouter } from "./routes/author.router";
import { connectToDatabase } from "./database";
import { authRouter } from "./routes/auth.router";

import dotenv from "dotenv";
dotenv.config();
import { categoryRouter } from "./routes/category.router";
import { productRouter } from "./routes/product.router";
import { orderRouter } from "./routes/order.router";
import { userRouter } from "./routes/user.router";
import { authMiddleware } from "./middlewares/auth.middleware";

import Multer, { memoryStorage } from "multer";
import { v2 as cloudinary } from "cloudinary";

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello" });
});

// app.use(authMiddleware);

app.use("/author", authorRouter);
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();

const upload = Multer({
  storage,
});

async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return res;
}

// app.post("/upload", upload.single("image"), async (req, res) => {
//   if (!req.file) return res.status(400).send("No file uploaded.");

//   try {
//     const b64 = Buffer.from(req.file.buffer).toString("base64");
//     let dataURI = "data:" + req.file.mimetype + "base64," + b64;
//     const cldRes = await handleUpload(dataURI);
//     res.json(cldRes);
//   } catch (error) {
//     console.log(error);
//   }
// });

const uploadImgs: string[] = [];

app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    console.log("no file");
    return res.status(400).send("No file uploaded.");
  }

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const cloudinaryResponse = await handleUpload(dataURI);

    uploadImgs.push(cloudinaryResponse.url);

    res.json(cloudinaryResponse);
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).send("Failed to upload image.");
  }
});

// Зурагнуудыг авах GET хүсэлт
app.get("/upload", (_req, res) => {
  try {
    res.json(uploadImgs);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching images");
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
