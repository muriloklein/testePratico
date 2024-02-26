const express = requeri("express");

const app = express();

app.use(express.json());

app.get("/contacts", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log("Server Up"));
