import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
    const [activeItems, setActiveItems] = useState([]);
    const menuItems = [
        {
            title: 'A PROPOS DES REINS',
            submenu: [
                { title: 'Les reins et leurs fonctions', link: '/les-reins-et-leurs-fonctions' },
                { title: 'Les maladies rénales', link: '/les-maladies-renales' }
            ]
        },
        {
            title: 'PREVENTION',
            submenu: [
                { title: 'Dépistage', link: '/depistage' },
                { title: 'Protéger ses reins', link: '/protéger-ses-reins' }
            ]
        },
        {
            title: 'LES TRAITEMENTS DE SUPPLEANCE',
            submenu: [
                { title: 'Avant la dialyse et la greffe', link: '/avant-la-dialyse-et-la-greffe' },
                { title: 'La dialyse', link: '/la-dialyse' },
                { title: 'La greffe', link: '/la-greffe' },
                { title: 'Aide au choix', link: '/aide-au-choix' }
            ]
        },
        {
            title: 'VIVRE AVEC LA MALADIE',
            submenu: [
                { title: 'Vie et organisation au quotidien', link: '/vie-et-organisation-au-quotidien' },
                { title: 'Grossesse et information pour la femme', link: '/grossesse-et-information-pour-la-femme' },
                { title: 'Gérer son insuffisance rénale', link: '/gérer-son-insuffisance-rénale' },
                { title: 'Positive attitude', link: '/positive-attitude' },
                { title: 'Droits sociaux', link: '/droits-sociaux' },
            ]
        },
        {
            title: 'NUTRITION',
            link: '/nutrition'
        },
        {
            title: 'MON PARCOURS',
            link: '/mon-parcours'
        },
        {
            title: 'POUR EN SAVOIR PLUS',
            submenu: [
                { title: 'Documentation', link: '/documentation' },
                { title: 'Échanges', link: '/echanges' },
                { title: 'temoignages', link: '/temoignages' }
            ]
        },
    ];
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    const handleItemClick = (index) => {
        if (menuItems[index].submenu.length === 0) {
            return;
        }
        if (activeItems.includes(index)) {
            setActiveItems(activeItems.filter(itemIndex => itemIndex !== index));
        } else {
            setActiveItems([...activeItems, index]);
        }
    };

    return (
        <nav className={`main-menu-hamburger ${isMenuOpen ? 'visible' : ''}`}>
            <ul className='list-hamburger-menu'>
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        {menuItem.submenu && menuItem.submenu.length > 0 ? (
                            <button className="menu-item-button" onClick={() => handleItemClick(index)}>
                                <span>{activeItems.includes(index) ? <BiChevronUp /> : <BiChevronDown />}</span>
                                {menuItem.title}
                            </button>
                        ) : (
                            <a className="menu-item-link" href={menuItem.link}>
                                {menuItem.title}
                            </a>
                        )}
                        {activeItems.includes(index) && menuItem.submenu && menuItem.submenu.length > 0 && (
                            <ul className="sub-menu">
                                {menuItem.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a className='sub-title' href={subItem.link}>{subItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default HamburgerMenu;

