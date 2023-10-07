let main = document.getElementById('List0'); // Kontener dla TEAM 7 - Konoha
main.style.bottom = '300px';
let Team = document.querySelector('.Team'); // Napis "team 7" - Konoha
let ListN = document.getElementById('List1'); // Kontener dla Team Suna
let ListS = document.querySelector('.List3'); // Kontener dla Sound Team
let TeamS = document.querySelector('.TeamS'); // Napis Team Suna
let Team3 = document.querySelector('.Team3');
let TeamO = document.querySelector('.TeamO');
let Characterinfo = document.querySelector('.Character-info')
let SunaCharacter;
let SoundCharacter;
let KGNDesc = document.getElementById('KGNDesc');
let KGCDesc = document.getElementById('KGCDesc');
let isPrepared = false;

const Characterss = (calledfromList1 = false) => {

  if (isPrepared) {
    return;
  }

  Team.innerHTML = 'Team 7';

  naruto = document.createElement('img');
  naruto.classList.add('naruto');
  naruto.setAttribute('src', 'gfx/NGame/naruto.png', 'data-id', 'i');
  main.appendChild(naruto);
  naruto.style.height = '100px';
  naruto.style.left = '50px';
  naruto.style.bottom = '100px';

  sasuke = document.createElement('img');
  sasuke.classList.add('sasuke');
  sasuke.setAttribute('src', 'gfx/NGame/sasuke.jpg', 'data-id', 'i');
  main.appendChild(sasuke);
  sasuke.style.height = '100px';
  sasuke.style.left = '250px';
  sasuke.style.bottom = '100px';

  sakura = document.createElement('img');
  sakura.classList.add('sakura');
  sakura.setAttribute('src', 'gfx/NGame/sakura.png', 'data-id', 'i');
  main.appendChild(sakura);
  sakura.style.height = '100px';
  sakura.style.left = '450px';
  sakura.style.bottom = '100px';

  SunaCharacter = document.createElement('img');
  SunaCharacter.classList.add('SunaCharacter');
  SunaCharacter.setAttribute('src', 'gfx/NGame/SunaSymbole.png');
  main.appendChild(SunaCharacter);
  SunaCharacter.style.height = '20px';
  SunaCharacter.style.left = '10px';
  SunaCharacter.style.bottom = '10px';
  SunaCharacter.addEventListener('click', function(event) {
    List1(event);
  });


  SoundCharacter = document.createElement('img');
  SoundCharacter.classList.add('SoundCharacter');
  SoundCharacter.setAttribute('src', 'gfx/NGame/SoundSymbol.png');
  main.appendChild(SoundCharacter);
  SoundCharacter.style.height = '20px';
  SoundCharacter.style.right = '10px';
  SoundCharacter.style.bottom = '20px';
  SoundCharacter.addEventListener('click', function(event) {
    List3(event);
  })


  let characters = [naruto, sakura, sasuke];

  characters.forEach(function(character) {
    character.addEventListener('click', function(event) {
      CharacterSelected(character);
    });
  });

 
  if (calledfromList1) {
    ListN.style.display = 'none'
    main.style.display = 'block'
    console.log("test")
  }

}

function Main() {
  Characterss();
}

console.log(ListN);


function List1(event) {
  if (event.target === SunaCharacter) {
    main.style.display = 'none';
    ListN.style.display = 'block';
    ListN.style.bottom = '300px';
    TeamS.innerHTML = 'Team Suna';

    let KonohaSymbol = document.createElement('img');
    KonohaSymbol.setAttribute('src', 'gfx/NGame/KonohaSymbole.png');
    KonohaSymbol.classList.add('KonohaImages');
    ListN.appendChild(KonohaSymbol);
    KonohaSymbol.style.height = '20px';
    KonohaSymbol.style.left = '10px';
    KonohaSymbol.style.bottom = '20px';
    KonohaSymbol.addEventListener('click', function(event) {
        Characterss(true);
    });
    let Gaara = document.createElement('img');
    Gaara.setAttribute('src', 'gfx/NGame/Gaara.jpg');
    ListN.appendChild(Gaara);
    Gaara.classList.add('Gaara');
    Gaara.style.height = '100px';
    Gaara.style.left = '50px';
    Gaara.style.bottom = '100px';

    let Kankuro = document.createElement('img');
    Kankuro.setAttribute('src', 'gfx/NGame/Kankuro.jpg');
    ListN.appendChild(Kankuro);
    Kankuro.classList.add('Kankuro');
    Kankuro.style.height = '100px';
    Kankuro.style.left = '250px';
    Kankuro.style.bottom = '100px';

    let Temari = document.createElement('img');
    Temari.classList.add('Temari');
    Temari.setAttribute('src', 'gfx/NGame/Temari.jpg');
    ListN.appendChild(Temari);
    Temari.style.height = '100px';
    Temari.style.left = '450px';
    Temari.style.bottom = '100px';
  }

  if (sakura) {
    sakura.style.display = 'none';
  }
  if (naruto) {
    naruto.style.display = 'none';
  }
  if (sasuke) {
    sasuke.style.display = 'none';
  }
}

