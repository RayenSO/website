import React from 'react';
import './Footer.css';
import InstagramIcon from '../../images/instagram.png';
import TwitterIcon from '../../images/twitter.png';
import FacebookIcon from '../../images/facebook.png';
function Footer() {
  return (
    <footer>
      <div className="foot">
        <h1>RenaClic</h1>
        <p>47-83 Boulevard de l'Hôpital, 75013 Paris</p>
        <a href="http://pitiesalpetriere.aphp.fr/">http://pitiesalpetriere.aphp.fr</a>
        <p>01 42 16 00 00</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://twitter.com/">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>

        <a href="/qui-sommes-nous" className="footer-link">
          Qui sommes-nous
        </a>
        <a href="/conditions-d-utilisation" className="footer-link">
          Conditions d'utilisation
        </a>
      </div>
    </footer>
  );
}

export default Footer;
