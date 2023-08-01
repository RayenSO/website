import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about-reins">A propos des reins</Link>
            <ul>
              <li>
                <Link to="/about-reins/functions">Les reins et leurs fonctions</Link>
              </li>
              <li>
                <Link to="/about-reins/diseases">Les maladies rénales</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/prevention">Prévention</Link>
            <ul>
              <li>
                <Link to="/prevention/screening">Dépistage</Link>
              </li>
              <li>
                <Link to="/prevention/protect-your-kidneys">Protéger ses reins</Link>
              </li>
            </ul>
          </li>
          {/* Autres catégories du menu */}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  