document.addEventListener('DOMContentLoaded', () => {
  const bookEl = document.getElementById('book');
  BIBLE_PAGES.forEach(html => {
    const d = document.createElement('div');
    d.innerHTML = html;
    const page = d.firstElementChild;
    bookEl.appendChild(page);
  });

  const pageFlip = new St.PageFlip(bookEl, {
    width: 420,
    height: 600,
    size: 'stretch',
    minWidth: 280,
    maxWidth: 520,
    minHeight: 400,
    maxHeight: 740,
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: false,
    useMouseEvents: true,
    swipeDistance: 30
  });

  pageFlip.loadFromHTML(document.querySelectorAll('.page'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') pageFlip.flipNext();
    if (e.key === 'ArrowLeft') pageFlip.flipPrev();
  });
});
