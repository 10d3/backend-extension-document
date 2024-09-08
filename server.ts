import type { Request, Response } from "express";
import { processDocument } from "./vision";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3050;


app.use(bodyParser.json());

app.get("/api", (req: Request, res: Response) => {
  res.send({
    Intro: "Welcome to extension-backend!",
    routes: ["/", "/documentScan"],
    parameters: [{ route: "/documentScan", parameters: ["file"] }],
    responseFormats: ["JSON"],
    reponseStructure: "Object",
  });
});

app.post("/api/documentScan", async (req: Request, res: Response) => {
  const { file } = req.body;
//   console.log(req.body)

  if (!file) {
    return res.status(400).send("No file provided");
  }

  try {
    const response = await processDocument(file);
    return res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