function List3(event) {

    if (event.target === SoundCharacter)
    {
        let Zaku = document.createElement('img')
        Zaku.setAttribute('src', 'gfx/NGame/zaku.jpg', 'data-id')
        ListS.appendChild(Zaku);
        Zaku.classList.add('Zaku')
        Zaku.style.height = '100px';
        Zaku.style.left = '50px';
        Zaku.style.bottom = '100px';
    
        let Dosu = document.createElement('img')
        Dosu.setAttribute('src', 'gfx/NGame/Dosu.png', 'data-id')
        ListS.appendChild(Dosu)
        Dosu.classList.add('Dosu')
        Dosu.style.height = '100px';
        Dosu.style.left = '250px';
        Dosu.style.bottom = '100px';
        
        let Kin = document.createElement('img')
        Kin.setAttribute('src', 'gfx/NGame/Kin.jpg', 'data-id')
        ListS.appendChild(Kin)
        Kin.classList.add("Kin")
        Kin.style.height = '100px';
        Kin.style.left = '450px';
        Kin.style.bottom = '100px';
      

        ListS.style.display = 'block';
        ListN.style.display = 'none';
        TeamO.innerHTML = "Sound Team";
        console.log("test")
    }

}

function CharacterSelected(character) {
    
  
        if(character === naruto) {
          
    
            naruto.setAttribute('data-name', 'Naruto')
            const characterName = naruto.getAttribute('data-name')
            naruto.setAttribute('data-clan', 'Uzumaki')
            const characterClan = naruto.getAttribute('data-clan')

            const NarutoAbilities = [ 
                'Kage Bunshin no Jutsu',
                'Kage Bunshin no Jutsu: Kage Bunshin Kara no Tōbō',
                'Kage Bunshin no Jutsu: Kage Bunshin no Tama '
                ]
                
            printAbilities(characterName, NarutoAbilities);

              
            console.log("You have chosen Naruto!")
            Characterinfo.style.display = 'block';
            Characterinfo.style.backgroundColor = 'red';
            KGNDesc.innerHTML = 'Name : ' + characterName;
            KGCDesc.innerHTML = "Clan : " + characterClan;

            let READY = document.createElement('button')
            READY.classList.add('READY')
            Characterinfo.appendChild(READY);
            READY.innerHTML = "Gotowy";
            READY.style.fontSize = '30px'
            READY.addEventListener('click', Prepare)


            function Prepare() {
              if ( isPrepared = true ) {
              Characterinfo.style.opacity = '0.2';
              main.style.opacity = '0.2';
              let preparee = document.querySelector('.prepare')
              preparee.style.display = 'block'
              preparee.style.opacity = '1';
              }
            }
            

            let Bunshin = document.createElement('img')
            Bunshin.setAttribute('src', 'gfx/NGame/KageBunshinnoJutsu.png')
            Bunshin.classList.add('Bunshin')
            Characterinfo.appendChild(Bunshin);
            Bunshin.style.height = '100px';
            Bunshin.style.width = '150px';

            let SexyJutsu = document.createElement('img')
            SexyJutsu.setAttribute('src', 'gfx/NGame/SexyNoJutsu.jpg')
            SexyJutsu.classList.add('SexyJutsu')
            Characterinfo.appendChild(SexyJutsu);
            SexyJutsu.style.height = '100px';
            SexyJutsu.style.width = '150px';

            let Hengeno = document.createElement('img')
            Hengeno.setAttribute('src', 'gfx/NGame/HengenoJutsu.jpg')
            Hengeno.classList.add('Hengeno')
            Characterinfo.appendChild(Hengeno)
            Hengeno.style.height = '100px';
            Hengeno.style.width = '150px';
        
            let num = document.createElement('button')
            num.classList.add('num')
            Characterinfo.appendChild(num)
            num.style.height = '50px';
            num.style.width = '200px';
            num.innerHTML = 'METHODES';
            num.addEventListener('click', function(event) {
                Methodes(num)
            });
        
            let isDefaultState = true;

             function Methodes(num)
            {
              if (isDefaultState) {

              SexyJutsu.style.display = 'none'
              Bunshin.style.display = 'none'
              Hengeno.style.display = 'none'

              const W = document.createElement('img')
              W.setAttribute('src', 'gfx/NGame/W.png')
              W.classList.add('W')

              
              const D = document.createElement('img')
              D.setAttribute('src', 'gfx/NGame/D.png')
              D.classList.add('D')

              
              const A = document.createElement('img')
              A.setAttribute('src', 'gfx/NGame/A.png')
              A.classList.add('A')
              

              var met1 = document.querySelector('.met1');
              met1 = document.createElement('div');
              Characterinfo.appendChild(met1);
              met1.classList.add('met1')

              var met2 = document.querySelector('.met2');
              met2 = document.createElement('div');
              Characterinfo.appendChild(met2);
              met2.classList.add('met2')

              var met3 = document.querySelector('.met3');
              met3 = document.createElement('div');
              Characterinfo.appendChild(met3);
              met3.classList.add('met3')


              const Ncomb1 = [A, W, D];
              const Ncomb2 = [W, A, D];
              const Ncomb3 = [D, A, W];

              const Ncomb1HTML = Ncomb1.map(Ncomb1 => Ncomb1.outerHTML);
              const Ncomb1HTMLL = Ncomb1HTML.join('');

              const Ncomb2HTML = Ncomb2.map(Ncomb2 => Ncomb2.outerHTML);
              const Ncomb2HTMLL = Ncomb2HTML.join('');

              const Ncomb3HTML = Ncomb3.map(Ncomb3 => Ncomb3.outerHTML);
              const Ncomb3HTMLL = Ncomb3HTML.join('');

              met1.insertAdjacentHTML('beforeend', Ncomb1HTMLL);
              met2.insertAdjacentHTML('beforeend', Ncomb2HTMLL);
              met3.insertAdjacentHTML('beforeend', Ncomb3HTMLL);

                isDefaultState = false;
              } else {

                SexyJutsu.style.display = 'block';
                Bunshin.style.display = 'block';
                Hengeno.style.display = 'block';

                var met1 = document.querySelector('.met1')
                met1.remove();

                var met2 = document.querySelector('.met2');
                met2.remove();

                var met3 = document.querySelector('.met3');
                met3.remove();

                isDefaultState = true;
            }
            }
            num = document.createElement('button');
            num.classList.add('num');
            Characterinfo.appendChild(num);
            num.style.height = '50px';
            num.style.width = '200px';
            num.innerHTML = 'METHODES';
            
            num.addEventListener('click', function(event) {
              Methodes();
            });
        };
    
        if(character === sasuke) {
    


          sasuke.setAttribute('data-name', "Sasuke")
          const characterName = sasuke.getAttribute('data-name')
          sasuke.setAttribute('data-clan', 'Uchiha');
          const characterClan = sasuke.getAttribute('data-clan')



            const SasukeAbilities = [
                'Gōkakyū no Jutsu',
                'Shishi Rendan',
                'Chōchō Senbon'
            ]

            printAbilities(characterName, SasukeAbilities);

            
            console.log("You have chosen Sasuke!")
            Characterinfo.style.display = 'block';
            Characterinfo.style.backgroundColor = 'blue';
            KGNDesc.innerHTML = 'Name : ' + characterName;
            KGCDesc.innerHTML = 'Clan : ' + characterClan;
        
            let sharingan = document.createElement('img')
            sharingan.setAttribute('src', 'gfx/NGame/SharinganActivate.jpg')
            Characterinfo.appendChild(sharingan)
            sharingan.classList.add('sharingan')
            sharingan.style.height = '100px';
            sharingan.style.width = '150px';

            let Shishi = document.createElement('img')
            Shishi.setAttribute('src', 'gfx/NGame/ShishiRendan.png')
            Characterinfo.appendChild(Shishi)
            Shishi.classList.add('Shishi')
            Shishi.style.height = '100px';
            Shishi.style.width = '150px';

            let GōkakyūnoJutsu = document.createElement('img')
            GōkakyūnoJutsu.setAttribute('src', 'gfx/NGame/GōkakyūnoJutsu.jpg')
            Characterinfo.appendChild(GōkakyūnoJutsu)
            GōkakyūnoJutsu.classList.add('GōkakyūnoJutsu')
            GōkakyūnoJutsu.style.height = '100px';
            GōkakyūnoJutsu.style.width = '150px';

        };
    
        if(character === sakura) {
    
          
          sakura.setAttribute('data-name', 'Sakura');
          const characterName = sakura.getAttribute('data-name');
          sakura.setAttribute('data-clan', "Haruno");
          const characterClan = sakura.getAttribute('data-clan')


          const SakuraAbilities = [
            'Chakra no Mesu',
            'Ōkashō',
            'Nintaijutsu: Yūhi Shinkū Otoshi'
        ]

          printAbilities(characterName, SakuraAbilities);


            console.log("You have chosen Sakura!" + characterName)
            Characterinfo.style.display = 'block';
            Characterinfo.style.backgroundColor = 'pink';
            KGNDesc.innerHTML = 'Name : ' + characterName;
            KGCDesc.innerHTML = 'Clan : ' + characterClan;
            };

    function printAbilities(character, abilities) {
        console.log(`Umiejętności postaci ${character} podczas egzaminu:` )
        for (let i=0; i<abilities.length; i++) {
            console.log(`- ${abilities[i]}`);
        }
        console.log(``);
    }

  }
  

document.addEventListener('DOMContentLoaded', function() {
  Main();
});
