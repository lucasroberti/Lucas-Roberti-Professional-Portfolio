const sections = document.querySelectorAll('section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function getCurrentIndex() {
  let current = 0;
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      current = index;
    }
  });
  return current;
}

function updateNavButtons() {
  const index = getCurrentIndex();
  const isFirst = index === 0;
  const isLast = index === sections.length - 1;

  prevBtn.style.display = isFirst ? 'none' : 'flex';

  if (isLast) {
    nextBtn.textContent = '↑↑';
    nextBtn.setAttribute('aria-label', 'Back to home');
  } else {
    nextBtn.textContent = '↓';
    nextBtn.setAttribute('aria-label', 'Next section');
  }
}

prevBtn.addEventListener('click', () => {
  const index = getCurrentIndex();
  const target = sections[index - 1];
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

nextBtn.addEventListener('click', () => {
  const index = getCurrentIndex();
  const target = sections[index + 1] || sections[0];
  target.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', updateNavButtons);
updateNavButtons();