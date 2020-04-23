import React, {Component} from 'react';
import PropType from 'prop-types';
import './style.css';

class Card extends Component {
    static defaultProps={ 
        card: {
            title: 'is undefined',
            description: "is undefined",
            number: undefined,
            term: undefined,
            type: 'is undefined'
        }

    }
   static propTypes={
    card: PropType.shape({ 
        title: PropType.string.isRequired,
        description: PropType.string,
        number: PropType.number.isRequired,
        term: PropType.number.isRequired,
        type: PropType.oneOf(['Debit', 'Credit'])
    })
 


    }
    render() {
        const {title, description, number, term, type}=this.props.card;
        return (
            <div className='card-info'>
                <h3>{title}</h3>
                <p>description: {description}</p>
                <p>number: {number}</p>
                <p>term: {term }</p>
                <p>type: {type}</p>
                <hr />
            </div>
        );
    }
}
   export default Card;