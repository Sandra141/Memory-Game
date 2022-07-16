import { memo } from 'react';
import flipSide from './images/flipSide.jpg';
import doublePictureArray from './memoryList';

const Card = (pic) => {

    return (
        <img src={flipSide} className='cardImage' id={pic.props.id} />
    );
}

export default Card;