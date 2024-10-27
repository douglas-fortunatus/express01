import express from "express";
import productRouter from "./routes/products";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, hold up my 🍺!");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
