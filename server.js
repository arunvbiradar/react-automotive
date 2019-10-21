const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

// Define Routes
app.use("/api/makes", require("./routes/api/make"));
app.use("/api/car-model", require("./routes/api/carModel"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
