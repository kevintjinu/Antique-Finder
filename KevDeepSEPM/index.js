const express = require("express");
const app = express();
require("./db/mongoose");
const connectDB = require("./db/mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const productRouter = require("./routes/products");

const port = process.env.PORT || 3000;
app.use(express.json());
connectDB();

app.use(productRouter);

app.listen(port, () => {
  console.log("Wakey Wakey, Server is running on " + port);
});
