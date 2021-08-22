window.onload = () => {
  const menu = document.querySelector('.wrapper__hamburger');
  const mobileMenu = document.querySelector('.header-mobile');
  const closeMenu = document.querySelector('.header__close');

  menu.addEventListener('click', (e) => {
    mobileMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', (e) => {
    mobileMenu.style.display = 'none';
  });
};
