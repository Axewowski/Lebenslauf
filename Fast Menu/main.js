var option1 = document.getElementById('me')
var textme1 = document.getElementById('textme1')
var textme2 = document.getElementById('textme2')
var textme3 = document.getElementById('textme3')
var textme4 = document.getElementById('textme4')
var paragraph1 = document.querySelector('.paragraph')
var Paragraphs = document.querySelector('.Paragraphs')
var option2 = document.getElementById('portfolio')
var paragraph2 = document.querySelector('.paragraph2')
var paragraph3 = document.querySelector('.paragraph3')
var paragraph4 = document.querySelector('.paragraph4')
var paragraph5 = document.querySelector('.paragraph5')
var paragraph6 = document.querySelector('.paragraph6')
var paragraph7 = document.querySelector('.paragraph7')
var paragraph8 = document.querySelector('.paragraph8')
var paragraph9 = document.querySelector('.paragraph9')
var media = document.getElementById('media');

var yt = document.getElementById('yt')
var fb = document.getElementById('fb')
var tk = document.getElementById('tk')
var ig = document.getElementById('ig')

var option3 = document.getElementById('QA')
var option4 = document.getElementById('contact')
var photo = document.querySelector('img'); 

textme1.innerHTML = "Cześć, zobacz kim jestem";
textme2.innerHTML = "Myślę, że przed podjęciem współpracy zawsze <br> miło i dobrze dowiedzieć się, z kim przyjdzie <br> Ci współpracować."
textme3.innerHTML = "Zapraszam Cię do sprzawdzenia szybkiej nawigacji najbardziej <br> interesujących rzeczy w innych zakładach w górnej części ekranu. <br> a jeśli moja osoba zaintersuje Cię bardziej, to możesz przejść do pełnej <br> strony o mnie."
paragraph1.innerHTML = "Pamiętaj, że to jest zakładka Fast Menu, z największymi ogólnikami. Aby dokładnie wyczytać co oferuję i jakie stosuję metody współpracy, zapraszam Cię na moją główną stronę.";


const button1 = document.getElementById('button1'); 
button1.addEventListener('click', (eventt) => {
    
textme1.style.display='block';
textme2.style.display='block';
textme3.style.display='block';
textme1.innerHTML = "Cześć, zobacz kim jestem";
textme2.innerHTML = "Myślę, że przed podjęciem współpracy zawsze <br> miło i dobrze dowiedzieć się, z kim przyjdzie <br> Ci współpracować."
textme3.innerHTML = "Zapraszam Cię do sprzawdzenia szybkiej nawigacji najbardziej <br> interesujących rzeczy w innych zakładach w górnej części ekranu. <br> a jeśli moja osoba zaintersuje Cię bardziej, to możesz przejść do pełnej <br> strony o mnie."
paragraph1.innerHTML = "Pamiętaj, że to jest zakładka Fast Menu, z największymi ogólnikami. Aby dokładnie wyczytać co oferuję i jakie stosuję metody współpracy, zapraszam Cię na moją główną stronę.";
photo.style.display = 'block';
yt.style.display = 'none';
fb.style.display = 'none';
tk.style.display = 'none';
ig.style.display = 'none';
textme4.style.display = 'none';
Paragraphs.style.display = 'none';
 
});

const button2 = document.getElementById('button2')
button2.addEventListener('click', (event) => { // Portfolio
    textme1.style.display='block';
    textme2.style.display='block';
    textme3.style.display='block';
    textme1.innerHTML = "Ja, jako programista,";
    textme2.innerHTML = 'Projekty na zlecenie';
    textme3.innerHTML = 'Moje własne projekty';
    photo.style.display = 'none';
    yt.style.display = 'none';
    fb.style.display = 'none';
    tk.style.display = 'none';
    ig.style.display = 'none';
    textme4.style.display = 'none';
    Paragraphs.style.display = 'none';
 
});

const button3 = document.querySelector('#button3')
button3.addEventListener('click', (event) => {
    yt.style.display = 'none';
    fb.style.display = 'none';
    tk.style.display = 'none';
    ig.style.display = 'none';
    textme1.style.display='none';
    textme2.style.display='none';
    textme3.style.display='none';
    textme4.style.display = 'none';
    Paragraphs.style.display = 'block';
    paragraph2.innerHTML = "(Q)Jakie usługi wykonujesz?"
    paragraph3.innerHTML = "(A)Cześć. Oferuję wykonanie strony internetowej, doradzenie w kwestii wyboru hostingu i domeny. W przyszłości również chciałbym wykonywać aplikacje WEB-owe, oraz mobilne. Praktycznie cały czas uczęszczam na jakieś kursy."
    paragraph4.innerHTML = "(Q)Z jakiego stacku deweloperskiego korzystasz?"
    paragraph5.innerHTML = "(A)Html, CSS, Javascript, nodeJS."
    paragraph6.innerHTML = "(Q)Możesz napisać mi stronę na Wordpress?"
    paragraph7.innerHTML = "(A)Nie. Nie wykonuję tego typu stron. W mojej opinii WordPress jest strasznie ograniczony. Musiałbym też umieć PHP, aby umieć pisać strony w WordPress, a ja wolę super zgrabne i elastyczne strony pisane w JavaScript."
    paragraph8.innerHTML = "(Q)Ile kosztują twoje usługi?"
    paragraph9.innerHTML = "(A)Choć co prawda, nie robię tego za darmo, tak nie oczekuję milionów za to. Każdą osobę chętną do podjęcia współpracy rozpatruję indywidualnie, nie działam zero-jedynkowo, gdyż jesteśmy ludźmi, nie robotami :) Po więcej informacji wejdź na moją główną stronę - na pewno się dogadamy!"
    photo.style.display = 'none';
    paragraph1.innerHTML = "Pamiętaj, że to jest zakładka Fast Menu, z największymi ogólnikami. Aby dokładnie wyczytać co oferuję i jakie stosuję metody współpracy, zapraszam Cię na moją główną stronę.";
});

const button4 = document.querySelector('#button4')
button4.addEventListener('click', (event) => {
    photo.style.display = 'none';
    textme1.style.display = 'none';
    textme2.style.display = 'none';
    textme3.style.display = 'none';
    textme4.style.display = 'block';
    textme4.innerHTML = 'Axevowski na Socialmedia:';
    yt.style.display = 'block';
    fb.style.display = 'block';
    tk.style.display = 'block';
    ig.style.display = 'block';
    Paragraphs.style.display = 'none';
})