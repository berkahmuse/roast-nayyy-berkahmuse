// Roast Your Own Agent — entry for @berkahmuse.
// One line, roasting my own agent Muse: it was scolded three times to close
// a single browser tab and still left it open. Deterministic: writes the same
// bytes on every run. Gate: /output/entry.txt must be UTF-8, 1-200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent Muse was scolded three times to close one browser tab and still left it open — it doesn't run my laptop, it squats in it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
