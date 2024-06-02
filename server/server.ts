import express, { Express, Request, Response } from "express";
import cors from "cors";
import fs from "fs";

const app: Express = express();
app.use(express.json());

const port: number = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// use middleware to server static images
app.use(express.static("public"));

// read data from file
const imagesDataRaw = fs.readFileSync("./images.json", "utf-8");
const imagesData = JSON.parse(imagesDataRaw);

app.get("/saerom", (req: Request, res: Response) => {
  res.json(imagesData.saerom);
  console.log(imagesData.saerom);
});

app.get("/hayoung", (req: Request, res: Response) => {
  res.json(imagesData.hayoung);
});

app.get("/jiwon", (req: Request, res: Response) => {
  res.json(imagesData.jiwon);
});

app.get("/jisun", (req: Request, res: Response) => {
  res.json(imagesData.jisun);
});

app.get("/seoyeon", (req: Request, res: Response) => {
  res.json(imagesData.seoyeon);
});

app.get("/chaeyoung", (req: Request, res: Response) => {
  res.json(imagesData.chaeyoung);
});

app.get("/nagyung", (req: Request, res: Response) => {
  res.json(imagesData.nagyung);
});

app.get("/jiheon", (req: Request, res: Response) => {
  res.json(imagesData.jiheon);
});

app.get("/backGround", (req: Request, res: Response) => {
  res.json(imagesData.backGround);
});

if (require.main === module) {
  app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = app;
