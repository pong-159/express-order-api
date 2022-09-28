import express from "express";

import { router as usermgmtRouter } from "./src/routes/usermgmtRoute.js";

import bodyParser from "body-parser";

const PORT = 8888;

const app = express();

app.use(bodyParser.json());

app.use("/api", usermgmtRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(PORT, () => {
  console.log(`app customers listening at ${PORT}`);
});
