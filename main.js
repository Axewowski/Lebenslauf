var option1 = document.getElementById('me')
var textme1 = document.getElementById('textme1')
var textme2 = document.getElementById('textme2')
var textme3 = document.getElementById('textme3')
var textme4 = document.getElementById('textme4');
var textme5 = document.getElementById('textme5')
var textme6 = document.getElementById('textme6')
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
var me = document.getElementById('button1');
var achievement = document.getElementById('button2');
var kontakt = document.getElementById('button4');
var eng = document.getElementById('selectlanguge')
var pl = document.getElementById('selectlanguge2')

var yt = document.getElementById('yt')
var fb = document.getElementById('fb')
var tk = document.getElementById('tk')
var ig = document.getElementById('ig')

var option3 = document.getElementById('QA')
var option4 = document.getElementById('contact')
var photo = document.querySelector('img'); 



pl.addEventListener('click', () => {
    pl.style.display = 'none'
    eng.style.display = 'block'
})


eng.addEventListener('click', () => {
    pl.style.display = 'block'
    eng.style.display = 'none'
})



const translations = {
    textme1: {
        pl: "Cześć, zobacz kim jestem",
        eng: "Hello, see who I am"
    },

    textme2: {
        pl: "Myślę, że przed podjęciem współpracy zawsze <br> miło i dobrze dowiedzieć się, z kim przyjdzie <br> Ci współpracować.",
        eng: "I think, that before starting cooperation, it's always nice <br> and good to find out who you will be working with."
    },
    textme3: {
        pl: "Zapraszam Cię do sprzawdzenia szybkiej nawigacji najbardziej <br> interesujących rzeczy w innych zakładach w górnej części ekranu. <br> a jeśli moja osoba zaintersuje Cię bardziej, to możesz przejść do pełnej <br> strony o mnie.",
        eng: "I invite you to check out the quick navigation of the most interesting things in <br> other sections at the top of the screen. And if you find my person more interesting, <br> you can go to my full page about me."
    },
    paragraph1: {
        pl: "Pamiętaj, że to jest zakładka Fast Menu, z największymi ogólnikami. Aby dokładnie wyczytać co oferuję i jakie stosuję metody współpracy, zapraszam Cię na moją główną stronę.",
        eng: "Remember that this is the Quick Menu tab with the biggest highlight. To read exactly what I offer and what methods of cooperation I use, I invite you to my main page."
    },

    me: {
        pl:"O mnie",
        eng: "About me"
    },
    
    achievement: {
        pl:"Osiągnięcia",
        eng:"Achievements"
    },

    kontakt: {
        pl:"Kontakt",
        eng:"Contact"
    },

    textme4: {
        pl: "Ja, jako programista",
        eng:"Me, as a programmer guy"
        },
    
        textme5: {
        pl: 'Projekty na zlecenie',
        eng:"Projects as orders"
        },
    
        textme6: {
        pl: "Moje własne projekty",
        eng:"My own projects"
        },

        paragraph2: {
        pl: "Jakie usługi wykonujesz?",
        eng:"What services do you offer?"
        },

        paragraph3: {
        pl: "Cześć. Oferuję wykonanie strony internetowej, doradzenie w kwestii wyboru hostingu i domeny. W przyszłości również chciałbym wykonywać aplikacje WEB-owe, oraz mobilne. Praktycznie cały czas uczęszczam na jakieś kursy.",
        eng: "Hello. I offer website development, advice on choosing hosting and domains. In the future, I would also like to create web and mobile applications. I am practically always attending some courses."
        },

        paragraph4: {
        pl: "Z jakiego stacku deweloperskiego korzystasz?",
        eng: "What technology stack do you use?"
        },

        paragraph5: {
        pl: "Html, CSS, Javascript.",
        eng: "Html, CSS, Javascript."
        },

        paragraph6: {
        pl: "Możesz napisać mi stronę na Wordpress?",
        eng: "Can you build a website using WordPress?"
        },

        paragraph7: {
        pl: "Nie. Nie wykonuję tego typu stron. W mojej opinii WordPress jest strasznie ograniczony. Musiałbym też umieć PHP, aby umieć pisać strony w WordPress, a ja wolę super zgrabne i elastyczne strony pisane w JavaScript.",
        eng: " No, I don't create that kind of websites. In my opinion, WordPress is very limited. I would also need to know PHP to build WordPress sites, and I prefer super sleek and flexible websites written in JavaScript."
        },

        paragraph8: {
        pl: "Ile kosztują twoje usługi?",
        eng: "How much do your services cost?"
        },

        paragraph9: {
        pl: "Choć co prawda, nie robię tego za darmo, tak nie oczekuję milionów za to. Każdą osobę chętną do podjęcia współpracy rozpatruję indywidualnie, nie działam zero-jedynkowo, gdyż jesteśmy ludźmi, nie robotami :) Po więcej informacji wejdź na moją główną stronę - na pewno się dogadamy!",
        eng: "While I don't work for free, I don't expect millions for my services either. I consider each person interested in collaboration individually. I don't have a one-size-fits-all approach because we're all humans, not robots :) For more information, please visit my main page - we'll definitely reach an agreement!"
        }
};

