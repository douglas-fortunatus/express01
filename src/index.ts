import express, { json, urlencoded } from "express";
import productRouter from "./routes/products";

const port = 3000;

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World, hold up my 🍺!");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
