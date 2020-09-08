import  React, {Component } from 'react';
import PropTypes from 'prop-types';
import Card from './MainCard';
import Link from 'next/link';


//this props.property = data object

export default class Category extends Component {

    constructor(props){
        super(props);
        this.state={
            property : this.props.property,
            title: this.props.title,
            subtitle: this.props.subtitle,
            link: this.props.link,
            data:this.props.data
        }
        

    }

    componentDidUpdate(previousProps, previousState){
        if(previousProps.data !== this.props.data){
        this.setState({ 
          data : this.props.data
        }, () => {
          console.log(this.state.data, 'data in Category');
        }); 
        }else {
          return ;
        }
    
        
      }

    render(){
        
        const { property,title,subtitle,link,data } = this.props;
        console.log(link)
        return(
            <div className="category-container">
                <section>
                    <button type="button"
                            className="category-button">        
                        <Link href={link}><a href={link} className="category-title">{title}</a></Link>
                    </button>
                
                    <div className="category-title-line"></div>
                    <h3 className="category-subtitle">{subtitle}</h3>
                </section>
            
                    <Card property={property}
                          link={link} /> 
            </div>   
        )
    }
}
Category.propTypes = {
    property: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}
