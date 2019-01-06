import React, { Component } from "react";
import partnerImg from './img/partnerImg.jpg'
import aboutUsImg from './img/aboutUsImg.jpg'
import administrationImg from './img/headerImg1.jpg'
import activityImg from './img/headerImg.jpg'
import joinUsImg from './img/people.jpg'
import conferenceImg from './img/conferenceImg.jpg'
import {withRouter} from 'react-router-dom';
import SliderFunction from "./js/slider";


// import SliderFunction from './js/slider';

// const images = ['partnerImg.jpg', 'work.jpg','people.jpg', 'work.jpg','people.jpg','partnerImg.jpg']
// const titles = ['zostań partnerem', 'dołącz do nas', 'konferencja','o nas','nasz dzialalnosc','zarząd']
class Panel extends Component {
  render() {
    return <div className="category__item category__item--1" onClick={this.onClick}>
        <div className="category__item--img" style = {{backgroundImage: `url(${this.props.img} )` }} ></div>
        <h1 className="category__item--title">{this.props.title}</h1>
        <div className="category__item--line"></div>
        <button className="category__item--btn">Czytaj</button>   
    </div>
  }

  onClick = () => {
    this.props.history.push(this.props.href)
  }
}


class CategoryPanels extends Component {
  render() {
    
    const panelsList = [
      {id: 1, img: partnerImg, title: 'zostań partnerem', href: '/categorypartner'},
      {id: 2, img: joinUsImg, title: 'dołącz do nas', href: '/categoryjoinus'},
      {id: 3, img: conferenceImg, title:  'konferencja', href: '/categoryconference'},
      {id: 4, img: aboutUsImg, title:  'o nas', href: '/categoryaboutus'},
      {id: 5, img: activityImg, title: 'nasza działalność', href: '/categoryactivity'},
      {id: 6, img: administrationImg, title: 'zarząd', href: '/categoryadministration'}
      
    ]
    
    const panelsFirstRow = panelsList.map(panel => (
      <Panel
        key={panel.id}
        id={panel.id}
        img={panel.img}
        title={panel.title}
        href={panel.href}
        {...this.props}
      />
    ))
    
    // SliderFunction()
    return (
     <div>
        <section className="mainHeader__photo slider">
          <div className="sliderImg"></div>
          <div className="sliderTextH1">
            <h1 className="sliderH1">Dołącz do nas!</h1>
            <p className="sliderTxt">Przyjdź na najbliższe spotkanie KNZM i zostań jego członkiem!</p>
          </div>
          <div className="dots">
            <span id="one" className="active"></span>
            <span id="two"></span>
            <span id="three"></span>
          </div>
      </section>
      <section className="categorySection">
        <div className="categorySection__row categorySection__firstRow">
        
          {panelsFirstRow.filter(panel => panel.props.id <= 3)}
          
        </div>
        <div className="categorySection__row categorySection__secondRow">
    
          {panelsFirstRow.filter(panel => panel.props.id > 3)}
    
        </div>
        
      </section>
    </div>
    )
  }

  componentDidMount() {
    SliderFunction();
  }
 
}

export default withRouter(CategoryPanels);