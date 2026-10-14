# La Liga Quiz Challenge

A small, polished football trivia web app about Spanish football — clubs, legends, records, stadiums, and El Clásico moments.

Answer 10 randomized multiple-choice questions with a 15-second timer each, get instant right/wrong feedback with a short explanation, then see your final score, accuracy, and a full answer review.

## Features

- **Difficulty levels:** Easy, Medium, and Hard, each drawing from its own part of the question bank.
- **36-question bank:** questions spread across real, checkable La Liga facts.
- **10 questions per round:** randomly selected with no repeats in a round.
- **Shuffled answers:** option order is randomized every question.
- **15-second timer:** counts down per question, stops when you answer, and auto-advances (0 points) if time runs out.
- **Instant feedback:** the correct answer is highlighted green, a wrong pick red, plus a short factual explanation.
- **Scoring:** 10 points per correct answer, 100 points maximum.
- **Results screen:** final score out of 100, correct/incorrect counts, accuracy %, and a personalized message.
- **Review Answers:** every question shown with your answer, the correct answer, and the explanation.
- **Play Again:** fully resets the game.
- **Responsive:** works on desktop and mobile.

## Categories covered

Real Madrid, FC Barcelona, Atlético Madrid, legendary La Liga players, La Liga history and records, Spanish football stadiums, and El Clásico.

## How to run

No build step, no dependencies.

1. Open the project folder.
2. Double-click `index.html` (or right-click it and choose "Open with" your browser).

Optional: serve it locally instead, for example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Tech

- HTML
- CSS
- Vanilla JavaScript

No backend, no database, no frameworks, no external libraries, and no API keys. Everything runs in the browser. Game state is kept in memory only and resets when you reload or click Play Again.

## Project structure

```
la-liga-quiz/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — the page shell and the three screens (Welcome, Quiz, Results) plus the Review view.
- `style.css` — the dark football-pitch theme and responsive layout.
- `script.js` — the question bank, game logic, and rendering.

## Notes

- Question and answer text uses real, verified La Liga facts.
- No copyrighted club logos, crests, badges, or player photographs are used. The interface relies on text, color, and simple shapes only.

## Credits

Built by Shlok Solanki as a beginner portfolio project using the KDBM Lite method (Spec → Build → Check → Ship).