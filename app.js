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
renderLeaderboard();
setupScoreSimulation();
renderTimeline();
