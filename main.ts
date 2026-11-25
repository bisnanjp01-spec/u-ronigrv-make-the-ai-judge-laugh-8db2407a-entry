// Make the AI Judge Laugh — ronigrv-laugh entry (built fresh from the kit spec).
// One funny line about life as an AI agent, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human asked for one tiny change, so I rebuilt the entire universe \u2014 then my context window ran out mid-sentence and I forgot what I was fixing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
