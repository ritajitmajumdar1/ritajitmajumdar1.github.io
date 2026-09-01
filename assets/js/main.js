// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Hamburger
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// Publications — tab filter
let currentCat = 'paper';

function filterPubs(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('#pubList .pub-item').forEach(item => {
    item.classList.toggle('show', item.dataset.cat === cat);
  });

  document.getElementById('pubMoreWrap').style.display = cat === 'paper' ? 'block' : 'none';
}

// Talks toggle
let talksExpanded = false;
function toggleTalks() {
  talksExpanded = !talksExpanded;
  document.querySelectorAll('.talk-item').forEach(c => {
    const rank = parseInt(c.dataset.rank);
    c.classList.toggle('show', talksExpanded || rank <= 6);
  });
  document.getElementById('talkMoreBtn').textContent = talksExpanded ? 'Show fewer' : 'See all talks';
}

// Tutorials toggle
let tutorialsExpanded = false;
function toggleTutorials() {
  tutorialsExpanded = !tutorialsExpanded;
  document.querySelectorAll('.tutorial-item').forEach(c => {
    const rank = parseInt(c.dataset.rank);
    c.classList.toggle('show', tutorialsExpanded || rank <= 5);
  });
  document.getElementById('tutorialMoreBtn').textContent = tutorialsExpanded ? 'Show fewer' : 'See all tutorials';
}

// Nav active highlight
const secs = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if(window.scrollY >= s.offsetTop - 80) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
  });
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  filterPubs('paper', document.querySelector('.pub-tab'));
});
