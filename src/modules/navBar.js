import '../styles/navbar.css';

const content = document.getElementById('content');

const navEl = document.createElement('nav');

const listNavItem = document.createElement('ul');
const homeNav = document.createElement('li');
const menuNav = document.createElement('li');
const contactNav = document.createElement('li');

const navLinks = () => {
  listNavItem.classList.add('navbar-nav');

  homeNav.classList.add('nav-link');
  homeNav.innerText = 'Home';
  listNavItem.appendChild(homeNav);

  menuNav.classList.add('nav-link');
  menuNav.innerText = 'Menu';
  listNavItem.appendChild(menuNav);

  contactNav.classList.add('nav-link');
  contactNav.innerText = 'Contact';
  listNavItem.appendChild(contactNav);

  return listNavItem;
};

const innerNavbar = () => {
  const navbarBrand = document.createElement('a');

  navEl.classList.add('navbar');
  navbarBrand.classList.add('navbar-brand');
  navbarBrand.innerText = 'TROY FOODS';
  
  navEl.appendChild(navbarBrand);
  navEl.appendChild(navLinks());

  document.body.insertBefore(navEl, content);
}

export { homeNav, menuNav, contactNav, innerNavbar };
