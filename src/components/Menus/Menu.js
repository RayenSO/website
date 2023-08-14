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
                        <li><a href='/#'>Les reins et leurs fonctions </a></li>
                        <li><a href='/#'>Les maladies rénales</a></li>
                    </ul>
                </li>
                <li>
                    PREVENTION
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/#'>Dépistage</a></li>
                        <li><a href='/#'>Protéger ses reins</a></li>
                    </ul>
                </li>
                <li>
                    LES TRAITEMENTS DE SUPPLEANCE
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/#'>Avant la dialyse et la greffe</a></li>
                        <li><a href='/#'>La dialyse</a></li>
                        <li><a href='/#'>La greffe</a></li>
                        <li><a href='/#'>Aide au choix</a></li>
                    </ul>
                </li>
                <li>
                    VIVRE AVEC LA MALADIE
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/#'>Vie et organisation au quotidien</a></li>
                        <li><a href='/#'>Grossesse et information pour la femme</a></li>
                        <li><a href='/#'>Gérer son insuffisance rénale</a></li>
                        <li><a href='/#'>Positive attitude</a></li>
                        <li><a href='/#'>Droits sociaux</a></li>
                    </ul>
                </li>
                <li><a href="/nutrition">NUTRITION</a></li>
                <li><a href="/mon-parcours">MON PARCOURS</a></li>
                <li>
                    POUR EN SAVOIR PLUS
                    <BiChevronDown/>
                    <ul className="sub-menu">
                        <li><a href='/#'>Documentation</a></li>
                        <li><a href='/#'>Echanges</a></li>
                        <li><a href='/#'>Témoignages</a></li>
                    </ul>
                </li>
            </ul>
        </nav>


    );
}

export default Menu;