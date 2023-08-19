import React from 'react'
import './Depistage.css'
function Depistage() {
    return (
        <div className="depistage">
            <div className='ligne'>
            <div className="image-container">
                    <img src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique'/>
                    <div className="image-text">
                        <h2>Dépistage</h2>
                        <p>Description du texte...</p>
                    </div>
                </div>
            </div>
            <div className='ligne'><h1>Pourquoi se faire dépister ?</h1></div>
            <div className='ligne'><h1>Quand ?</h1></div>
            <div className='ligne'><h1>Comment ?</h1></div>
            <div className='ligne'><h1>Où ?</h1></div>
            <div className='ligne'><h1>Faire contrôler la famille (facteurs génétiques...)</h1></div>
        </div>
    )
}

export default Depistage



/*
<div className="mon-composant">
    <div className="ligne picture">
        <div className="image-container">
            <img className='img1' src='https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg' alt='Fond classique' />
            <div className="image-text">
                <h2>Dépistage</h2>
                <p>Description du texte...</p>
            </div>
        </div>
    </div>
    <div className="ligne">
        <h1> Pourquoi se faire dépister?</h1>
    </div>
    <div className="ligne"><h1>Quand ?</h1></div>
    <div className="ligne"><h1>Comment ?</h1> </div>
    <div className="ligne"><h1>Où ? </h1></div>
    <div className="ligne"><h1>Faire contrôler la famille</h1></div>
</div>
*/