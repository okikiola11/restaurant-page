import '../styles/index.css';

const content = document.getElementById('content');

const showHome = () => {
  const name = document.createElement('div');
  name.classList.add('bg-img');
  content.appendChild(name);

  // const homeHeading = document.createElement('h1');
  // homeHeading.innerText = `Welcome!
  // ABC Restaurant online`;
  // name.appendChild(homeHeading);
} 

export default showHome;

//console.log('hello world neq nn11');