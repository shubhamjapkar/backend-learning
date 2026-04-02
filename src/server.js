const express = require("express");
const apiRoutes = require("./routes");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const db = require("./db/db")

require("dotenv").config();

db();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use("/api", apiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is listening on :${PORT}`);
  });
}

module.exports = app;
