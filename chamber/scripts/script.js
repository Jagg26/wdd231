document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    toggleBtn.addEventListener("click", () => nav.classList.toggle("responsive"));
  
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
  
    const container = document.getElementById("memberContainer");
    document.getElementById("gridView").addEventListener("click", () => {
      container.classList.add("grid-view");
      container.classList.remove("list-view");
    });
  
    document.getElementById("listView").addEventListener("click", () => {
      container.classList.remove("grid-view");
      container.classList.add("list-view");
    });
  
    async function loadMembers() {
      const response = await fetch("data/members.json");
      const data = await response.json();
      displayMembers(data.members);
    }
  
    function displayMembers(members) {
      container.innerHTML = "";
      members.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";
        card.innerHTML = `
          <img src="./images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
          <p>Membership Level: ${["Member", "Silver", "Gold"][member.membershipLevel - 1]}</p>
        `;
        container.appendChild(card);
      });
    }
  
    loadMembers();
  });
  
  // --- WEATHER SECTION ---
const apiKey = '3968363cc0b7d19a72278b2bc35ed082'; // ← Reemplazá con tu clave de OpenWeatherMap
const city = 'Merida,VE';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function loadWeather() {
  try {
    const [weatherRes, forecastRes] = await Promise.all([
      fetch(weatherUrl),
      fetch(forecastUrl)
    ]);

    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();

    document.getElementById("current-temp").innerHTML = `${weatherData.main.temp.toFixed(1)} °C`;
    document.getElementById("weather-desc").textContent = weatherData.weather[0].description;

    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = '';

    const dailyTemps = forecastData.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 3);
    dailyTemps.forEach(day => {
      const date = new Date(day.dt_txt);
      const label = date.toLocaleDateString('en-US', { weekday: 'long' });
      forecastList.innerHTML += `<li><strong>${label}:</strong> ${day.main.temp.toFixed(1)} °C</li>`;
    });
  } catch (error) {
    console.error("Error loading weather data", error);
  }
}

// --- SPOTLIGHTS SECTION ---
async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const goldSilver = data.members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
    const shuffled = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById('spotlights');
    container.innerHTML = '';

    shuffled.forEach(member => {
      const card = document.createElement("div");
      card.className = "member";

      card.innerHTML = `
        <img src="./images/${member.image}" alt="${member.name}">
        <div class="member-content">
          <h4>${member.name}</h4>
          <p class="tagline">${member.description || ''}</p>
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>ADDRESS:</strong> ${member.address}</p>
          <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>LEVEL:</strong> ${["Member", "Silver", "Gold"][member.membershipLevel - 1]}</p>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading spotlights", err);
  }
}

loadWeather();
loadSpotlights();
