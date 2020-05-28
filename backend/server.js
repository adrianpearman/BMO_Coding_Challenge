// Modules
const express = require("express");
const path = require("path");
//Server Variables
const app = express();
const PORT = process.env.PORT || 3001;
const clientRoot = path.join(__dirname, "../client", "build");

// Setting Production Environment for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientRoot));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientRoot, "../client", "build", "index.html"));
  });
}

app.listen(PORT, (req, res) => {
  console.log(`Running on PORT:${PORT}`);
});
