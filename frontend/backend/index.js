const express = require("express");
require("dotenv").config();
const cors = require("cors");
const registerRouter = require("./routers/register");
const loginRouter = require("./routers/login");
const itemRouter = require("./routers/items");

// const roleRouter = require("./routers/roleRouter");
// const donteRouter = require("./routers/donerGivingRouter");
// const needyCaseRouter = require("./routers/needyCaseRouter");
// const categoryRouter = require("./routers/categoryRouter");
// const adminRouter = require("./routers/adminRouter");
// const emailRouter = require("./routers/emailRouter");

const app = express();
















//built-in middleware
app.use(express.json());


app.use(cors());

// router middleware
app.use("/register", registerRouter);
// app.use("/categories", categoryRouter);
 app.use("/login", loginRouter);
app.use("/getItem",itemRouter)











const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

