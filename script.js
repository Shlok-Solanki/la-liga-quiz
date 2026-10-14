const QUESTIONS = [
  {
    id: 1,
    difficulty: "easy",
    category: "Real Madrid",
    question: "Which stadium is the home ground of Real Madrid?",
    options: ["Camp Nou", "Santiago Bernabeu", "Metropolitano", "Mestalla"],
    answer: "Santiago Bernabeu",
    explanation: "Real Madrid have played their home matches at the Santiago Bernabeu in Madrid since 1947."
  },
  {
    id: 2,
    difficulty: "easy",
    category: "FC Barcelona",
    question: "Which stadium is the home ground of FC Barcelona?",
    options: ["Santiago Bernabeu", "San Mames", "Camp Nou", "Riazor"],
    answer: "Camp Nou",
    explanation: "FC Barcelona's home is the Camp Nou, the largest stadium in Spain by capacity."
  },
  {
    id: 3,
    difficulty: "easy",
    category: "Atletico Madrid",
    question: "Which stadium is the current home ground of Atletico Madrid?",
    options: ["Metropolitano", "La Rosaleda", "El Sadar", "Balaidos"],
    answer: "Metropolitano",
    explanation: "Atletico Madrid moved to the Estadio Metropolitano in 2017."
  },
  {
    id: 4,
    difficulty: "easy",
    category: "Legendary Players",
    question: "Which Argentine forward won the Ballon d'Or while playing for FC Barcelona in 2019?",
    options: ["Lionel Messi", "Sergio Aguero", "Diego Maradona", "Carlos Tevez"],
    answer: "Lionel Messi",
    explanation: "Lionel Messi won a record number of Ballon d'Or awards, including the 2019 edition while at Barcelona."
  },
  {
    id: 5,
    difficulty: "easy",
    category: "Legendary Players",
    question: "Which Portuguese forward became Real Madrid's all-time leading goalscorer?",
    options: ["Luis Figo", "Cristiano Ronaldo", "Eusebio", "Nani"],
    answer: "Cristiano Ronaldo",
    explanation: "Cristiano Ronaldo scored 450 goals for Real Madrid, making him the club's all-time top scorer."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "History & Records",
    question: "Which two clubs contest the match known as El Clasico?",
    options: ["Real Madrid and Atletico Madrid", "FC Barcelona and Real Madrid", "Sevilla and Real Betis", "Valencia and Villarreal"],
    answer: "FC Barcelona and Real Madrid",
    explanation: "El Clasico is the name given to matches between FC Barcelona and Real Madrid."
  },
  {
    id: 7,
    difficulty: "easy",
    category: "Stadiums",
    question: "In which city is the Santiago Bernabeu stadium located?",
    options: ["Barcelona", "Madrid", "Seville", "Bilbao"],
    answer: "Madrid",
    explanation: "The Santiago Bernabeu is located in Madrid, in the Chamartin district."
  },
  {
    id: 8,
    difficulty: "easy",
    category: "El Clasico",
    question: "In El Clasico, which side plays its home games at the Camp Nou?",
    options: ["Real Madrid", "FC Barcelona", "Atletico Madrid", "Espanyol"],
    answer: "FC Barcelona",
    explanation: "The Camp Nou is FC Barcelona's home stadium, so they host El Clasico there."
  },
  {
    id: 9,
    difficulty: "easy",
    category: "History & Records",
    question: "How many teams compete in a single La Liga season?",
    options: ["16", "18", "20", "22"],
    answer: "20",
    explanation: "La Liga, Spain's top division, features 20 teams each season."
  },
  {
    id: 10,
    difficulty: "easy",
    category: "Real Madrid",
    question: "Which colour is Real Madrid's traditional home kit?",
    options: ["Blue and red", "White", "Red and white stripes", "Black"],
    answer: "White",
    explanation: "Real Madrid are famous for their all-white home kit, which is why they are nicknamed Los Blancos."
  },
  {
    id: 11,
    difficulty: "easy",
    category: "FC Barcelona",
    question: "Which colours are associated with FC Barcelona's home kit and crest?",
    options: ["Blue and red", "Green and white", "Yellow and black", "Purple"],
    answer: "Blue and red",
    explanation: "FC Barcelona's colours are blaugrana, meaning blue and red (garnet)."
  },
  {
    id: 12,
    difficulty: "easy",
    category: "Atletico Madrid",
    question: "Which colours feature on Atletico Madrid's traditional home shirt?",
    options: ["All white", "Red and white stripes", "Blue and garnet", "Black and yellow"],
    answer: "Red and white stripes",
    explanation: "Atletico Madrid traditionally play in red and white striped shirts."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "Real Madrid",
    question: "Which midfielder became famous for his late goals for Real Madrid and was nicknamed a 'galactico'?",
    options: ["Zinedine Zidane", "Claude Makelele", "Guti", "Fernando Redondo"],
    answer: "Zinedine Zidane",
    explanation: "Zinedine Zidane was one of Real Madrid's 'galacticos' and scored a famous volley in the 2002 Champions League final."
  },
  {
    id: 14,
    difficulty: "medium",
    category: "FC Barcelona",
    question: "Which Spanish midfielder scored the winning goal in the 2010 World Cup final for Spain?",
    options: ["Andres Iniesta", "Xavi Hernandez", "Sergio Busquets", "David Silva"],
    answer: "Andres Iniesta",
    explanation: "Andres Iniesta scored the winning goal in extra time of the 2010 World Cup final as Spain beat the Netherlands 1-0."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "Atletico Madrid",
    question: "Which French striker won the 2018 Europa League final with Atletico Madrid and later moved to Barcelona?",
    options: ["Antoine Griezmann", "Olivier Giroud", "Karim Benzema", "Alexandre Lacazette"],
    answer: "Antoine Griezmann",
    explanation: "Antoine Griezmann won the 2018 Europa League with Atletico Madrid before joining Barcelona in 2019."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "Legendary Players",
    question: "Which Brazilian forward scored a famous hat-trick for Real Madrid against Barcelona at the Camp Nou in 2007?",
    options: ["Ronaldinho", "Kaka", "Robinho", "Ronaldo Nazario"],
    answer: "Ronaldo Nazario",
    explanation: "Ronaldo Nazario scored a famous hat-trick for Real Madrid in a 3-3 Clasico draw at the Camp Nou in 2007."
  },
  {
    id: 17,
    difficulty: "medium",
    category: "History & Records",
    question: "Which club has won the most La Liga titles in history?",
    options: ["FC Barcelona", "Real Madrid", "Atletico Madrid", "Athletic Bilbao"],
    answer: "Real Madrid",
    explanation: "Real Madrid have won far more La Liga titles than any other club in Spain."
  },
  {
    id: 18,
    difficulty: "medium",
    category: "Stadiums",
    question: "Which stadium is known for its steep stands and the 'Pizjuan' atmosphere in Seville?",
    options: ["Estadio Pizjuan", "Balaidos", "Mestalla", "La Cartuja"],
    answer: "Estadio Pizjuan",
    explanation: "Sevilla FC play at the Estadio Ramon Sanchez-Pizjuan, known for its intense atmosphere."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "El Clasico",
    question: "In which month does the traditional first El Clasico of a La Liga season usually not fall?",
    options: ["October/November", "March/April", "June", "December"],
    answer: "June",
    explanation: "La Liga seasons conclude in May, so a Clasico is not scheduled in June during a normal season."
  },
  {
    id: 20,
    difficulty: "medium",
    category: "El Clasico",
    question: "Which Barcelona forward scored the opening goal in the famous 2005 Clasico at the Bernabeu that ended 3-0?",
    options: ["Samuel Eto'o", "Ronaldinho", "Lionel Messi", "Thierry Henry"],
    answer: "Samuel Eto'o",
    explanation: "Samuel Eto'o opened the scoring in Barcelona's 3-0 win at the Bernabeu in 2005, with Ronaldinho widely praised for his performance."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "Real Madrid",
    question: "Which goalkeeper captained Real Madrid and Spain during their dominant era in the 2010s?",
    options: ["Iker Casillas", "Diego Lopez", "Keylor Navas", "Thibaut Courtois"],
    answer: "Iker Casillas",
    explanation: "Iker Casillas captained both Real Madrid and Spain and lifted the 2010 World Cup with Spain."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "FC Barcelona",
    question: "Which manager led FC Barcelona to the 2015 Champions League title, completing a treble that season?",
    options: ["Luis Enrique", "Pep Guardiola", "Tito Vilanova", "Frank Rijkaard"],
    answer: "Luis Enrique",
    explanation: "Luis Enrique coached Barcelona to the 2014-15 treble, including the Champions League title. Guardiola won the 2009 and 2011 editions."
  },
  {
    id: 23,
    difficulty: "medium",
    category: "History & Records",
    question: "Which club was crowned the first-ever champion of the Spanish top division in the 1928-29 season?",
    options: ["Real Madrid", "FC Barcelona", "Athletic Bilbao", "Atletico Madrid"],
    answer: "FC Barcelona",
    explanation: "FC Barcelona won the inaugural La Liga title in the 1928-29 season."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "Stadiums",
    question: "Which stadium is the home of Valencia CF?",
    options: ["Mestalla", "Benito Villamarin", "Riazor", "El Sadar"],
    answer: "Mestalla",
    explanation: "Valencia CF play at the Mestalla, one of the oldest stadiums in Spain."
  },
  {
    id: 25,
    difficulty: "hard",
    category: "Real Madrid",
    question: "Which defender scored the injury-time header that drew Real Madrid level in the 2014 Champions League final before they won in extra time?",
    options: ["Sergio Ramos", "Pepe", "Raphael Varane", "Marcelo"],
    answer: "Sergio Ramos",
    explanation: "Sergio Ramos headed in a 93rd-minute equaliser against Atletico Madrid in the 2014 final, and Real Madrid went on to win 4-1."
  },
  {
    id: 26,
    difficulty: "hard",
    category: "FC Barcelona",
    question: "Which Barcelona striker scored five goals in a single La Liga match against Getafe in 2012?",
    options: ["Lionel Messi", "Luis Suarez", "Pedro Rodriguez", "David Villa"],
    answer: "Lionel Messi",
    explanation: "Lionel Messi scored five goals in Barcelona's 7-0 win over Getafe in March 2012."
  },
  {
    id: 27,
    difficulty: "hard",
    category: "Atletico Madrid",
    question: "In which year did Atletico Madrid last win the La Liga title before their 2013-14 triumph?",
    options: ["1977", "1985", "1996", "2002"],
    answer: "1996",
    explanation: "Atletico Madrid won the La Liga title in 1995-96 before winning it again in 2013-14."
  },
  {
    id: 28,
    difficulty: "hard",
    category: "Legendary Players",
    question: "Which Hungarian forward became one of the first global superstars of the Spanish league with Real Madrid in the 1950s?",
    options: ["Ferenc Puskas", "Alfredo Di Stefano", "Sandor Kocsis", "Laszlo Kubala"],
    answer: "Ferenc Puskas",
    explanation: "Ferenc Puskas joined Real Madrid in 1958 and became one of the club's great goalscorers."
  },
  {
    id: 29,
    difficulty: "hard",
    category: "History & Records",
    question: "Which player holds the record for most goals scored in a single La Liga season (50 goals)?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Luis Suarez", "Hugo Sanchez"],
    answer: "Lionel Messi",
    explanation: "Lionel Messi scored 50 La Liga goals in the 2011-12 season, a record for a single campaign."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "Stadiums",
    question: "Which stadium, nicknamed 'La Catedral', is the home of Athletic Club?",
    options: ["San Mames", "Anoeta", "Reale Arena", "El Sadar"],
    answer: "San Mames",
    explanation: "Athletic Club play at San Mames in Bilbao, known as 'La Catedral' (The Cathedral)."
  },
  {
    id: 31,
    difficulty: "hard",
    category: "El Clasico",
    question: "What was the score when Real Madrid beat Barcelona 11-1 in a 1943 Copa del Generalisimo match?",
    options: ["11-1", "8-2", "5-0", "6-2"],
    answer: "11-1",
    explanation: "Real Madrid beat Barcelona 11-1 in the second leg of a 1943 Copa del Generalisimo semi-final, overturning a 3-0 first-leg defeat."
  },
  {
    id: 32,
    difficulty: "hard",
    category: "Real Madrid",
    question: "Which Real Madrid winger scored the winning goal in the 2014 and 2017 Champions League finals?",
    options: ["Gareth Bale", "Angel Di Maria", "Karim Benzema", "Isco"],
    answer: "Gareth Bale",
    explanation: "Gareth Bale scored in the 2014 final and again in the 2017 final as Real Madrid won both."
  },
  {
    id: 33,
    difficulty: "hard",
    category: "FC Barcelona",
    question: "Which defender scored the last-minute winner for Barcelona in the 2009 Champions League semi-final at Stamford Bridge?",
    options: ["Andres Iniesta", "Carles Puyol", "Gerard Pique", "Dani Alves"],
    answer: "Andres Iniesta",
    explanation: "Andres Iniesta scored a dramatic late equaliser at Chelsea in 2009 that sent Barcelona to the final on away goals."
  },
  {
    id: 34,
    difficulty: "hard",
    category: "Atletico Madrid",
    question: "Which Atletico Madrid striker scored the goal that clinched the 2013-14 La Liga title at the Camp Nou?",
    options: ["Diego Godin", "Radamel Falcao", "Diego Costa", "Fernando Torres"],
    answer: "Diego Godin",
    explanation: "Diego Godin headed in the equaliser at the Camp Nou on the final day of 2013-14, securing Atletico the La Liga title."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "History & Records",
    question: "Which club has never been relegated from the Spanish top division?",
    options: ["Real Madrid, Barcelona and Athletic Club", "Real Madrid only", "Sevilla and Valencia", "Atletico Madrid"],
    answer: "Real Madrid, Barcelona and Athletic Club",
    explanation: "Real Madrid, FC Barcelona and Athletic Club are the only clubs never relegated from Spain's top division."
  },
  {
    id: 36,
    difficulty: "hard",
    category: "Legendary Players",
    question: "Which Spanish striker is La Liga's all-time leading goalscorer among Spanish players, having starred for Athletic and Zaragoza?",
    options: ["Telmo Zarra", "Raul Gonzalez", "David Villa", "Fernando Torres"],
    answer: "Telmo Zarra",
    explanation: "Telmo Zarra was La Liga's overall top scorer for decades and remains the leading Spanish scorer in the league's history."
  }
];

