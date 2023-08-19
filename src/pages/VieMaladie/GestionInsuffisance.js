import React from 'react';
import './GestionInsuffisance.css';


function GestionInsuffisance() {
  return (
    <div className="gestioninsuffisance">
            <div className="ligne ligne1">
                <div>
                    <img src='https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg' alt='marbre'></img>
                </div>
                <div className="image-container">
                    <div className="image-text">
                        <h2>GÉRER SON INSUFFISANCE RÉNALE </h2>
                        <p>Description du texte...</p>
                    </div>
                </div>
            </div>
            <div className="ligne two-block">
                <div className="rectangle-content">
                    <div className="square">
                        <h3>FAIRE ATTENTION A SON ALIMENTATION</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                    <div className="square">
                        <h3>GERER SON INSUFFISANCE RENALE EN AUTONOMIE</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Faire attention à son alimentation</h3>
                    <p>1. Bien manger</p>
                    <p>2. Outil de calcul de l'IMC</p>
                    <p>3. Équilibre du diabète</p>
                    <p>4. Les régimes à suivre</p>
                    <p>5. Boire et manger</p>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Gérer son insuffisance rénale en autonomie</h3>
                    <p>1. Contrôler sa tension artérielle</p>
                    <p>2. Contrôler sa protéinurie</p>
                    <p>3. Médicaments à éviter</p>
                    <p>4. Lire les indicateurs d'analyses biologiques</p>
                    <p>5. Bien prendre son traitement</p>
                </div>
            </div>
        </div>
  )
}

export default GestionInsuffisance