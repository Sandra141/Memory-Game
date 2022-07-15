import React, { useState, useEffect } from 'react';
import './memory.css';
import memoryList from './memoryList';
import Card from './Card';
import flipSide from './images/flipSide.jpg';

/*

implement:
- when done: option to play again
-different sizes of fields

*/

let moveCounter = 0;
let cardCounter = 0;

const Memory = () => {
    const [turnedCards, setTurnedCards] = useState([]);
    const [allOpenedCards, setAllOpenedCards] = useState([]);

    useEffect(() => {
        if(moveCounter === 2) {
            //---------compare cards-----------
            const srcCard1 = turnedCards[0].getAttribute('src');
            const srcCard2 = turnedCards[1].getAttribute('src');
            //--------same cards-------------
            if(srcCard1 === srcCard2) {
                setAllOpenedCards((oldArray) => [...oldArray, turnedCards[0], turnedCards[1]]);
                const congrats = document.querySelector('#memoryCongrats');
                congrats.setAttribute('class', 'memoryCongratsShown');
                moveCounter = 0;
                cardCounter += 1;
                setTurnedCards([]);
                setTimeout(() => {
                    congrats.setAttribute('class', 'memoryCongratsHidden');
                }, 1300);
            } else {
                //--------turn back if no match------------
                setTimeout(() => {
                    turnedCards.forEach((turnedCard) => {
                        turnedCard.setAttribute('src', flipSide);
                        setTurnedCards([]);
                    });
                    moveCounter = 0;
                }, 1300);
            }
        }
    }, [turnedCards]);

    useEffect(() => {
        if(cardCounter === (memoryList.length / 2)) {
            const congrats = document.querySelector('#memoryPlayAgain');
            congrats.setAttribute('class', 'playAgainShown');
        }
    }, [cardCounter]);
    
    const handleClick = (e) => {
        if(moveCounter === 0 || moveCounter === 1) {
            const card = e.target;
            const hiddenPicture = memoryList.find((obj) => obj.id === Number(card.id)).source;
            card.setAttribute('src', hiddenPicture);
            setTurnedCards((oldArray) => [...oldArray, card]);
            moveCounter += 1;            
        }
    }

    const handlePlayAgainClick = (e) => {
        const button = e.target.getAttribute('id');
        const congrats = document.querySelector('#memoryPlayAgain');
        if(button === 'yes') {
            congrats.setAttribute('class', 'playAgainHidden');
            //turn all cards around
            allOpenedCards.forEach(img => {
                img.setAttribute('src', flipSide);
            });
            //mix them

            moveCounter = 0;
            cardCounter = 0;
            setTurnedCards([]);
        } else {
            congrats.setAttribute('class', 'playAgainHidden');
        }
    }

    return(
        <div className='memoryContainer'>
            <div className='memoryWindow'>
                {
                memoryList.map((pic) => {
                    return(
                        <div className='memoryCard' onClick={handleClick} key={pic.id} >
                            <Card props={pic} />
                        </div>
                    );
                })
                }
                <p className='memoryCongratsHidden' id='memoryCongrats' >Well done</p>
                <div className='playAgainHidden' id='memoryPlayAgain'>
                    <p>Would you like to play again?</p>
                    <button onClick={handlePlayAgainClick} id='yes' >yes</button>
                    <button onClick={handlePlayAgainClick} id='no' >no</button>
                </div>
            </div>
        </div>
    );
}

export default Memory;