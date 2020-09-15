import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import '../../styles/Navigation.css'


const inStockLink = '/Construction/redicoat'
//const logo = require('/img/logos/advancedFoam_main.png');
const logo = '/img/logos/advancedFoam_main.png'


export default function Navigation (props){
		return(
			<div>
				<Head>
                    <title>{`Advanced Foam`}</title>
                    <meta
                        name={`Advanced Foam Inc. `}
                        content={`Advanced Foam Inc. - Foam Fabrication and props amde in California.`}/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>

			

			<div className="navbar">
			<Link  href={ `/${props.site ? props.site : 'main' }` }>
                                  <a  href={ `/${props.site ? props.site : 'main' }` }>
				<img src={`http://www.advancedfoam.com/wp-content/uploads/2020/09/advancedFoam_${props.site ? props.site : 'main' }.png`} alt={""} className="navbar-img"></img>
				</a>
				</Link>
				<div className="navbar__navigation-container">
				
						
					<button className="stockButton">
					
					<Link  as={`${'/construction/redicoat'}`} href='/[domain]/[post]' >
                    <a> IN STOCK NOW</a>
                </Link>
							            
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
		</div>
		)

}