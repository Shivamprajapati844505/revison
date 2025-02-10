const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection error:", err));

//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("form.ejs");
});

//create route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat was saved.");
    })
    .catch((err) => {
      console.log("err in chat", err);
    });
    res.redirect("/chats");
});

//

app.get("/", (req, res) => {
  res.send("root is working..");
});

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});
