import React, { Component } from "react";
const Nav = () => {
// const arrowDown = document.querySelector('.mainNav__link--arrow');

// const offElements__arrowDown = document.querySelectorAll('.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')

// function addOffclassName() {
//     for (var i = 0; i < offElements__arrowDown.length; i++) {
//         offElements__arrowDown[i].classNameList.toggle('off');
//     }

// }

// $('.mainNav__link--arrow, .mainNav__link--off').on('click', addOffclassName);
  return (
    <React.Fragment>
    
    <nav className="mainNav landscape">
        <ul className="mainNav__list">
            <li className="mainNav__listItem"><a className="mainNav__link" href="#">Start</a></li>
            <li className="mainNav__listItem">
                <div className="mainNav__link--arrow"> Menu <div className="arrow-down-box">
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </li>
            <li className="mainNav__listItem"><a className="mainNav__link" href="#">Kontakt</a></li>
        </ul>
    </nav>
    
    <nav className="mainNav portrait">
        <ul className="mainNav__list">
            <li className="mainNav__listItem"><a className="mainNav__link--arrow" href="#">
                    <i className="fas fa-bars "></i>
                    <i className="fas fa-times off"></i>
                </a></li>
        </ul>
    </nav>
    
    <nav className="mainNav--off off">
        <ul className="mainNav__list--off">
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><a className="mainNav__link--off portrait" href="#">Start</a></li>
                <li className="mainNav__listItem--off"><a className="mainNav__link--off portrait" href="#">Kontakt</a></li>

            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><a id="menuSection" className="mainNav__link--off" href="#">O nas</a></li>
                <li className="mainNav__listItem--off"><a id="buttonSection" className="mainNav__link--off" href="#">Nasza działalność</a></li>
                <li className="mainNav__listItem--off"><a id="hoverEffectSection" className="mainNav__link--off" href="#">Zarząd</a></li>
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><a id="signSection" className="mainNav__link--off" href="#">Zostań partnerem
                    </a></li>
                <li className="mainNav__listItem--off"><a id="signSection" className="mainNav__link--off" href="#">Dołącz do nas
                    </a></li>
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><a id="popubSection" className="mainNav__link--off" href="#">Aktualności</a></li>
                
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><a id="animationSection" className="mainNav__link--off" href="#">Konferencja</a></li>
            
            </div>
        </ul>
    </nav>
    </React.Fragment>
  )
} 
 
export default Nav;