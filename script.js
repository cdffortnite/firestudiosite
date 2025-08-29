// desenvolvido por @_edsonmonteiro_
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  document.querySelectorAll('.hero-video').forEach(video => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const source = document.createElement('source');
    source.src = isMobile ? 'celular.mp4' : 'video.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play();
      });
    }
  });
});
