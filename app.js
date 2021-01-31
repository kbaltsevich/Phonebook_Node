const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter')



app.use('/api/users', userRouter)

app.listen(3000, () => console.log('Server started port 3000'))