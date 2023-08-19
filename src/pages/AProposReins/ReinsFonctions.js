import React from 'react';
import './ReinsFonctions.css';

function ReinsFonctions() {
    return (
        <div className="reinsfonctions">
            
            <div className="ligne ligne1">
                <div>
                    <img src='https://static.wixstatic.com/media/f89b06_b953daea49c04b65949b7bd7602e2cf0f000.jpg' alt='animation reins dessin'/>
                </div>
                <div className="image-container">
                    <img src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique'/>
                    <div className="image-text">
                        <h2>Les reins et leurs fonctions</h2>
                        <p>Description du texte...</p>
                    </div>
                </div>
            </div>
            <div className="ligne">
                <h1> A quoi servent les reins ?</h1>
            </div>
            <div className="ligne"><h1>Comment fonctionnent les reins ?</h1></div>
            <div className="ligne"><h1>La raisons d'un dysfonctionnement </h1> </div>
            <div className="ligne"><h1>Préserver les reins et ralentir la progression de la maladie </h1></div>
        </div>
    );
};

export default ReinsFonctions;