function updateContent(language) {
    textme1.innerHTML = translations.textme1[language];
    textme2.innerHTML = translations.textme2[language];
    textme3.innerHTML = translations.textme3[language];
    paragraph1.innerHTML = translations.paragraph1[language];
    me.innerHTML = translations.me[language];
    achievement.innerHTML = translations.achievement[language];
    kontakt.innerHTML = translations.kontakt[language]
    textme4.innerHTML = translations.textme4[language];
    textme5.innerHTML = translations.textme5[language];
    textme6.innerHTML = translations.textme6[language];
    paragraph2.innerHTML = translations.paragraph2[language];
    paragraph3.innerHTML = translations.paragraph3[language];
    paragraph4.innerHTML = translations.paragraph4[language];
    paragraph5.innerHTML = translations.paragraph5[language];
    paragraph6.innerHTML = translations.paragraph6[language];
    paragraph7.innerHTML = translations.paragraph7[language];
    paragraph8.innerHTML = translations.paragraph8[language];
    paragraph9.innerHTML = translations.paragraph9[language];

    if (language === 'eng') {
        pl.style.display = 'none';
        eng.style.display = 'block';
    } else {
        pl.style.display = 'block';
        eng.style.display = 'none';
    }
}

const button1 = document.getElementById('button1'); 
button1.addEventListener('click', (eventt) => {
    
textme1.style.display='block';
textme2.style.display='block';
textme3.style.display='block';
textme1.innerHTML = "Cześć, zobacz kim jestem";
textme2.innerHTML = "Myślę, że przed podjęciem współpracy zawsze <br> miło i dobrze dowiedzieć się, z kim przyjdzie <br> Ci współpracować."
textme3.innerHTML = "Zapraszam Cię do sprzawdzenia szybkiej nawigacji najbardziej <br> interesujących rzeczy w innych zakładach w górnej części ekranu. <br> a jeśli moja osoba zaintersuje Cię bardziej, to możesz przejść do pełnej <br> strony o mnie."
textme4.style.display = 'none';
textme5.style.display = 'none';
textme6.style.display = 'none';

yt.style.display = 'none';
fb.style.display = 'none';
tk.style.display = 'none';
ig.style.display = 'none';

paragraph1.innerHTML = "Pamiętaj, że to jest zakładka Fast Menu, z największymi ogólnikami. Aby dokładnie wyczytać co oferuję i jakie stosuję metody współpracy, zapraszam Cię na moją główną stronę.";
photo.style.display = 'block';
yt.style.display = 'none';
fb.style.display = 'none';
tk.style.display = 'none';
ig.style.display = 'none';
textme4.style.display = 'none';
Paragraphs.style.display = 'none';

updateContent(currentlanguage)

});


