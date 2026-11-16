# Jidr · جذر

A small installable web app for learning Arabic through roots and patterns: letters grouped by shape and by sound, syllables, high-frequency words and everyday phrases, with drills and spaced review. It runs fully offline once opened, and progress stays on the device.

- `index.html` — the app
- `course.js` — the lessons (letters, steps, words, phrases, patterns, easy-reading texts, fun facts)
- `record.html` — a page for a native speaker to record pronunciations (`record.html?speaker=2` for a second voice)
- `sw.js`, `manifest.webmanifest`, `icons/` — offline support and app install
- `fonts/` — self-hosted fonts

## Licenses

Different parts of this project are under different licenses:

| Part | License |
|---|---|
| Code: `index.html`, `record.html`, `sw.js`, `manifest.webmanifest` | [GNU AGPL-3.0-or-later](LICENSE) |
| Course content: `course.js` (lesson selection, order, explanations, translations) | [CC BY-NC-SA 4.0](LICENSE-CONTENT.txt) |
| Fonts in `fonts/` (Amiri, Onest, Unbounded) | SIL Open Font License 1.1, see `fonts/LICENSE-*.txt` |
| Audio recordings (`jidr-audio.json`, `jidr-audio-2.json`, if present) | Not licensed. All rights remain with the person who recorded them. |

In short:
- **Code:** you may use, change and share it, including on a server, as long as your changed version stays under the AGPL and its source is offered to its users.
- **Lessons:** you may share and adapt them for non-commercial purposes, with credit, under the same license.
- **Recordings:** do not reuse them without the speaker's permission.

## How it was made

Built with AI assistance (Claude, by Anthropic). The design, learning approach, lesson selection and every change were directed, reviewed and curated by natmartem. Purely machine-written parts may not be protected by copyright in some countries; the licenses above apply to everything that is.

Copyright © 2026 natmartem.
