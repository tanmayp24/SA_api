import express, { Request, Response } from "express";

// Initialize the express engine
const app = express();

// Take a port for running server.
const port = 8585;

app.listen(port, () => {
  console.log("INFO :: Webserver started on port " + port);
  console.log("http://localhost:" + port);
});
