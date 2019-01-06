import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import Button from "./Button";
var Lorem = require('react-lorem-component');
class CategoryPartner extends Component {
    render(){
  return(
    <section id='subSection--partnersID' data-section='mainSection__subSection--partners' className="mainSection__subSection mainSection__subSection--partners">
    <div className="subSection__partners--left">
        <h1 className="subSection__title subSection__title--partners">Zostań partnerem</h1>
        <Lorem className="subSection__txt--partners" count = {2} />
        <p className="subSection__txt--partners">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae quisquam possimus corrupti inventore facere minima aperiam exercitationem enim, iure
            totam? Tempora eaque harum impedit eum facilis alias adipisci consequuntur quaerat
            perferendis. Inventore tempore ratione qui impedit obcaecati minus, ullam est culpa
            veritatis nemo sequi. Quae iste temporibus similique nobis neque id magnam debitis,
            sit fugiat, labore culpa ipsa dolorum odit cum natus repellendus sapiente esse ratione
            cumque unde veniam voluptatem aspernatur hic exercitationem. </p>
        <div className="subSection__partners--btns">
        
        <Button className="partners__btns--readMore" href='/categoryactivity'  name = 'Nasza działalność' {...this.props}></Button>
        <Button className="partners__btns--readMore" href='/contact'  name = 'Kontakt' {...this.props}></Button>
           
                   
           
              
        </div>
    </div>
    <div className="subSection__partners--right">

    </div>
</section>
  )
}
}

export default withRouter(CategoryPartner);