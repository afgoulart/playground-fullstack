import bodyParser from "body-parser";
import express from "express";

import connectDB from "../config/database";
import auth from "./routes/auth";
import user from "./routes/user";
import profile from "./routes/profile";
import employee from "./routes/employee";
import winston, { ExceptionHandler } from "winston";

const logger = winston.createLogger({
  // Log only if level is less than (meaning more severe) or equal to this
  level: "info",
  // Use timestamp and printf to create a standard log format
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});


const app = express();

// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // Log an info message for each incoming request
  logger.info(`Received a ${req.method} request for ${req.url}`);
  next();
});

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

