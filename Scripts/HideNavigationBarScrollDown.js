let previousScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > previousScrollPosition) {
    document.getElementById('ContainerFromNavBar').classList.add('HideNavBar');
  } else if (currentScrollPosition < previousScrollPosition) {
    document.getElementById('ContainerFromNavBar').classList.remove('HideNavBar');
  }

  previousScrollPosition = currentScrollPosition;
});