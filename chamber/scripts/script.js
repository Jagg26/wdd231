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
  