const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  console.log("MongoDB connected successfully");

  let chat1 = new Chat({ 
      from: "neha",
      to: "priya",
      msg: "send me your notes",
      created_at: new Date()
  });

  try {
      let res = await chat1.save();
      console.log("Data was saved..", res);
  } catch (err) {
      console.log("Error", err);
  }
}

main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("root is working..");
});

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});
