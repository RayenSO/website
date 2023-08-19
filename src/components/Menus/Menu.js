import React from 'react';
import './Menu.css'
import {BiChevronDown} from 'react-icons/bi';



const Menu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <nav className="main-menu">
            <ul>
                <li>
                    A PROPOS DES REINS
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/les-reins-et-leurs-fonctions'>Les reins et leurs fonctions </a></li>
                        <li><a href='/les-maladies-renales'>Les maladies rénales</a></li>
                    </ul>
                </li>
                <li>
                    PREVENTION
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/depistage'>Dépistage</a></li>
                        <li><a href='/protéger-ses-reins'>Protéger ses reins</a></li>
                    </ul>
                </li>
                <li>
                    LES TRAITEMENTS DE SUPPLEANCE
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/avant-la-dialyse-et-la-greffe'>Avant la dialyse et la greffe</a></li>
                        <li><a href='/la-dialyse'>La dialyse</a></li>
                        <li><a href='/la-greffe'>La greffe</a></li>
                        <li><a href='/aide-au-choix'>Aide au choix</a></li>
                    </ul>
                </li>
                <li>
                    VIVRE AVEC LA MALADIE
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/vie-et-organisation-au-quotidien'>Vie et organisation au quotidien</a></li>
                        <li><a href='/grossesse-et-information-pour-la-femme'>Grossesse et information pour la femme</a></li>
                        <li><a href='/gérer-son-insuffisance-rénale'>Gérer son insuffisance rénale</a></li>
                        <li><a href='/positive-attitude'>Positive attitude</a></li>
                        <li><a href='/droits-sociaux'>Droits sociaux</a></li>
                    </ul>
                </li>
                <li><a href="/nutrition">NUTRITION</a></li>
                <li><a href="/mon-parcours">MON PARCOURS</a></li>
                <li>
                    POUR EN SAVOIR PLUS
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/documentation'>Documentation</a></li>
                        <li><a href='/echanges'>Échanges</a></li>
                        <li><a href='/temoignagnes'>Témoignages</a></li>
                    </ul>
                </li>
            </ul>
        </nav>


    );
}

export default Menu;