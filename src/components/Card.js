import flipSide from './images/flipSide.jpg';

const Card = (pic) => {
    return (
        <img src={flipSide} className='cardImage' id={pic.props.id} />
    );
}

export default Card;