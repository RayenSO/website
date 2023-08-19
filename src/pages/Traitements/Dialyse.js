import React from 'react'
import './Dialyse.css';

function Dialyse() {
    return (
        <div className="dialyse">
            <div className="ligne">
                <div className="image-container">
                    <img src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique' />
                    <div className="image-text">
                        <h2 className="titre la">LA</h2>
                        <h2 className="titre">DIALYSE</h2>
                    </div>
                </div>
            </div>
            <div className="ligne two-block">
                <div className="rectangle-content">
                    <div className="square">
                        <h3>SE PREPARER A LA DIALYSE</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                    <div className="square">
                        <h3>LES DIFFERENTES DIALYSES</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Se préparer à la dialyse </h3>
                    <p>1. Information sur la dialyse ( qu'est ce que c'est ? ...)</p>
                    <p>2. Le potassium</p>
                    <p>3. Création de la fistule</p>
                    <p>4. Cathéter de canaux, qu'est ce que c'est ?</p>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Les différentes dialyses</h3>
                    <p>1. La dialyse péritonéale</p>
                    <p>2. Hémodialyse à domicile (gestion de la dialyse à domicile ...)</p>
                    <p>3. Hémodialyse en centre</p>
                    <p>4. La dialyse longue de nuit</p>
                    <p>5. Auto-dialyse</p>
                    <p>6. Les aidants</p>
                </div>
            </div>
        </div>
    );
}

export default Dialyse;