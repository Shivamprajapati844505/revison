const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection error:", err));

//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
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

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async(req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  console.log(newMsg)
  let chat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidater: true, new: true }
  );
  console.log(chat);
  res.redirect("/chats");
});

//delete route
app.delete("/chats/:id", async(req,res)=>{
  let {id} = req.params;
  let deleteChat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});


app.get("/", (req, res) => {
  res.send("root is working..");
});

app.listen(8080, () => {
  console.log(`server is listening on port:8080`);
});
