const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Elvin-Yuzbayov:FSFjmuJH4iH4yKRr@cluster0.wcm7rml.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = connectDB;