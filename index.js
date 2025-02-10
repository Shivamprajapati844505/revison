const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection error:", err));



  //Index Route
app.get("/chats",async(req,res)=>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
  res.render()
});

app.get("/", (req, res) => {
  res.send("root is working..");
});

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});
