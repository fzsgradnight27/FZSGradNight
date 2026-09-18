const data = {
  school: "Fort Zumwalt South High School",
  address: "8050 Mexico Road, St. Peters, MO 63376",
  phone: "(636) 978-1212",
  gradNight: "May 29, 2027",
  trivia: "November 14, 2026",
  golf: "April 17, 2027",
  triviaDoors: "6:00 PM",
  triviaTablePrice: "$240 per table (8 people)",
  triviaCapacity: "Maximum 47 tables",
  triviaSponsors: "$100 per round — 10 sponsors needed",
  contactEmail: "gradnight.fzs@gmail.com",
  triviaContact: "Angie Hinzpeter — (636) 578-2049 — amhinzpeter@gmail.com",
  amazon: "https://www.amazon.com/hz/wishlist/ls/3OYN7YUQQRWNK?ref_=wl_share",
  venmo: "https://account.venmo.com/u/FZSGradNight",
  seniorPage: "https://shs.fz.k12.mo.us/o/shs/page/senior"
};

const events = [
  {
    date: "NOV 14, 2026",
    title: "FZS Grad Night Trivia",
    text: "A fundraiser night with Trivia Riot. Doors open at 6 PM.",
    link: "#trivia"
  },
  {
    date: "APR 17, 2027",
    title: "Golf Tournament",
    text: "Support the Class of 2027 through the Grad Night golf fundraiser.",
    link: "#events"
  },
  {
    date: "MAY 29, 2027",
    title: "Grad Night Celebration",
    text: "An all-night celebration after graduation with games, prizes, food and fun.",
    link: "#about"
  }
];

const activities = [
  "Arts & Crafts", "Date Night", "Back to School Game Night", "BBQ",
  "Gardening", "Beach / Pool", "Holiday", "Camping", "Home Decor",
  "Car Wash", "Lottery Tickets", "Coffee / Tea", "Movie", "College Theme",
  "Cooking / Baking", "Spa", "Fire Pit / S'mores", "Sports", "Wine"
];

document.querySelector("#app").innerHTML = `
<section id="about" class="section intro">
  <p class="eyebrow">WHAT IS GRAD NIGHT?</p>
  <h2>Celebrate the Bulldogs. Stay safe. Make memories.</h2>
  <p>Grad Night is an annual all-night celebration held after the high school graduation ceremony. The goal is to give graduating students a safe, alcohol- and drug-free celebration with their peers.</p>
  <p>The event is organized, fundraised and supervised by senior parents on the Grad Night committee. The night includes games, prizes, food and fun activities.</p>
</section>

<section id="events" class="section dark">
  <p class="eyebrow">SAVE THE DATES</p>
  <h2>Upcoming Events</h2>
  <div class="cards">${events.map(e => `
    <article class="card">
      <div class="event-date">${e.date}</div>
      <h3>${e.title}</h3><p>${e.text}</p>
      <a href="${e.link}" class="text-link">Learn more →</a>
    </article>`).join("")}</div>
</section>

<section id="trivia" class="section">
  <p class="eyebrow">NOVEMBER 14, 2026</p>
  <h2>FZS Grad Night Trivia</h2>
  <div class="trivia-grid">
    <div class="info-panel">
      <h3>Trivia Night Details</h3>
      <ul>
        <li><strong>Company:</strong> Trivia Riot</li>
        <li><strong>Doors open:</strong> ${data.triviaDoors}</li>
        <li><strong>Tables:</strong> ${data.triviaTablePrice}</li>
        <li><strong>Capacity:</strong> ${data.triviaCapacity}</li>
        <li><strong>Sponsors:</strong> ${data.triviaSponsors}</li>
        <li><strong>Checks payable to:</strong> FZS Grad Night</li>
      </ul>
      <p class="note">The committee is accepting donations for gift baskets and silent auction items.</p>
    </div>
    <div class="info-panel red-panel">
      <h3>Trivia Night Donations</h3>
      <p>Basket donations needed: <strong>25–30 baskets</strong>.</p>
      <p>Ideas include booze baskets, themed baskets and silent auction items.</p>
      <p>Have a question about basket donations?</p>
      <strong>${data.triviaContact}</strong>
    </div>
  </div>
</section>

<section class="section light">
  <p class="eyebrow">FUNDRAISING IDEAS</p>
  <h2>Ways to Build a Basket</h2>
  <p>These themes were listed in the Grad Night planning materials.</p>
  <div class="chips">${activities.map(a => `<span>${a}</span>`).join("")}</div>
</section>

<section class="section dark">
  <p class="eyebrow">MORE FUNDRAISING</p>
  <h2>Other Grad Night Fundraisers</h2>
  <div class="mini-grid">
    <div><span>⛳</span><h3>Golf Tournament</h3><p>April 17, 2027</p></div>
    <div><span>🛒</span><h3>Double Good Popcorn</h3><p>Another fundraiser listed in the planning materials.</p></div>
    <div><span>🚗</span><h3>Golf Cart</h3><p>Fundraising opportunity listed by the Grad Night committee.</p></div>
  </div>
</section>

<section id="support" class="section">
  <p class="eyebrow">HELP SUPPORT THE CLASS OF 2027</p>
  <h2>Donate or Find Senior Information</h2>
  <div class="support-grid">
    <a class="support-card" href="${data.amazon}" target="_blank" rel="noopener">
      <span>🎁</span><h3>Amazon Wishlist</h3><p>Shop from the FZS Grad Night wishlist and donate an item.</p><b>Open Wishlist →</b>
    </a>
    <a class="support-card" href="${data.venmo}" target="_blank" rel="noopener">
      <span>❤️</span><h3>Venmo</h3><p>Support FZS Grad Night through the official Grad Night Venmo.</p><b>@FZSGradNight →</b>
    </a>
    <a class="support-card" href="${data.seniorPage}" target="_blank" rel="noopener">
      <span>🎓</span><h3>All Things Senior</h3><p>Visit South High School's official senior information page.</p><b>Open Senior Page →</b>
    </a>
  </div>
</section>

<section class="section contact">
  <p class="eyebrow">QUESTIONS?</p>
  <h2>Grad Night Committee</h2>
  <p><strong>Email:</strong> <a href="mailto:${data.contactEmail}">${data.contactEmail}</a></p>
  <p><strong>School:</strong> ${data.school}</p>
  <p><strong>Address:</strong> ${data.address}</p>
  <p><strong>Phone:</strong> ${data.phone}</p>
  <a class="btn" href="mailto:${data.contactEmail}">Email Grad Night</a>
</section>
