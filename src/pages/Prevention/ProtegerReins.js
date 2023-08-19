import React from 'react'
import './ProtegerReins.css'

function ProtegerReins() {
    return (
        <div className="protegerreins">
            <div className="ligne">
                <div className="image-container">
                    <img src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique' />
                    <div className="image-text">
                        <h2>Protéger ses reins</h2>
                        <p>Description du texte...</p>
                    </div>
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
                    <h3>Informations générales</h3>
                    <p>1. Les différentes maladies rénales</p>
                    <p>2. Informations sur les maladies rénales simplifiées</p>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>L'insuffisance rénale</h3>
                    <p>1. Qu'est-ce que l'ISR ?</p>
                    <p>2. Quelles peuvent être les causes ?</p>
                    <p>3. Les symptômes de l'insuffisance rénale</p>
                    <p>4. Les différents stades et son évolution</p>
                    <p>5. Les complications</p>
                </div>
            </div>
        </div>
    );
}

export default ProtegerReins