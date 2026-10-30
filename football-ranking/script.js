const shirts = [
  {
    team: "Liverpool FC",
    season: "2024/25",
    score: 9.8,
    type: "Home",
    image: "images/csj1p6.png"
  },
  {
    team: "Real Madrid",
    season: "2024/25",
    score: 9.6,
    type: "Home",
    image: "images/real-madrid-24-25-kit-16.jpg"
  },
  {
    team: "AC Milan",
    season: "2024/25",
    score: 9.4,
    type: "Home",
    image: "images/images.jpg"
  },
  {
    team: "Barcelona",
    season: "2024/25",
    score: 9.2,
    type: "Home",
    image: "images/images (1).jpg"
  },
  {
    team: "Arsenal",
    season: "2024/25",
    score: 9.0,
    type: "Home",
    image: "images/images (2).jpg"
  },
  {
    team: "Manchester United",
    season: "2024/25",
    score: 8.9,
    type: "Home",
    image: "images/images (3).jpg"
  },
  {
    team: "Inter Milan",
    season: "2024/25",
    score: 8.8,
    type: "Home",
    image: "images/images (4).jpg"
  },
  {
    team: "Bayern Munich",
    season: "2024/25",
    score: 8.7,
    type: "Home",
    image: "images/images (5).jpg"
  },
  {
    team: "Chelsea",
    season: "2024/25",
    score: 8.5,
    type: "Home",
    image: "images/jd_FN8779-496_a.jpg"
  },
  {
    team: "Borussia Dortmund",
    season: "2024/25",
    score: 8.3,
    type: "Home",
    image: "images/25.avif"
  }
];

shirts.sort((a, b) => b.score - a.score);

const ranking = document.getElementById("ranking");

ranking.innerHTML = shirts.map((shirt, index) => `
  <div class="item" onclick="showTeam(${index})">
    <span class="rank">#${index + 1}</span>
    <span class="team">${shirt.team}</span>
    <span class="season">${shirt.season}</span>
    <span class="score">${shirt.score}</span>
  </div>
`).join("");

function showTeam(index) {
  const shirt = shirts[index];

  document.querySelector("main").style.display = "none";

  const detail = document.getElementById("teamDetail");
  detail.style.display = "block";

  document.getElementById("teamName").textContent = shirt.team;
  document.getElementById("shirtImage").src = shirt.image;
  document.getElementById("shirtTitle").textContent =
    shirt.type + " Football Shirt";
  document.getElementById("shirtSeason").textContent =
    "Season " + shirt.season;
  document.getElementById("shirtScore").textContent =
    "คะแนน " + shirt.score + " / 10";
}

function goBack() {
  document.getElementById("teamDetail").style.display = "none";
  document.querySelector("main").style.display = "block";
}