import React from 'react';


function Header() {


  return (
    <header className="fixed-menu">
       <div className="header-top">
        <a href="/">Mon Compte</a>
        <a href="/">Pro</a>
      </div>
      <nav className='menu'>
      
      <div className="site-name">
          <strong>RenaClic</strong>
        </div>
        <div class="dropdown">
          <button class="dropbtn">A PROPOS DES REINS</button>
          <div class="dropdown-content">
            <a href="/les-reins-et-leurs-fonctions">Les reins et leurs fonctions</a>
            <a href="/les-maladies-renales">Les maladies rénales</a>
          </div>
        </div>
        
        <div class="dropdown">
          <button class="dropbtn">PREVENTION</button>
          <div class="dropdown-content">
            <a href="/depistage">Dépistage</a>
            <a href="/protéger-ses-reins">Protéger ses reins</a>
          </div>
        </div>
        
        <div class="dropdown">
          <button class="dropbtn">LES TRAITEMENTS DE SUPPLEANCE</button>
          <div class="dropdown-content">
            <a href="/avant-la-dialyse-et-la-greffe">Avant la dialyse et la greffe</a>
            <a href="/la-dialyse">la dialyse</a>
            <a href="/la-greffe">la greffe</a>
            <a href="/aide-au-choix">Aide au choix</a>
          </div>
        </div>
        
        <div class="dropdown">
          <button class="dropbtn">VIVRE AVEC LA MALADIE </button>
          <div class="dropdown-content">
            <a href="/vie-et-organisation-au-quotidien">Vie et organisation au quotidien</a>
            <a href="/grossesse-et-information-pour-la-femmme">Grossesse et information pour la femme </a>
            <a href="/gérer-son-insuffisance-rénale">Gérer son insuffisance rénale</a>
            <a href="/positive-attitude">Positive attitude</a>
            <a href="/droits-sociaux">Droits sociaux </a>
          </div>
        </div>
        <div class="dropdown">
          <a href="/nutrition"><button class="dropbtn">NUTRITION </button></a> 
        </div>
        
        <div class="dropdown">
          <a href="//mon-parcours"><button class="dropbtn">MON PARCOURS </button></a> 
        </div>

        <div class="dropdown">
          <button class="dropbtn">POUR EN SAVOIR PLUS </button>
          <div class="dropdown-content">
            <a href="/documentation">Documentation</a>
            <a href="/echanges">Echanges </a>
            <a href="/temoignages">Temoignages</a>
           
          </div>
        </div>
        <input class="input" name="text" placeholder="Search..." type="search"></input>
      </nav>
      
    </header>
  );
}

export default Header;
