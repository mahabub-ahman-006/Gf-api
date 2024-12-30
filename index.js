const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.set("json spaces", 0x2);
const statusesData = JSON.parse(fs.readFileSync('status.json'));
app.get("/mahabubgf", (_0x1822e4, _0x3be9ef) => {
  const _0x6be6fa = Math.floor(Math.random() * statusesData.length);
  const _0x515f64 = statusesData[_0x6be6fa];
  const _0x50c070 = {
    'name': "MR᭄﹅MAHABUB﹅ メꪜ ",
    'contact': " https://www.facebook.com/www.xnxx.com140"
  };
  _0x3be9ef.json({
    'data': _0x515f64,
    'author': _0x50c070
  });
});
app.listen(0xbb8, () => {
  console.log("┌────────────────── ∘°❉°∘ ─────────────────┐");
  console.log("\n\n https://www.facebook.com/www.xnxx.com140\n\n");
  console.log("Atuhor: MR᭄﹅MAHABUB﹅ メꪜ ");
  console.log("Version: 1.0.0");
  console.log("Language: Node.js");
  console.log("Port: 3000");
  console.log("Server started");
  console.log("Servar link: https://github.com/mahabub-ahman-006/Gf-api.git");
  console.log("Server is running on port 3000");
  console.log("REPLIT ID: " + process.env.REPL_ID);
  console.log("└──────────────────── °∘❉∘° ────────────────────┘");
});
app.get('/', (_0xb2d7f0, _0xef1f9e) => _0xef1f9e.sendFile(__dirname + "/Mahabub/Mahabub.html"));
