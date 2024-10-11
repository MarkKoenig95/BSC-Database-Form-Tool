const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const database = require("./routes/database");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/database", database);

if (process.env.PRODUCTION) {
  app.use(express.static(path.join(__dirname, "..", "build")));
}

app.use("*", routes);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
module.exports.server = server;
