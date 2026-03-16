const gradeTracks = [
  {
    grade: "JK/SK",
    focus: ["Number sense foundations", "Patterns & sorting", "Math talk vocabulary"],
  },
  {
    grade: "Grade 1",
    focus: ["Addition/subtraction fluency", "Measurement basics", "Spatial sense"],
  },
  {
    grade: "Grade 2",
    focus: ["Place value to 200", "Time/money problems", "Data literacy basics"],
  },
  {
    grade: "Grade 3",
    focus: ["Multiplication/division", "Fractions intro", "2D/3D geometry"],
  },
  {
    grade: "Grade 4",
    focus: ["Multi-digit strategies", "Fractions & decimals", "Algebraic thinking"],
  },
];

const jkSkUnits = [
  {
    title: "Unit 1: Counting Club",
    goal: "Count, represent, and compare quantities to 10.",
    activities: "Dot cards, finger counting, build-the-number blocks",
  },
  {
    title: "Unit 2: Pattern Detectives",
    goal: "Create and extend repeating patterns (AB, AAB, ABB).",
    activities: "Bead strings, movement patterns, color trains",
  },
  {
    title: "Unit 3: Shape Explorers",
    goal: "Identify 2D shapes in classroom and home objects.",
    activities: "Shape hunt, tangram play, sorting circles/squares/triangles",
  },
  {
    title: "Unit 4: Math Story Starters",
    goal: "Use words like more, fewer, equal in simple math stories.",
    activities: "Picture prompts, compare two groups, explain thinking",
  },
];

const practiceBanks = {
  counting: [
    { prompt: "Count: ⭐ ⭐ ⭐ ⭐", answer: "4" },
    { prompt: "Which is more? 5 apples or 3 apples", answer: "5 apples" },
    { prompt: "What number comes after 6?", answer: "7" },
  ],
  patterns: [
    { prompt: "Finish the pattern: 🔵 🔴 🔵 🔴 ___", answer: "🔵" },
    { prompt: "What comes next? clap, stomp, clap, stomp, ___", answer: "clap" },
    { prompt: "Is this pattern AB or AAB? 🟨 🟩 🟨 🟩", answer: "AB" },
  ],
  shapes: [
    { prompt: "How many sides does a triangle have?", answer: "3" },
    { prompt: "Which shape is round: circle or square?", answer: "circle" },
    { prompt: "Name a shape with 4 equal sides.", answer: "square" },
  ],
};

const teams = [
  { name: "Maple Minds", division: "Grade 2", points: 468 },
  { name: "North Star Ninjas", division: "Grade 4", points: 512 },
  { name: "Pi Pioneers", division: "Grade 3", points: 487 },
  { name: "Tiny Tacticians", division: "Grade 1", points: 451 },
  { name: "Sprout Solvers", division: "JK/SK", points: 420 },
];

const milestones = [
  "Week 1: Team Placement + Baseline Arena",
  "Week 2: Number Sense Sprint",
  "Week 3: Strategy Puzzles I",
  "Week 4: Campus Mini-Final",
  "Week 5: Geometry Quest",
  "Week 6: Mental Math Marathon",
  "Week 7: Strategy Puzzles II",
  "Week 8: Mid-Season Cup",
  "Week 9: Data & Probability Challenge",
  "Week 10: Team Relay Showcase",
  "Week 11: Ontario Application Problems",
  "Week 12: Grand Championship Day",
];

let currentQuestions = [];
let totalStars = 0;

function renderTracks() {
  const trackGrid = document.getElementById("trackGrid");

  gradeTracks.forEach((track) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${track.grade}</h3>
      <ul>
        ${track.focus.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    trackGrid.append(card);
  });
}

function renderUnits() {
  const unitList = document.getElementById("unitList");

  jkSkUnits.forEach((unit) => {
    const block = document.createElement("div");
    block.className = "unit-item";
    block.innerHTML = `
      <h4>${unit.title}</h4>
      <p><strong>Goal:</strong> ${unit.goal}</p>
      <p><strong>Activities:</strong> ${unit.activities}</p>
    `;
    unitList.append(block);
  });
}

function normalizeValue(value) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

function randomizeQuestions(activityKey) {
  const bank = practiceBanks[activityKey];
  currentQuestions = [...bank]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function renderPracticeForm() {
  const form = document.getElementById("practiceForm");
  form.innerHTML = "";

  currentQuestions.forEach((question, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question-item";
    wrapper.innerHTML = `
      <label for="q-${index}">${index + 1}. ${question.prompt}</label>
      <input id="q-${index}" name="q-${index}" type="text" autocomplete="off" />
    `;
    form.append(wrapper);
  });
}

function updateStars(stars) {
  totalStars += stars;
  document.getElementById("scorePill").textContent = `Stars: ${totalStars}`;
}

function checkAnswers() {
  const feedback = document.getElementById("practiceFeedback");
  let correct = 0;

  currentQuestions.forEach((question, index) => {
    const input = document.getElementById(`q-${index}`);
    const userValue = normalizeValue(input.value);
    const answerValue = normalizeValue(question.answer);

    if (userValue === answerValue) {
      correct += 1;
      input.classList.remove("incorrect");
      input.classList.add("correct");
    } else {
      input.classList.remove("correct");
      input.classList.add("incorrect");
    }
  });

  updateStars(correct);
  feedback.textContent = `You got ${correct}/${currentQuestions.length} correct. Keep going!`;
}

function setupPracticeArena() {
  const activitySelect = document.getElementById("activitySelect");
  const newSetBtn = document.getElementById("newSetBtn");
  const checkBtn = document.getElementById("checkAnswersBtn");

  const options = [
    { key: "counting", label: "Counting & Comparing" },
    { key: "patterns", label: "Pattern Play" },
    { key: "shapes", label: "Shape Sense" },
  ];

  options.forEach((option) => {
    const element = document.createElement("option");
    element.value = option.key;
    element.textContent = option.label;
    activitySelect.append(element);
  });

  function buildSet() {
    randomizeQuestions(activitySelect.value);
    renderPracticeForm();
    document.getElementById("practiceFeedback").textContent = "";
  }

  activitySelect.addEventListener("change", buildSet);
  newSetBtn.addEventListener("click", buildSet);
  checkBtn.addEventListener("click", checkAnswers);

  buildSet();
}

function renderLeaderboard() {
  const sorted = [...teams].sort((a, b) => b.points - a.points);
  const body = document.getElementById("leaderboardBody");
  body.innerHTML = "";

  sorted.forEach((team, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${team.name}</td>
      <td>${team.division}</td>
      <td>${team.points}</td>
    `;
    body.append(row);
  });
}

function setupScoreSimulation() {
  const button = document.getElementById("shuffleScores");

  button.addEventListener("click", () => {
    teams.forEach((team) => {
      const gain = Math.floor(Math.random() * 26) + 5;
      team.points += gain;
    });

    renderLeaderboard();
  });
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");

  milestones.forEach((item) => {
    const card = document.createElement("div");
    card.className = "milestone";
    card.textContent = item;
    timeline.append(card);
  });
}

renderTracks();
renderUnits();
setupPracticeArena();
renderLeaderboard();
setupScoreSimulation();
renderTimeline();
