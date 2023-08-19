import React from 'react'
import './Greffe.css'

function Greffe() {
    return (
        <div className="greffe">
            <div className="ligne">
                <div className="image-container">
                    <img src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique' />
                    <div className="image-text">
                        <h2 className="titre la">LA</h2>
                        <h2 className="titre">GREFFE</h2>
                    </div>
                </div>
            </div>
            <div className="ligne two-block">
                <div className="rectangle-content">
                    <div className="square">
                        <h3>SE PREPARER A LA GREFFE</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                    <div className="square">
                        <h3>LES DIFFERENTES GREFFE</h3>
                        <p>Description...</p>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Se préparer à la greffe </h3>
                    <p>1. Avant la greffe</p>
                    <p>2. Pendant la greffe</p>
                    <p>3. Après la greffe</p>
                </div>
            </div>
            <div className="ligne">
                <div className="section">
                    <h3>Informations sur la greffe</h3>
                    <p>1. Le parcours du greffon (vivant/cadavérique)</p>
                    <p>2. Le don du rein</p>
                </div>
            </div>
        </div>
    );
}

export default Greffe