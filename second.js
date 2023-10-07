const cardArray = [

    {
        name:"pytajnik",
        img:'gfx/Question.png',
    },

    {
        name: 'usa',
        img: 'gfx/usa.jpg',
    },
    {
        name: 'canada',
        img: 'gfx/canada.png',
    },
    {
        name: 'ger',
        img: 'gfx/germany.png',
    },
    {
        name: 'russia',
        img: 'gfx/russia.jpg',
    },
    {
        name: 'poland',
        img: 'gfx/pl.png',
    },

    {
        name: 'usa',
        img: 'gfx/usa.jpg',
    },
    {
        name: 'canada',
        img: 'gfx/canada.png',
    },
    {
        name: 'ger',
        img: 'gfx/germany.png',
    },
    {
        name: 'russia',
        img: 'gfx/russia.jpg',
    },
    {
        name: 'poland',
        img: 'gfx/pl.png',
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
let CardChosen = []
let CardsChosenIds = []
const CardWon = []
const resultDisplay = document.querySelector('#result');


function Cards() {
    for (let i=0; i < cardArray.length; i++)
    {
        const obraz = document.createElement('img');
        obraz.setAttribute('src', "gfx/Question.png")
        obraz.setAttribute('data-id',i)
        obraz.addEventListener('click', flipCard)
        gridDisplay.appendChild(obraz)
    }
}

Cards();

function flipCard() {
    let cardId = this.getAttribute('data-id')
    CardChosen.push(cardArray[cardId].name)
    CardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (CardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch()
{
    
    const Carde = document.querySelectorAll('img') 
    const optionOneId = CardsChosenIds[0]
    const OptionTwoId = CardsChosenIds[1]

    if(optionOneId === OptionTwoId) {
        alert("Clicked");
    }

    console.log(Carde)
    if (CardChosen[0] == CardChosen[1]) {
    console.log("Working!")
    Carde[optionOneId].setAttribute('src', "gfx/img.png")
    Carde[OptionTwoId].setAttribute('src', "gfx/img.png")
    Carde[optionOneId].removeEventListener('click', flipCard);
    Carde[OptionTwoId].removeEventListener('click', flipCard);
    CardWon.push(CardChosen)
    } else {
        Carde[optionOneId].setAttribute('src', "gfx/Question.png")
        Carde[OptionTwoId].setAttribute('src', "gfx/Question.png")
        alert("Próbuj dalej")        
    }       

    resultDisplay.textContent = CardWon.length;
CardChosen = []
CardsChosenIds = []

    if (CardWon.length == cardArray.length/2) {
        alert("Gratki mordo")
        resultDisplay.innerHTML = "Gratki mordo"
    }

}