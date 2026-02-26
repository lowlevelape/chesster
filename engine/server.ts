import express from "express";
import cors from "cors";
import { spawn } from "child_process";

const app = express();
app.use(express.json());
app.use(cors());

// Start engine once
const engine = spawn("./build/chen");
engine.stdin.write("uci\n");

let isThinking = false;

app.post("/move", async (req, res) => {
  const { fen, depth = 10 } = req.body;

  if (isThinking) {
    return res.status(429).json({ error: "Bot is already thinking!" });
  }

  isThinking = true;
  console.log(`--- Processing FEN: ${fen} ---`);

  const getBestMove = () => {
    return new Promise((resolve) => {
      let buffer = "";

      const onData = (data: Buffer) => {
        buffer += data.toString();
        const lines = buffer.split("\n");
        for (const line of lines) {
          if (line.startsWith("bestmove")) {
            const parts = line.split(" ");
            const move = parts[1];

            engine.stdout.removeListener("data", onData);
            resolve(move.trim());
          }
        }
      };

      engine.stdout.on("data", onData);
      engine.stdin.write(`position fen ${fen}\n`);
      engine.stdin.write(`go depth ${depth}\n`);
    });
  };

  try {
    // Add a global timeout so the server doesn't hang forever
    const movePromise = getBestMove();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Engine Timeout")), 10000),
    );

    const bestMove = await Promise.race([movePromise, timeoutPromise]);

    console.log("SUCCESS: Found bestmove ->", bestMove);
    res.json({ bestmove: bestMove });
  } catch (error: any) {
    console.error("ERROR:", error.message);
    res.status(500).json({ error: error.message });
  } finally {
    isThinking = false;
  }
});

app.listen(4000, () => console.log("Engine Server running on port 4000"));
