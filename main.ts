import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Sorry - my cron job ran on time. It just ran on February 30th.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
// Read back and verify: the entry must be exactly the 62-byte line.
const back = readFileSync(outFile, "utf8");
if (back !== line || Buffer.byteLength(back, "utf8") !== 62) {
  throw new Error("entry.txt verification failed");
}
