import '../styles/contact.css';

import contactImageA from '../images/5.jpg';

const content = document.getElementById('content');

const showContact = () => {
  const contactBg = document.createElement('div');
  contactBg.classList.add('m-tp');
  contactBg.classList.add('container');
  content.appendChild(contactBg);
  
  contactBg.innerHTML = `
      <div class="container">
        <div>
          <image src=${contactImageA} alt="contact image">
        
          <div class="inner-cont">

            <h2> Visit Us </h2>
            <p>+2348012323445</p>
            <p>Byporten Shopping, Jernbanetorget 6, 0154 Oslo</p>
            <p>OPENING HOURS</p>
            <p>10:00 - 21:00

            Fredag – Lørdag</p>
            <p>10:00 - 21:00

            Fredag – Lørdag</p>
            <p>10:00 - 21:00
            
            Mandag - Torsdag</p>

            <p>Søndag
            
            closed</p>
          
          </div>
        </div>
        
      </div>  
    `;

    return contactBg;
 
};

export default showContact;