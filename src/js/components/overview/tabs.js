export const useSortTabs = () => {
  const tabs = document.querySelectorAll('[data-category]');
  const slides = document.querySelectorAll('.hero__slide');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const category = tab.dataset.category;

      slides.forEach(slide => {
        const slideCategory = slide.dataset.category;
        
        if (category === 'all' || slideCategory === category) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });

      tabs.forEach(t => t.classList.remove('hero__tab-controls-item-link--active'));
      tab.classList.add('hero__tab-controls-item-link--active');
    });
  });
} 