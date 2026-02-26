import express from "express";
import { spawn } from "child_process";

const app = express();
app.use(express.json());

// Start engine when server starts
const engine = spawn("./build/chen");

engine.stdout.on("data", (data) => {
  const output = data.toString();
  console.log(`Engine Output Test: ${output}`);
});

// Send uci commands
app.post("/move", (req, res) => {
  const { fen, depth } = req.body;
  engine.stdin.write(`position fen ${fen}\n`);
  engine.stdin.write(`go depth ${depth}\n`);

  res.json({ status: "calculating" });
});

app.listen(4000, () => console.log("Engine wrapper running at port 4000"));