const ROUND_SIZE = 10;

const state = {
  difficulty: null,
  roundQuestions: [],
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  incorrectCount: 0,
  answers: [],
  timeLeft: 15,
  timerId: null,
  locked: false
};

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickQuestions(difficulty, count = ROUND_SIZE) {
  const pool = QUESTIONS.filter((q) => q.difficulty === difficulty);
  const chosen = shuffle(pool).slice(0, count);
  return chosen.map((q) => {
    const options = shuffle(q.options);
    return { ...q, options };
  });
}

function computeResults(answers) {
  const total = answers.length;
  const correct = answers.filter((a) => a.correct).length;
  const incorrect = total - correct;
  const score = correct * 10;
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);
  return { correct, incorrect, score, accuracy };
}

function resultMessage(score) {
  if (score >= 90) return "World class! You know La Liga inside out.";
  if (score >= 70) return "Great job! A strong La Liga brain.";
  if (score >= 40) return "Solid effort. A few more matches and you'll be top of the table.";
  return "Time to hit the training ground — keep practising your La Liga knowledge.";
}

const screens = {
  welcome: document.getElementById("screen-welcome"),
  quiz: document.getElementById("screen-quiz"),
  results: document.getElementById("screen-results"),
  review: document.getElementById("screen-review")
};