currentlanguage = 'pl'
updateContent(currentlanguage)


pl.addEventListener('click', () => {
    currentlanguage = 'eng';
    updateContent(currentlanguage);
});

eng.addEventListener('click', () => {
    currentlanguage = 'pl';
    updateContent(currentlanguage);
})

const button2 = document.getElementById('button2')
button2.addEventListener('click', (event) => { // Portfolio
    textme1.style.display='none';
    textme2.style.display='none';
    textme3.style.display='none';
    textme4.style.display = 'block';
    textme5.style.display = 'block';
    textme6.style.display = 'block';

    yt.style.display = 'none';
    fb.style.display = 'none';
    tk.style.display = 'none';
    ig.style.display = 'none';
    pl.style.display = 'block';

    textme4.innerHTML = "Ja, jako programista";
    textme5.innerHTML = "Ja, na YouTube";  
    textme6.innerHTML = "Ja, na instagramie";

    photo.style.display = 'none';
    yt.style.display = 'none';
    fb.style.display = 'none';
    tk.style.display = 'none';
    ig.style.display = 'none';
    Paragraphs.style.display = 'none';

    updateContent(currentlanguage);
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
    textme5.style.display = 'none';
    textme6.style.display = 'none';
    yt.style.display = 'none';
    fb.style.display = 'none';
    tk.style.display = 'none';
    ig.style.display = 'none';
    Paragraphs.style.display = 'block';
    paragraph2.innerHTML = "(Q)Jakie usługi wykonujesz?"
    paragraph3.innerHTML = "(A)Cześć. Oferuję wykonanie strony internetowej, doradzenie w kwestii wyboru hostingu i domeny. W przyszłości również chciałbym wykonywać aplikacje WEB-owe, oraz mobilne. Praktycznie cały czas uczęszczam na jakieś kursy."
    paragraph4.innerHTML = "(Q)Z jakiego stacku deweloperskiego korzystasz?"
    paragraph5.innerHTML = "(A)Html, CSS, Javascript."
    paragraph6.innerHTML = "(Q)Możesz napisać mi stronę na Wordpress?"
    paragraph7.innerHTML = "(A)Nie. Nie wykonuję tego typu stron. W mojej opinii WordPress jest strasznie ograniczony. Musiałbym też umieć PHP, aby umieć pisać strony w WordPress, a ja wolę super zgrabne i elastyczne strony pisane w JavaScript."
    paragraph8.innerHTML = "(Q)Ile kosztują twoje usługi?"
    paragraph9.innerHTML = "(A)Choć co prawda, nie robię tego za darmo, tak nie oczekuję milionów za to. Każdą osobę chętną do podjęcia współpracy rozpatruję indywidualnie, nie działam zero-jedynkowo, gdyż jesteśmy ludźmi, nie robotami :) Po więcej informacji wejdź na moją główną stronę - na pewno się dogadamy!"
    photo.style.display = 'none';
    paragraph1.innerHTML = "Pamiętaj, że to jest zakładka Fast Menu, z największymi ogólnikami. Aby dokładnie wyczytać co oferuję i jakie stosuję metody współpracy, zapraszam Cię na moją główną stronę.";

    pl.style.display = 'block';

    updateContent(currentlanguage);
});

const button4 = document.querySelector('#button4')
button4.addEventListener('click', (event) => {
    photo.style.display = 'none';
    textme1.style.display='none';
    textme2.style.display='none';
    textme3.style.display='none';
    textme4.style.display = 'none';
    textme5.style.display = 'none';
    textme6.style.display = 'none';
    yt.style.display = 'block';
    fb.style.display = 'block';
    tk.style.display = 'block';
    ig.style.display = 'block';
    Paragraphs.style.display = 'none';

    updateContent(currentlanguage)
    pl.style.display = 'block';
})

