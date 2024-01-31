const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------- Routes ----------
// Search
app.use("/api/items", require("./routes/items"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
