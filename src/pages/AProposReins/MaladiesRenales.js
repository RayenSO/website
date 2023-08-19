import React from 'react'
import './MaladiesRenales.css'

function MaladiesRenales() {
    return (
        <div className="maladierenales">
            <div className="ligne ligne1">
                <div className="image-container">
                    <img src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique' />
                    <div className="image-text">
                        <h2>Les maladies rénales</h2>
                        <p>Description du texte...</p>
                    </div>
                </div>
                <div>
                    <img src='https://static.wixstatic.com/media/f89b06_84f351d8c16f47ff95fea1b669571a80~mv2.jpg/v1/fill/w_605,h_342,al_c,lg_1,q_80,enc_auto/f89b06_84f351d8c16f47ff95fea1b669571a80~mv2.jpg' alt='mains avec reins'></img>
                </div>
            </div>
            <div className="ligne two-block">
                <div className="rectangle-content">
                    <div className="square">
                        <h3>INFORMATIONS GENERALES</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                    <div className="square">
                        <h3>L'INSUFFISANCE RENALE</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>L'insuffisance rénale</h3>
                    <p>1. Comment préserver ses reins et ralentir la progression de la maladie ?</p>
                    <p>2. Bien manger ( Régime pauvre en sel et hypoprotéique etc ...)</p>
                    <p>3. Potassium</p>
                    <p>4. Equilibre du diabète</p>
                    <p>5. Les activités sportives</p>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Protéger ses reins en autonomie</h3>
                    <p>1. Lire les indicateurs d'analyses biologiques</p>
                    <p>2. Outils de calcul de l'IMC</p>
                    <p>3. Contrôler sa protéinurie</p>
                    <p>4. Contrôler sa tension artérielle</p>
                </div>
            </div>
        </div>
    );
}

export default MaladiesRenales;


