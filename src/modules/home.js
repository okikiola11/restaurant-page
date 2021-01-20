import '../styles/index.css';

const content = document.getElementById('content');

const showHome = () => {
  const name = document.createElement('div');
  name.classList.add('bg-img');
  content.appendChild(name);

  const text = document.createElement('div')
  text.innerText = 'Nigerian Meals';
  text.classList.add('text-center');
  
  name.appendChild(text);
} 

export default showHome;
