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

// Publications — tab filter + show/hide
const INITIAL_SHOW_JOURNALS = 3;
let pubsExpanded = false;
let currentCat = 'journal';

function filterPubs(cat, btn) {
  currentCat = cat;
  pubsExpanded = false;
  document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const allItems = document.querySelectorAll('#pubList .pub-item');
  allItems.forEach(item => {
    const cats = (item.dataset.cat || '').split(' ');
    if(cats.includes(cat)) {
      const rank = parseInt(item.dataset.rank || '99');
      const show = cat === 'journal' ? rank <= INITIAL_SHOW_JOURNALS : true;
      item.classList.toggle('show', show);
    } else {
      item.classList.remove('show');
    }
  });

  const wrap = document.getElementById('pubMoreWrap');
  const total = Array.from(allItems).filter(i => (i.dataset.cat||'').split(' ').includes(cat)).length;
  wrap.style.display = (cat === 'journal' && total > INITIAL_SHOW_JOURNALS) ? 'block' : 'none';
  document.getElementById('pubMoreBtn').textContent = `Show all journal papers (${total} total)`;
}

function togglePubMore() {
  pubsExpanded = !pubsExpanded;
  const allItems = document.querySelectorAll('#pubList .pub-item');
  allItems.forEach(item => {
    const cats = (item.dataset.cat || '').split(' ');
    if(cats.includes(currentCat)) {
      if(pubsExpanded) {
        item.classList.add('show');
      } else {
        const rank = parseInt(item.dataset.rank || '99');
        item.classList.toggle('show', rank <= INITIAL_SHOW_JOURNALS);
      }
    }
  });
  document.getElementById('pubMoreBtn').textContent = pubsExpanded ? 'Show fewer' : `Show all journal papers`;
}

// Talks toggle
let talksExpanded = false;
function toggleTalks() {
  talksExpanded = !talksExpanded;
  document.querySelectorAll('.talk-item').forEach(c => {
    const rank = parseInt(c.dataset.rank);
    c.classList.toggle('show', talksExpanded || rank <= 6);
  });
  document.getElementById('talkMoreBtn').textContent = talksExpanded ? 'Show fewer' : 'Show all talks';
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
  filterPubs('journal', document.querySelector('.pub-tab'));
});
