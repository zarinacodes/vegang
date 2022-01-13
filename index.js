const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
