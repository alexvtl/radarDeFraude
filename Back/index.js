const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {});

app.listen(port, () => {
  console.log(`connexion au port${port}`);
});
