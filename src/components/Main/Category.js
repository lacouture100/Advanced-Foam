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
            categoryLink: this.props.categoryLink,
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
        
        const { property,title,subtitle,categoryLink,slug } = this.props;
   
        return(
            <div className="category-container">
                <section>
                    <button type="button"
                            className="category-button">        
                        <Link href={categoryLink}><a href={categoryLink} className="category-title">{title}</a></Link>
                    </button>
                
                    <div className="category-title-line"></div>
                    <h3 className="category-subtitle">{subtitle}</h3>
                </section>
                <Link href={`${categoryLink}/${slug}`}><a href={`${categoryLink}/${slug}`} className=""><Card property={property}/> </a></Link>
                    
            </div>   
        )
    }
}
Category.propTypes = {
    property: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    
}

