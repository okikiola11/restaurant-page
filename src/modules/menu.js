import '../styles/menu.css';

import Chicken from '../images/1.jpg';
import Pizza from '../images/2.jpg';
import Noodles from '../images/3.jpg';

const content = document.getElementById('content');
const firstImage = document.createElement('div');
const secondImage = document.createElement('div');
const thirdImage = document.createElement('div');

const showMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('container');
  menu.classList.add('m-tp');
  content.appendChild(menu);

  const heading = document.createElement('div');
  heading.classList.add('txt-hdr')
  heading.innerText = 'Menu';
  menu.appendChild(heading);

  const menuAllImages = document.createElement('div');
  menuAllImages.classList.add('w-100')

  const menuImageA = new Image();
  const menuImageB = new Image();
  const menuImageC = new Image();

  
  menuImageA.src = Chicken;
  menuImageA.classList.add('inner-container');

  menuImageB.src = Pizza;
  menuImageB.classList.add('inner-container');

  menuImageC.src = Noodles;
  menuImageC.classList.add('inner-container');

  // firstImage.classList.add('menu-item');
  // secondImage.classList.add('menu-item');
  // thirdImage.classList.add('menu-item');
  // menuAllImages.appendChild(firstImage);
  // firstImage.classList.add('menu-item');
  // firstImage.appendChild(menuImageA);
  // content.appendChild(firstImage)

  menuAllImages.appendChild(menuImageA);
  menuAllImages.appendChild(menuImageB);
  menuAllImages.appendChild(menuImageC);
  content.appendChild(menuAllImages)

}

export default showMenu;