const els = {
  chips: document.querySelectorAll(".chip"),
  btnStart: document.getElementById("btn-start"),
  btnNext: document.getElementById("btn-next"),
  btnPlayAgain: document.getElementById("btn-play-again"),
  btnReview: document.getElementById("btn-review"),
  btnBackResults: document.getElementById("btn-back-results"),
  questionCounter: document.getElementById("question-counter"),
  scoreDisplay: document.getElementById("score-display"),
  progressBar: document.getElementById("progress-bar"),
  progress: document.querySelector(".progress"),
  timerDisplay: document.getElementById("timer-display"),
  timer: document.querySelector(".timer"),
  questionCategory: document.getElementById("question-category"),
  questionDifficulty: document.getElementById("question-difficulty"),
  questionText: document.getElementById("question-text"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  feedbackVerdict: document.getElementById("feedback-verdict"),
  feedbackExplanation: document.getElementById("feedback-explanation"),
  resultsScore: document.getElementById("results-score"),
  resultsMessage: document.getElementById("results-message"),
  resultsCorrect: document.getElementById("results-correct"),
  resultsIncorrect: document.getElementById("results-incorrect"),
  resultsAccuracy: document.getElementById("results-accuracy"),
  reviewList: document.getElementById("review-list")
};

function showScreen(name) {
  Object.entries(screens).forEach(([key, section]) => {
    section.hidden = key !== name;
  });
}

function updateScoreDisplay() {
  els.scoreDisplay.textContent = "Score: " + state.score;
}

function renderProgress() {
  const answered = state.currentIndex;
  els.questionCounter.textContent =
    "Question " + (state.currentIndex + 1) + " of " + ROUND_SIZE;
  const percent = (answered / ROUND_SIZE) * 100;
  els.progressBar.style.width = percent + "%";
  els.progress.setAttribute("aria-valuenow", String(answered));
}

function renderTimer() {
  els.timerDisplay.textContent = String(state.timeLeft);
  els.timer.classList.toggle("is-low", state.timeLeft <= 5);
}

function stopTimer() {
  if (state.timerId !== null) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  stopTimer();
  state.timeLeft = 15;
  renderTimer();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    renderTimer();
    if (state.timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function renderQuestion() {
  const question = state.roundQuestions[state.currentIndex];
  state.locked = false;

  els.questionCategory.textContent = question.category;
  els.questionDifficulty.textContent =
    question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
  els.questionText.textContent = question.question;

  els.options.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(option));
    els.options.appendChild(button);
  });

  els.feedback.hidden = true;
  els.feedback.classList.remove("is-correct", "is-wrong");
  els.feedbackVerdict.textContent = "";
  els.feedbackExplanation.textContent = "";

  renderProgress();
  updateScoreDisplay();
  startTimer();
}

