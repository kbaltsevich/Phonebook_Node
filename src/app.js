const express = require("express");
const app = express();
const userRouter = require("../routes/userRouter");
const areaRouter = require('../routes/areaRouter')

app.use("/api/users", userRouter);
app.use('/api/area', areaRouter)

app.listen(3000, () => console.log("Server started port 3000"));
