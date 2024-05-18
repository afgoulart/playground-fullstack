import bodyParser from "body-parser";
import express from "express";

import connectDB from "../config/database";
import auth from "./routes/auth";
import user from "./routes/user";
import profile from "./routes/profile";
import employee from "./routes/employee";

const app = express();

// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// @route   GET / -> 301 /health
// @desc    Test Base API
// @access  Public
app.get('/', (req, res) => {
  res.redirect('/health')
})

app.get("/health", (_req, res) => {
  res.json({ msg: "API Running", status: 'OK' });
});

app.use("/auth", auth);
app.use("/user", user);
app.use("/profile", profile);
app.use("/employee", employee)

const port = app.get("port");
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