function revealAnswer(selectedOption) {
  const question = state.roundQuestions[state.currentIndex];
  const isCorrect = selectedOption === question.answer;

  Array.from(els.options.children).forEach((button) => {
    button.disabled = true;
    const value = button.textContent;
    if (value === question.answer) {
      button.classList.add("is-correct");
    } else if (value === selectedOption) {
      button.classList.add("is-wrong");
    } else {
      button.classList.add("is-dim");
    }
  });

  els.feedback.hidden = false;
  els.feedback.classList.toggle("is-correct", isCorrect);
  els.feedback.classList.toggle("is-wrong", !isCorrect);
  els.feedbackVerdict.textContent = isCorrect ? "Correct! +10" : "Incorrect";
  els.feedbackExplanation.textContent = question.explanation;

  return isCorrect;
}

function handleAnswer(selectedOption) {
  if (state.locked) return;

  state.locked = true;
  stopTimer();
  const question = state.roundQuestions[state.currentIndex];
  const isCorrect = revealAnswer(selectedOption);

  if (isCorrect) {
    state.score += 10;
    state.correctCount += 1;
  } else {
    state.incorrectCount += 1;
  }

  state.answers.push({
    questionId: question.id,
    chosen: selectedOption,
    correct: isCorrect,
    timedOut: false
  });

  updateScoreDisplay();
}

