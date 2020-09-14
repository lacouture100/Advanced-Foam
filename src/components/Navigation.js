import React, { Component } from 'react';
import Link from 'next/link'
import '../../styles/Navigation.css'


//const links = ['Main','Studio','Construction','Packaging','Contact Us','About']
const inStockLink = '/Construction/redicoat'
//const logo = require('/img/logos/advancedFoam_main.png');
const logo = '/img/logos/advancedFoam_main.png'


export default function Navigation (props){

	
		return(

			<div className="navbar">

				<img src={`http://www.advancedfoam.com/wp-content/uploads/2020/09/advancedFoam_${props.site ? props.site : 'construction' }.png`} alt={""} className="navbar-img"></img>
		
				<div className="navbar__navigation-container">
				
						
					<button className="stockButton">
					<Link href="/construction/redicoat"><a href="/construction/redicoat">IN STOCK NOW</a></Link>
							            
							</button>
					<ul className="navbar__titles">
						<li className="navbar__title"><Link href="/"><a href="/">Main</a></Link></li>
						<li className="navbar__title"><Link href="/studio"><a href="/studio">Studio</a></Link></li>
						<li className="navbar__title"><Link href="/construction"><a href="/construction">Construction</a></Link></li>
						<li className="navbar__title"><Link href="/packaging"><a href="/packaging">Packaging</a></Link></li>
						<li className="navbar__title"><Link href="/contact"><a href="/contact">Contact Us</a></Link></li>
						<li className="navbar__title"><Link href="/about"><a href="/about">About</a></Link></li>
					</ul>
				</div>
		</div>
		)
	

}