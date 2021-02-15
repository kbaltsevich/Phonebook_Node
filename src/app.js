const express = require("express");
const app = express();
const userRouter = require("../routes/userRouter");
const areaRouter = require('../routes/areaRouter')
const cors = require('cors')

app.use('*', cors())

app.use("/api/users", userRouter);
app.use('/api/area', areaRouter)

app.listen(5000, () => console.log("Server started port 5000"));
