import React, { useState }  from 'react';
import './Accueil.css'; 
import Modal from 'react-modal'; 

function Accueil() {
  const slides = [
    {
      title: 'Grossesse et informations pour la femme',
      
      buttonLink: '/grossesse-et-information-pour-la-femme',
    },
    {
      title: 'Se préparer à la dialyse et à la greffe, c\'est prendre en main son insuffisance rénale',
      
      buttonLink: '/avant-la-dialyse-et-la-greffe',
    },
    {
      title: 'Aide au choix',
      
      buttonLink: '/aide-au-choix',
    },
    {
      title: 'Mon parcours',
      
      buttonLink: '/mon-parcours',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const [showPopup, setShowPopup] = useState(true);

  return ( 
    <div className="accueil-content">
      {/* Popup d'accueil*/}
      {showPopup && (
        <div className="custom-overlay">
          <button className="close-button" onClick={() => setShowPopup(false)}>
            X
          </button>
          <Modal
            isOpen={true}
            onRequestClose={() => setShowPopup(false)}
            className="custom-modal"
            overlayClassName="custom-overlay"
          >
            <div className="square">
            <h2>BIENVENUE SUR</h2>
            <h2>RENACLIC</h2>
            <p>La plateforme référence d'information et de prévention pour les personnes concernées par des maladies rénales </p>
            <button onClick={() => setShowPopup(false)}>Voir le site</button>
            </div>
          </Modal>
        </div>
      )}
      {/* Slide Show */}
      <div className="header-rectangle">
        {/* Bouton précédent*/}
        <button onClick={handlePreviousSlide} className="custom-button-precedent" aria-label="Précédent"></button>

        <div className="slideshow">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlideIndex ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <a href={slide.buttonLink} className="slide-button button-text">
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Bouton Suivvant*/}
        <button onClick={handleNextSlide} className="custom-button-suivant" aria-label="Suivant"></button>
      </div>
      <div className='six-cells-container'>
        {/* Carré du haut à gauche */}
        <div className="cell ">
          <div className='text-block'>
            <h3>Je souhaite connaître mon parcours en fonction de mon stade de la maladie</h3>
            <p>Vous souhaitez être guidé tout au long de votre parcours de soin et prendre en main votre maladie ? C'est ici ! </p>
            <div className='button-block'>
              <a href="/mon-parcours" className="custom-button">En savoir plus</a>
            </div>
          </div> 
        </div>

        {/* Carré du haut à droite */}
        <div className="cell right-picture">
          <img src="https://static.wixstatic.com/media/f89b06_84f351d8c16f47ff95fea1b669571a80~mv2.jpg/v1/crop/x_0,y_0,w_545,h_477,q_80,enc_auto/f89b06_84f351d8c16f47ff95fea1b669571a80~mv2.jpg" alt=' 1'/>
        </div>
      
      {/* Carré du milieu à gauche */}
      <div className="cell left-picture">
        <img src="https://static.wixstatic.com/media/11062b_6c72447c65c54728a0e3e956087a15b2~mv2.jpg/v1/fill/w_531,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_6c72447c65c54728a0e3e956087a15b2~mv2.jpg" alt=' 2'/>
          </div>

          {/* Carré du milieu à droite */}
          <div className="cell">
            <div className='text-block'>
              <h3>Il est temps de positiver !</h3>
              <p>Marre des sites qui vous plombe le moral ? Cliquez ici, vous trouverez tous nos conseils de bien être et autres !</p>
              <div className='button-block'>
              <a href="/positive-attitude" className="custom-button">En savoir plus</a>
              </div>
              
            </div>
          </div>

          {/* Carré du bas à gauche */}
          <div className="cell ">
            <div className='text-block'>
              <h3 >Je prépare mon rendez-vous ETP</h3>
              <p>Vous souhaitez vous préparer à votre premier rendez-vous d'éducation thérapeutique ? C'est par ici! </p>
              <div className='button-block'>
                <a href="/vie-et-organisation-au-quotidien" className="custom-button">En savoir plus</a>
              </div>
            </div>
          </div>

          {/* Carré du bas à droite */}
          <div className="cell right-picture">
            <img src="https://static.wixstatic.com/media/11062b_65c487b2a18a4c82a6f3228cfa3e1759~mv2.jpg/v1/fill/w_531,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_65c487b2a18a4c82a6f3228cfa3e1759~mv2.jpg" alt=' 2'/>
          </div>
      </div>
    </div>
  );
}

export default Accueil;
