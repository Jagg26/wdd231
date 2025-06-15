fetch('./data/discover.json')
  .then(res => res.json())
  .then(data => {
    const gallery = document.querySelector('.discover-gallery');

    data.forEach((item, i) => {
      const card = document.createElement('article');
      card.classList.add('discover-card', `card${i+1}`);

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="./${item.img}" alt="${item.name}"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn more</button>
      `;
      gallery.appendChild(card);
    });
  });

  function displayVisitMessage() {
    const key = 'lastVisit';
    const msgBox = document.getElementById('visit-message');
    const now = Date.now();
    const last = localStorage.getItem(key);
  
    if (!last) {
      msgBox.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const days = Math.floor((now - +last) / (1000 * 60 * 60 * 24));
      msgBox.textContent = days < 1
        ? "Back so soon! Awesome!"
        : `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
    }
  
    localStorage.setItem(key, now);
  }
  
  displayVisitMessage();
  