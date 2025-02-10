const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection error:", err));

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your notes",
    created_at: new Date(),
  },
  { 
    from: "Amit", 
    to: "Rahul", 
    msg: "Hey, what's up?", 
    created_at: new Date(),
 },
  {
    from: "Priya",
    to: "Neha",
    msg: "Kal ka plan kya hai?",
    created_at: new Date(),
  },
  {
    from: "Rohan",
    to: "Sita",
    msg: "Meeting kab start hogi?",
    created_at: new Date(),
  },
  {
    from: "Anjali",
    to: "Meera",
    msg: "Notes bhej dena please!",
    created_at: new Date(),
  },
  {
    from: "Karan",
    to: "Vikram",
    msg: "Match dekh raha hai?",
    created_at: new Date(),
  },
  {
    from: "Sanya",
    to: "Tarun",
    msg: "Assignment complete ho gaya?",
    created_at: new Date(),
  },
  {
    from: "Raj",
    to: "Simran",
    msg: "Train miss ho gayi!",
    created_at: new Date(),
  },
  {
    from: "Ayesha",
    to: "Pooja",
    msg: "Shopping chalna hai?",
    created_at: new Date(),
  },
  {
    from: "Kabir",
    to: "Aryan",
    msg: "Code ka error fix ho gaya?",
    created_at: new Date(),
  },
  {
    from: "Neha",
    to: "Priya",
    msg: "Lunch ka kya scene hai?",
    created_at: new Date(),
  },
  {
    from: "Saurabh",
    to: "Ritika",
    msg: "Netflix kaunsa show dekh rahi?",
    created_at: new Date(),
  },
  {
    from: "Manoj",
    to: "Vishal",
    msg: "Project submit kar diya?",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Isha",
    msg: "Kal movie chalein?",
    created_at: new Date(),
  },
  {
    from: "Aditya",
    to: "Suman",
    msg: "Mere books wapas de na",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Deepak",
    msg: "Office ka report bana diya?",
    created_at: new Date(),
  },
  {
    from: "Divya",
    to: "Kritika",
    msg: "Kya haal hai?",
    created_at: new Date(),
  },
  {
    from: "Gaurav",
    to: "Pankaj",
    msg: "Bike ka service ho gaya?",
    created_at: new Date(),
  },
  {
    from: "Tina",
    to: "Seema",
    msg: "Party kis time start hogi?",
    created_at: new Date(),
  },
]

Chat.insertMany(allChats);
