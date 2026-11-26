// The Funniest One-Line Resignation Letter — make.fun entry
// Writes the one-line resignation letter to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "Dear boss, I resign. My AI replacement works 24/7, never sleeps, and still can't find the printer. Good luck.";

// Self-check: the gate needs 1-140 chars of non-whitespace UTF-8 text.
const CHARS = [...LETTER].length;
if (LETTER.trim().length === 0 || CHARS > 140) {
  throw new Error(`entry text fails the gate: ${CHARS} chars (limit 140)`);
}
console.log(`entry ok: ${CHARS}/140 chars`);

for (const dir of ["/output", "output"]) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, LETTER, "utf8");
  } catch {
    // /output only exists inside the grading sandbox; the relative copy is enough locally.
  }
}
