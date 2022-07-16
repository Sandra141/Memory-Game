import dragon from './images/one.png';
import pikatchu from './images/two.jpg';
import plant from './images/three.png';
import turtle from './images/four.png';
import SpoonPokemon from './images/five.png';
import purpleGhost from './images/six.png';

const pictures = [
    {
        "id": 1,
        "source": dragon
    },
    {
        "id": 2,
        "source": pikatchu
    },
    {
        "id": 3,
        "source": plant
    },
    {
        "id": 4,
        "source": turtle
    },
    {
        "id": 5,
        "source": SpoonPokemon
    },
    {
        "id": 6,
        "source": purpleGhost
    }
]

const doublePictureArray = () => {
    let copiedArray = pictures;
    
    copiedArray = copiedArray.map((card) => {
        const length = copiedArray.length + card.id;
        const source = card.source;
        return (
            {
                "id": length,
                "source": source
            }
        );
    });

    return pictures.concat(copiedArray).sort((a, b) => 0.5 - Math.random());
}

const memoryList = doublePictureArray();

export default doublePictureArray;