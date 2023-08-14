import React, { useState } from 'react';
import './HamburgerMenu.css';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
    const [activeItems, setActiveItems] = useState([]);
    const menuItems = [
        {
            title: 'A PROPOS DES REINS',
            submenu: [
                { title: 'Les reins et leurs fonctions', link: '/#' },
                { title: 'Les maladies rénales', link: '/#' }
            ]
        },
        {
            title: 'PREVENTION',
            submenu: [
                { title: 'Les reins et leurs fonctions', link: '/#' },
                { title: 'Les maladies rénales', link: '/#' }
            ]
        },
        {
            title: 'LES TRAITEMENTS DE SUPPLEANCE',
            submenu: [
                { title: 'Les reins et leurs fonctions', link: '/#' },
                { title: 'Les maladies rénales', link: '/#' }
            ]
        },
        {
            title: 'VIVRE AVEC LA MALADIE',
            submenu: [
                { title: 'Les reins et leurs fonctions', link: '/#' },
                { title: 'Les maladies rénales', link: '/#' }
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
                { title: 'Les reins et leurs fonctions', link: '/#' },
                { title: 'Les maladies rénales', link: '/#' }
            ]
        },
    ];

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

