const express = require("express");
const connectDB = require("./db.js");
const itemModel = require("./models/item");
const usersModel = require("./models/users");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.get("/items", async (req, res) => {
  try {
    const items = await itemModel.find();
    return res.json({ items });
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await usersModel.find();
    return res.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("App is running");
});
