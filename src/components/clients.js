import React, { Component } from 'react';
import Link from 'next/link'
import '../../styles/Clients.css'

const data ={
  "Clients":[
      {
          "name" : "Universal Studios",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/universalStudios_logo.png",
          "imgAlt" : "Universal Studios logo",
          "link" : "https://www.universalstudios.com"
      },
      {
          "name" : "Dreamworks",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/dreamworks_logo.png",
          "imgAlt" : "Dreamworks logo",
          "link" : "https://www.dreamworks.com"
      },
      {
          "name" : "Hasbro",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/hasbro_logo.png",
          "imgAlt" : "Hasbro logo",
          "link" : "https://www.hasbro.com"
      },
      {
          "name" : "Honda",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/honda_logo.png",
          "imgAlt" : "Honda logo",
          "link" : "https://www.honda.com"
      },
      {
          "name" : "Nissan",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/nissan_logo.png",
          "imgAlt" : "Nissan logo",
          "link" : "https://www.nissan.com"
      },
      {
          "name" : "The Zanuck Company",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/theZanuckCompany_logo_BW.png",
          "imgAlt" : "The Zanuck Company logo",
          "link" : "http://www.zanuckco.com/"
      },
      {
          "name" : "Fremantle Media North America",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/fremantleMediaNorthAmerica_logo.png",
          "imgAlt" : "Fremantle Media logo",
          "link" : "https://www.fremantle.com"
      },
      {
          "name" : "Dannon",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/dannon_logo.png",
          "imgAlt" : "Dannon logo",
          "link" : "https://www.dannon.com"
      },
      {
          "name" : "56th Grammy Awards",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/grammyAwards_logo.png",
          "imgAlt" : "56th Grammy Awards logo",
          "link" : "https://www.grammy.com"
      },
      {
          "name" : "Infected Mushroom",
          "imgSrc" : "http://www.advancedfoam.com/wp-content/uploads/2020/09/infectedMushroom_logo.png",
          "imgAlt" : "Infected Mushroom logo",
          "link" : "https://www.infected-mushroom.com"
      },
  ]

}


export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : data.Clients
    }
  }

  render(){
      const clients = this.state.data.map((client,index) =>(
        <div key={index}className="client">
        <Link href={client.link}>
          <a href={client.link}>
          <img src={client.imgSrc}
              alt={client.imgAlt}
              className={`${client.name}-img client-img`}
              />
              </a>
          </Link>
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

