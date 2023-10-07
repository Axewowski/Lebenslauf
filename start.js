const oponent = document.getElementById('oponent-choise') // TEXT
const gracz = document.getElementById('your-choice') // TEXT
const wynik = document.getElementById('wynik') // TEXT
const wybory = document.querySelectorAll('button') // Przycisk

let oponentChoice;
let result;
let wyboryy;
let oponentt;
let wynikk;

//WYBORY, jako wszystkie trzy przyciski, przy pomocy .forEach, tworzy nową zmienną o nazwie wyboryy, 
//oraz dzięki strzałce "=>" przydziela jej .addEventListener, który wysłuchuje za pomocą (click). 
//PRzy tym musi stworzyć jeszcze jedną zmienną (e), aby przechowywać cliknięcie. Następnie wyboryy dostaje tę wartość od e.target.id
//a napis odpowiedzialny za GRACZa, zmienia wartość dzięki wyboryy.
wybory.forEach(wyboryy => wyboryy.addEventListener('click',(e) => {
    wyboryy = e.target.id;
    gracz.innerHTML = wyboryy;
    WyborOponenta()
    Rezultat()
}))

function WyborOponenta()
{
    oponentt = Math.floor(Math.random()*3 ) + 1;

    console.log(oponentt);

    if (oponentt === 1)
    {
        oponentChoice = "papier";        
    }
    if (oponentt === 2)
    {
        oponentChoice = "kamien"
    }
    if (oponentt === 3) 
    {
        oponentChoice = "nozyce"
    }

    oponent.innerHTML = oponentChoice;
}

function Rezultat()
{
    
    if (wyboryy === "papier", oponentChoice === "papier")
    {
        result = "remis";
        wynik.innerHTML = result;
    }
    
    if (wyboryy === "papier", oponentChoice === "kamien")
    {
        result = "przegrałeś";
        wynik.innerHTML = result;
    }
    
    if (wyboryy === "papier", oponentChoice === "nozyce")
    {
        result = "wygrałeś";
        wynik.innerHTML = result;
    }

    if (wyboryy === "nozyce", oponentChoice === "papier")
    {
        result = "wygrałeś";
        wynik.innerHTML = result;
    }
    
    if (wyboryy === "nozyce", oponentChoice === "kamien")
    {
        result = "przegrałeś";
        wynik.innerHTML = result;
    }
    
    if (wyboryy === "nozyce", oponentChoice === "nozyce")
    {
        result = "remis";
        wynik.innerHTML = result;
    }

    if (wyboryy === "kamien", oponentChoice === "papier")
    {
        result = "przegrana";
        wynik.innerHTML = result;
    }
    
    if (wyboryy === "kamien", oponentChoice === "kamien")
    {
        result = "remis";
        wynik.innerHTML = result;
    }
    
    if (wyboryy === "kamien", oponentChoice === "nozyce")
    {
        result = "wygrana";
        wynik.innerHTML = result;
    }

}