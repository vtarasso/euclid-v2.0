document.querySelectorAll('.stages__tabs').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.stages__tabs').forEach(function(btn){
      btn.classList.remove('stages__tabs--active')});
    e.currentTarget.classList.add('stages__tabs--active');

    document.querySelectorAll('.stages__content').forEach(function(tabsBtn){
      tabsBtn.classList.remove('stages__content--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('stages__content--active');
  });
});