import React, { Component } from 'react';
import './Clients.css';
import { BrowserRouter as Router,Link,NavLink,withRouter } from 'react-router-dom';

import data from '../../data/clients_data'

// class component

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : data.Clients
    }
    this.goToOutsideLink = this.goToOutsideLink.bind(this);
  }

  
  goToOutsideLink(link){
    window.location.href =link;
}

  render(){
      const clients = this.state.data.map((client,index) =>(
        <div key={index}className="client">
          <a href={client.link}>
          <img src={client.imgSrc}
              alt={client.imgAlt}
              className={`${client.name}-img client-img`}
              />
              </a>
  <h4 className="client-name">{client.name}</h4>
        </div>
      ))
      
    return(
      <div className="clients-main">
        <h3 className="clients-main-title"> 
          OUR CLIENTS
          <div className="clients-title-line"></div>
        </h3>
        
        <div className="clients-main-container">
          {clients}
        </div>
      </div>
    )
  }
}

export default withRouter(Clients);
