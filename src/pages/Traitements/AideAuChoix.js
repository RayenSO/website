import React from 'react';
import './AideAuChoix.css';


function AideAuChoix() {
    return (
        <div className="aideauchoix">
            <div className="ligne">
                <div className="image-container">
                    <img src='https://static.wixstatic.com/media/0c2d11194b8042ca9f11f7f681339102.jpg/v1/fill/w_980,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0c2d11194b8042ca9f11f7f681339102.jpg' alt='Fond classique' />
                    <div className="image-overlay">
                        <div className="overlay-content">
                            <h2>AIDE AU</h2>
                            <h2>CHOIX</h2>
                            <p>Description....</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ligne">
                <h1>Rencontre avec des patients atteints de maladies rénales</h1>
            </div>
            <div className="ligne">
                <h1>Les traitements conservateurs</h1>
            </div>
            <div className="ligne">
                <h1>Outils d'aide à la prise de décision</h1>
            </div>
            <div className="ligne">
                <h1>Témoignages de différents profils patients</h1>
            </div>
        </div>
    );
}

export default AideAuChoix;