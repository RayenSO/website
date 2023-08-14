import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Accueil.css';

function Accueil() {


  const data = [
    {
      "text": "Grossesse et informations pour la femme",
      "link": "/VieGrossesse"
    },
    {
      "text": "Se préparer à la dialyse et à la greffe, c'est prendre en main son insuffisance rénale ",
      "link": "/AvantDialyseGreffe"
    },
    {
      "text": "Vos droits sociaux",
      "link": "/DroisSociaux"
    },
    {
      "text": "Aide au choix",
      "link": "/AideAuChoix"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }
  useEffect(() => {
    const interval = setInterval(() => { carouselInfiniteScroll() }, 5000)
    return () => clearInterval(interval)
  })


  const [showPopup, setShowPopup] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <section className="grid-section">
      {isMobile ? null : (
        showPopup && (
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
        )
      )}
      <div className="full-width-block carousel-container">

        {data.map((item, index) => {
          return <div className='carousel-item'
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}>
            <div className="center-rectangle">
              {item.text}
              <a href={item.link} className='carousel-button'>En savoir plus</a>
            </div>

          </div>
        })
        }
      </div>
      <div className="grid-block">
        <h3 className='txt-block-hdg'>Je souhaite connaître mon parcours en fonction de mon stade de la maladie</h3>
        <p className='txt-block-pg'>Vous souhaitez être guidé tout au long de votre parcours de soin et prendre en main votre maladie ? C'est ici !</p>
        <button className='btn-block'>En savoir plus</button>
      </div>
      <div className="grid-block">
        <img src="https://static.wixstatic.com/media/f89b06_84f351d8c16f47ff95fea1b669571a80~mv2.jpg/v1/crop/x_0,y_0,w_545,h_477,q_80,enc_auto/f89b06_84f351d8c16f47ff95fea1b669571a80~mv2.jpg" alt=' 1' />
      </div>
      <div className="grid-block img-left">
        <img src="https://static.wixstatic.com/media/11062b_6c72447c65c54728a0e3e956087a15b2~mv2.jpg/v1/fill/w_531,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_6c72447c65c54728a0e3e956087a15b2~mv2.jpg" alt=' 2' />
      </div>
      <div className="grid-block">
        <h3 className='txt-block-hdg'>Il est temps de positiver !  </h3>
        <p className='txt-block-pg'>Marre des sites qui vous plombe le moral ? Cliquez ici, vous trouverez tous nos conseils de bien être et autres !</p>
        <button className='btn-block'>En savoir plus</button>
      </div>
      <div className="grid-block">
        <h3 className='txt-block-hdg'>Je prépare mon rendez-vous ETP</h3>
        <p className='txt-block-pg'>Vous souhaitez vous préparer à votre premier rendez-vous d'éducation thérapeutique ? C'est par ici!</p>
        <button className='btn-block'>En savoir plus</button>
      </div>
      <div className="grid-block">
        <img src="https://static.wixstatic.com/media/11062b_65c487b2a18a4c82a6f3228cfa3e1759~mv2.jpg/v1/fill/w_531,h_549,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_65c487b2a18a4c82a6f3228cfa3e1759~mv2.jpg" alt=' 2' />
      </div>
    </section>

  );
}
export default Accueil;