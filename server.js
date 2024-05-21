const express = require("express");
const bodyParser = require("body-parser");
const proxyRoutes = require("./routes/proxy");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Proxy Server is Running");
});

app.use("/proxy", proxyRoutes);

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
