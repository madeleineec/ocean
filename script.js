window.addEventListener('load', function() {
  function adjustBackgroundHeight() {
    const backgroundDiv = document.querySelector('.background');
    const contentDiv = document.querySelector('.content');
    backgroundDiv.style.height = contentDiv.scrollHeight + 'px';
  }

  adjustBackgroundHeight();
  window.addEventListener('resize', adjustBackgroundHeight);

  var rellax = new Rellax('.rellax');

  //scatter species
  const speciesElements = document.querySelectorAll('.species');
  speciesElements.forEach(function(species) {
    let randomMargin = Math.floor(Math.random() * 61) + 10;
    species.style.marginLeft = randomMargin + '%';
  });
});