const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is running ");
});

app.post("/user", (req, res) => {
  const user = req.body.username;
  console.log(user);
  res.json({ user });
});

app.listen(PORT, () => {
  console.log(`server is listening in ${PORT}`);
});
