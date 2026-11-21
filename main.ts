import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const text = `The kettle clicks off. Steam rises,
then settles. The cup is warm in both hands.
Outside, the street is still asleep.
Whatever waits can wait one more minute.`;

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(
  scriptDirectory,
  process.env.MAKEFUN_OUTPUT_DIR || "/output",
);
const outputPath = join(outputDirectory, "entry.txt");
const expectedBytes = Buffer.from(text, "utf8");

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, expectedBytes);

const writtenBytes = readFileSync(outputPath);
let writtenText: string;
try {
  writtenText = new TextDecoder("utf-8", { fatal: true }).decode(writtenBytes);
} catch (cause) {
  throw new Error(`Invalid entry at ${outputPath}: expected valid UTF-8 text.`, {
    cause,
  });
}

const characterCount = [...writtenText].length;
if (characterCount < 1 || characterCount > 280) {
  throw new Error(
    `Invalid entry at ${outputPath}: expected 1–280 Unicode code points; got ${characterCount}.`,
  );
}
if (writtenText.trim().length === 0) {
  throw new Error(`Invalid entry at ${outputPath}: text must not be only whitespace.`);
}
if (!writtenBytes.equals(expectedBytes)) {
  throw new Error(`Invalid entry at ${outputPath}: bytes differ from the chosen text.`);
}

console.log(`Wrote ${outputPath} (${characterCount} Unicode code points).`);
