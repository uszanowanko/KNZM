import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Button from "./Button";
class CategoryAboutUs extends Component {

    
  render() {
    return (
      <section className="subSection__AboutCircle">
      <section id='subSection--aboutID'  className="group__subSection mainSection__group--about">
          <div className="subSection__about--right">
              <div className="about__logoBox">
                  <div className="about__logoBox--logo">
                      <div className="darkBlueBox bottomRight">K</div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox">
                          <div className="redCircle"></div>
                      </div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox bottomRight">N</div>
                      <div className="darkBlueBox">
                          <div className="redCircle"></div>
                      </div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox ">
                          <div className="redCircle"></div>
                      </div>
                      <div className="darkBlueBox bottomRight">Z</div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox">
                          <div className="redCircle"></div>
                      </div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox"></div>
                      <div className="darkBlueBox bottomRight">M</div>
                  </div>
                  <h1 className="about__logoBox--circleName">Koło Naukowe Zastosowań Matematyki</h1>
              </div>
              <div className="right__txt--about">
                  <h1 className="subSection__title subSection__title--about">O nas</h1>
                  <p className="subSection__txt--about">Lorem ipsum dolor sit amet, consectetur
                      adipisicing
                      elit.
                      Quia, eaque illum. Labore nihil dolorum, rem molestias autem ipsam! Porro,
                      culpa
                      recusandae.
                      Nesciunt, ab debitis hic vero eos aperiam quidem atque?</p>
                  <div className="subSection__about--btns">

                      <Button className="about__btns--readMore" href='/categoryactivity' name = 'Działalność' {...this.props}></Button>
                      <Button className="about__btns--readMore" href='/contact'  name = 'Kontakt' {...this.props}></Button>
                  </div>
              </div>
          </div>
          <div className="subSection__about--left">

          </div>
      </section>

  </section>
    );
  }
}
 
export default withRouter(CategoryAboutUs);
