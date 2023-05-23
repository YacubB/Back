const express = require("express");
const app = express();

const port = 6000;
app.use(require("./ind.router.js"))
app.listen(port, () => {
  console.log(`new server http://localhost:${port}`);
});

