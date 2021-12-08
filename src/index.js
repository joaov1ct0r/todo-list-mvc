const express = require("express");

const PORT = 3000;

const app = express();

const routes = require("./routes/api");

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
