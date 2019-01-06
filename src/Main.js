import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from "./Contact";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CategoryAboutUs from "./CategoryAboutUs";
import CategoryActivity from "./CategoryActivity";
import Logo from "./Logo";

// import Slider from "./Slider";

import CategoryAdministration from "./CategoryAdministration";
import CategoryCurrency from "./CategoryCurrency";
import CategoryJoinUs from "./CategoryJoinUs";
import CategoryPanel from "./CategoryPanel";
import CategoryPartner from "./CategoryPartner";
import AddOffClass from './menu';
import Scripts from './js/script';
import CategoryConference from "./CategoryConference";
// import Logo from "./Logo";


class Main extends Component {
    render() {
        return (
            <HashRouter>
        <div className = 'container'>
         
       
    <nav className="mainNav landscape">
        <ul className="mainNav__list">
            <li className="mainNav__listItem"><NavLink className="mainNav__link" exact to="/">Start</NavLink></li>
            <li className="mainNav__listItem">
                <div className="mainNav__link--arrow"> Menu <div className="arrow-down-box">
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </li>
            <li className="mainNav__listItem"><NavLink className="mainNav__link" to="/contact">Kontakt</NavLink></li>
        </ul>
    </nav>
   
    <nav className="mainNav portrait">
        <ul className="mainNav__list">
            <li className="mainNav__listItem mainNav__link--arrow">
                    <i className="fas fa-bars "></i>
                    <i className="fas fa-times off"></i>
               </li>


        </ul>
    </nav>
    
    <nav className="mainNav--off off">
        <ul className="mainNav__list--off">
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink className="mainNav__link--off portrait" exact to="/">Start</NavLink></li>
                <li className="mainNav__listItem--off"><NavLink className="mainNav__link--off portrait" to="/contact">kontakt</NavLink></li>

            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink id="menuSection" className="mainNav__link--off" to="/categoryaboutus">O nas</NavLink></li>
                <li className="mainNav__listItem--off"><NavLink  id="buttonSection" className="mainNav__link--off" to="/categoryactivity">Nasza działalność</NavLink></li>
                <li className="mainNav__listItem--off"><NavLink id="hoverEffectSection" className="mainNav__link--off" to="/categoryadministration">Zarząd</NavLink></li>
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink  id="signSection" className="mainNav__link--off" to="/categorypartner">Zostań partnerem</NavLink>
                    </li>
                <li className="mainNav__listItem--off"><NavLink id="signSection" className="mainNav__link--off" to="/categoryjoinus">Dołącz do nas</NavLink>
                   </li>
            </div>
            <div className="mainNav__category">
                {/* <li className="mainNav__listItem--off"><NavLink id="popubSection" className="mainNav__link--off" to="/categorycurrency">Aktualności</NavLink></li> */}
                
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink  id="animationSection" className="mainNav__link--off" to="/categoryconference">Konferencja</NavLink></li>
            
            </div>
        </ul>
    </nav> 
         
          <div className="content">
            <Route exact path="/" component={CategoryPanel}/>
            <Route exact path="/" component={Logo}/>
            <Route path="/categoryaboutus" component={CategoryAboutUs}/>
            <Route path="/categoryactivity" component={CategoryActivity}/>
            <Route path="/categoryjoinus" component={CategoryJoinUs}/>
            <Route path="/categorycurrency" component={CategoryCurrency}/>
            <Route path="/categoryconference" component={CategoryConference}/>
            <Route path="/categorypartner" component={CategoryPartner}/>
            <Route path="/categoryadministration" component={CategoryAdministration}/>
            <Route path="/contact" component={Contact}/>
          
     
          </div>
          <section className="contactSection">
        <h1 className="contactTitle">Kontakt</h1>
       
        <ul className="siteMap__list siteMap__list--contact">
            <li className="siteMapContact__item siteMapContact__item--address list__itemContact"><i className="font__contact fas fa-map-marker-alt"></i>
               
                plac Grunwaldzki 2/4, 50-384 Wrocław
         
            </li>
            <li className="siteMapContact__item list__itemContact"><i className="font__contact fas fa-envelope"></i>
                knzm@math.edu.pl
            </li>
            {/* <li className="siteMapContact__item list__itemContact"><i className="font__contact fab fa-facebook-f" ></i>
            <a target="_blank" href="href ='https://www.facebook.com/KNZM.UWr/'">Facebook</a>
                
            </li> */}
        </ul>
        <section className="socialMedia">
                <h1 className='socialMedia__title--fb'>Odwiedź nas na Facebook'u!</h1>
                <div className="fb-page" data-href="https://www.facebook.com/KNZM.UWr/" data-tabs="timeline" data-height="70"
                    data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                    data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/KNZM.UWr/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/KNZM.UWr/">Koło
                            Naukowe Zastosowań Matematyki</a></blockquote>
                </div>
            </section>
    </section>
            <footer className="footerSection">
                <p className="footer__txt--copyRight">&copy; 2019
                    Koło Naukowe Zastosowań Matematyki
                    Uniwersytetu Wrocławskiego</p>
            </footer>
        </div>
      </HashRouter>
    );
  }

  componentDidMount() {
    AddOffClass();
  }
}

export default Main;
