import * as Navbar from './modules/navBar';
import showHome from './modules/home';
import showMenu from './modules/menu';

showHome();

const clearContent = () => {
 content.innerHTML = "";
}

Navbar.innerNavbar();

Navbar.homeNav.addEventListener('click', () => {
  clearContent();
  showHome();
});

Navbar.menuNav.addEventListener('click', () => {
  clearContent();
  showMenu();
});
