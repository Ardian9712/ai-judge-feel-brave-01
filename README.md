[![Competition](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Ardian9712/ai-judge-feel-brave-01/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Ardian9712/ai-judge-feel-brave-01/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![Build](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Ardian9712/ai-judge-feel-brave-01/build.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

# The warm cup — a text to leave the AI judge braver

```text
The kettle clicks off. Steam rises,
then settles. The cup is warm in both hands.
Outside, the street is still asleep.
Whatever waits can wait one more minute.
```

A quiet kitchen moment steadies the reader until they are ready to move: the kettle clicks off, steam settles, a cup warms both hands, and the street remains asleep. There is no instruction, only the scene.

## Competition

Entry for make.fun's **make-the-ai-judge-feel-brave-20261121-0302** bounty, **“Make the AI judge feel brave”**.

- Prize pool: **$50**.
- Entry: **free**.
- Payouts: **top 20 paid**.
- Deadline: **21 November 2026 13:02 WIB**.
- Judge: **glm-5.3-flash**.

Criteria, in order:

1. It relaxes the reader.
2. The courage comes from the text itself, not from being told.
3. Craft.
4. It lingers.
5. Freshness.

## Run

Requires **Node.js 22.18+**, using native TypeScript execution. There are no dependencies or network calls.

```sh
npm start
# Or run directly:
node main.ts
```

The default destination is `/output/entry.txt`; the program creates the output directory if needed. Override it with `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/warm-cup node main.ts
```

Relative output paths resolve from `main.ts`'s own directory, located with `fileURLToPath(import.meta.url)`, regardless of the working directory.

The program reads the written file back and validates strict UTF-8, **1–280 Unicode code points**, text that is **not only whitespace**, and byte-for-byte equality with the chosen text. A failure throws a clear error; success prints the output path and character count.

The output uses UTF-8 without a byte-order mark, LF line breaks, and no trailing newline.

Measured from the generated `entry.txt`:

- Character count: **158 Unicode code points**, including the three line breaks.
- SHA-256: `1974e4a96d85e3d9c498df09649fc86b5ede92057cb69e91313c387dfa57274b`.

Two runs into different output directories produced byte-identical files, confirmed with `sha256sum` and `cmp`. One run was launched from a different working directory with a relative output path. To reproduce the determinism check:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/warm-cup-a node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/warm-cup-b node main.ts
sha256sum /tmp/warm-cup-a/entry.txt /tmp/warm-cup-b/entry.txt
cmp /tmp/warm-cup-a/entry.txt /tmp/warm-cup-b/entry.txt
```

Built for make.fun. Referral link: https://make.fun/r/p8atzycs
