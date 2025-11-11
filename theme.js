(function(){
  const root = document.documentElement;
  const apply = (mode) => {
    if (mode === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('theme', mode);
  };
  // Initialize
  const saved = localStorage.getItem('theme');
  if (saved) apply(saved);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) apply('dark');
  // Bind buttons
  function toggle() {
    const nowDark = !root.classList.contains('dark');
    apply(nowDark ? 'dark' : 'light');
  }
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    const btn2 = document.getElementById('themeToggleMobile');
    if (btn) btn.addEventListener('click', toggle);
    if (btn2) btn2.addEventListener('click', toggle);
  });
})();