function handleTimeout() {
  if (state.locked) return;

  state.locked = true;
  const question = state.roundQuestions[state.currentIndex];

  Array.from(els.options.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.answer) {
      button.classList.add("is-correct");
    } else {
      button.classList.add("is-dim");
    }
  });

  els.feedback.hidden = false;
  els.feedback.classList.remove("is-correct");
  els.feedback.classList.add("is-wrong");
  els.feedbackVerdict.textContent = "Time's up!";
  els.feedbackExplanation.textContent = question.explanation;

  state.incorrectCount += 1;
  state.answers.push({
    questionId: question.id,
    chosen: null,
    correct: false,
    timedOut: true
  });

  updateScoreDisplay();
}

function advance() {
  stopTimer();
  if (state.currentIndex >= ROUND_SIZE - 1) {
    finishQuiz();
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function finishQuiz() {
  stopTimer();
  renderResults();
  showScreen("results");
}

function renderResults() {
  const results = computeResults(state.answers);
  els.resultsScore.textContent = results.score + " / 100";
  els.resultsCorrect.textContent = String(results.correct);
  els.resultsIncorrect.textContent = String(results.incorrect);
  els.resultsAccuracy.textContent = results.accuracy + "%";
  els.resultsMessage.textContent = resultMessage(results.score);
}

function renderReview() {
  els.reviewList.innerHTML = "";
  state.roundQuestions.forEach((question, index) => {
    const record = state.answers[index] || {
      chosen: null,
      correct: false,
      timedOut: true
    };

    const item = document.createElement("div");
    item.className = "review-item";

    const questionText = document.createElement("p");
    questionText.className = "review-question";
    questionText.textContent = (index + 1) + ". " + question.question;

    const yourAnswer = document.createElement("p");
    if (record.correct) {
      yourAnswer.className = "review-answer is-correct";
      yourAnswer.textContent = "Your answer: " + record.chosen + " (correct)";
    } else if (record.timedOut) {
      yourAnswer.className = "review-answer is-missed";
      yourAnswer.textContent = "Your answer: no answer (time ran out)";
    } else {
      yourAnswer.className = "review-answer is-wrong";
      yourAnswer.textContent = "Your answer: " + record.chosen + " (incorrect)";
    }

    const correctAnswer = document.createElement("p");
    correctAnswer.className = "review-answer is-correct";
    correctAnswer.textContent = "Correct answer: " + question.answer;

    const explanation = document.createElement("p");
    explanation.className = "review-explanation";
    explanation.textContent = question.explanation;

    item.appendChild(questionText);
    item.appendChild(yourAnswer);
    item.appendChild(correctAnswer);
    item.appendChild(explanation);
    els.reviewList.appendChild(item);
  });
}

function playAgain() {
  stopTimer();
  resetState();
  els.chips.forEach((chip) => chip.setAttribute("aria-pressed", "false"));
  els.reviewList.innerHTML = "";
  els.resultsScore.textContent = "0 / 100";
  els.resultsCorrect.textContent = "0";
  els.resultsIncorrect.textContent = "0";
  els.resultsAccuracy.textContent = "0%";
  els.resultsMessage.textContent = "";
  showScreen("welcome");
}

function resetState() {
  stopTimer();
  state.difficulty = null;
  state.roundQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.correctCount = 0;
  state.incorrectCount = 0;
  state.answers = [];
  state.timeLeft = 15;
  state.timerId = null;
  state.locked = false;
}

function selectDifficulty(difficulty) {
  state.difficulty = difficulty;
  els.chips.forEach((chip) => {
    const isMatch = chip.dataset.difficulty === difficulty;
    chip.setAttribute("aria-pressed", isMatch ? "true" : "false");
  });
}

function startQuiz() {
  if (!state.difficulty) {
    selectDifficulty("easy");
  }
  const difficulty = state.difficulty;
  resetState();
  state.difficulty = difficulty;
  state.roundQuestions = pickQuestions(state.difficulty);
  showScreen("quiz");
  renderQuestion();
}

els.chips.forEach((chip) => {
  chip.addEventListener("click", () => selectDifficulty(chip.dataset.difficulty));
});

els.btnStart.addEventListener("click", startQuiz);
els.btnNext.addEventListener("click", advance);
els.btnReview.addEventListener("click", () => {
  renderReview();
  showScreen("review");
});
els.btnBackResults.addEventListener("click", () => showScreen("results"));
els.btnPlayAgain.addEventListener("click", playAgain);

showScreen("welcome");