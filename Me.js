const infof = document.querySelector('.infof')
const ButtonOffer = document.querySelector('.oferta');
const arrow = document.querySelector('.arrow')
const SecondSection = document.querySelector('.second')
const offset = 630;
const offsett= -630;
const why = document.getElementById('why')
const Kampanie = document.querySelector('.Kampanie')
var Bgk = document.querySelector('.Bgk')
var Ax = document.getElementById('Ax');
var AxInfo = document.getElementById('AxInfo')
var AxInfoo = document.getElementById('AxInfoo')
var ext = document.getElementById('ext');
const bgk = document.getElementById('bgk')
const whyImage = document.getElementById('whyImage');
const services = document.getElementById('services');
const serv = document.getElementById('serv');
const lii = document.getElementById('lii');
const ele = document.getElementById('ele');
const eledom = document.getElementById('eledom')
const second = document.querySelector('.second');
const cost = document.getElementById('cost');
const costbgk = document.getElementById('costbgk')
const questionscost = document.getElementById('questionscost')
const stackinfo = document.getElementById('stackinfo')
const stack = document.getElementById('stack')
const WordPress = document.getElementById('WordPress')
const wordpressinfo = document.getElementById('wordpressinfo')
const bgks = document.getElementById('bgks');
const Time = document.getElementById('Time');
const Timedesc = document.getElementById('Timedesc');
const MoreAboutMe = document.getElementById('MoreAboutMe')
const Me = document.getElementById('Me')
const arrowright = document.getElementById('arrowright')
const reasonone = document.getElementById('reasonone')
const reasonsecond = document.getElementById('reasonsecond')
const Timedescone = document.getElementById('Timedescone');
const arrowrighttwo = document.querySelector('.arrowrighttwo')

var isWordPressInfoVisible = false;
var isFirstOption = false;
var isSecondOption = false;
var Timeone = false;

ButtonOffer.addEventListener('click', (event) => {
    event.preventDefault();

    const TargetPosition = SecondSection.offsetTop + offset;

    window.scrollTo ({
        top:TargetPosition,
        behavior:"smooth"
    });

});

arrow.addEventListener('click', (event) => {
    event.preventDefault();

    const TargetPosition = infof.offsetTop + offsett;

    window.scrollTo ({
        top:TargetPosition,
        behavior:'smooth'
    });

    console.log("Text");

});

why.addEventListener('click', (event) => {
    whyImage.style.display = 'block';   
    Ax.style.display = 'block';
    Ax.innerHTML = "Dlaczego Grzegorz 'AxeVowski' Mamak?"
    AxInfo.style.display = 'block';
    AxInfo.innerHTML = "Cześć! Miło Mi Cię powitać na mojej stronie internetowej, gdzie mogę Ci opowiedzieć dlaczego warto ze mną podjąć współpracę! Jestem osobą niezwykle ambitną, dążącą do celu i wytrwałą. Chcę rozwijać się w WEB developerce. każdą współpracę traktuję poważnie i priorytetowo. Bardzo cieszę się z jakichkolwiek uwag, które mogą nauczyć więcej a komunikacja ze mną jest super prosta!"
    AxInfoo.style.display = 'block';
    AxInfoo.innerHTML = "Napisz do mnie, umówmy się na rozmowę i zrealizujmy Twoją nową, wspaniałą stronę internetową!";    
    ext.style.display = 'block';
})

ext.addEventListener('click', (event) => {

    if(WordPress)
    {
        wordpressinfo.style.display = 'none';
        ext.style.display = 'none';
    } 
    if(whyImage)
    {
        whyImage.style.display = 'none';
        Ax.style.display = 'none';
        AxInfo.style.display = 'none';
        AxInfoo.style.display = 'none';
        ext.style.display = 'none';
    }
    if(serv)
    {
        bgks.style.display = 'none';
        serv.style.display = 'none';
    }
    if(costbgk) {
        costbgk.style.display = 'none';
        questionscost.style.display = 'none';
    }
    if(stackinfo) {
        stackinfo.style.display = 'none';

    }
    if(Timedesc){
        Timedesc.style.display = 'none';
        ext.style.display = 'none';
    }
    if(MoreAboutMe){
        MoreAboutMe.style.display = 'none';
        ext.style.display = 'none';
    }
    if(!isWordPressInfoVisible)
    {
        arrowright.style.display = 'none';
    }

    if(isFirstOption)
    {
        reasonone.style.display = 'none';
        isFirstOption = false;
    }
    if(isSecondOption)
    {
        reasonsecond.style.display = 'none';
        isSecondOption = false;
    }

})

services.addEventListener('click', (event) => {
    bgk.style.display = 'block';
    bgks.style.display = 'block';
    serv.style.display = 'block';
    lii.style.display = 'block';
    ext.style.display='block';
})

ele.addEventListener('click', (event) => {
    eledom.style.display = 'block';
    
    serv.style.opacity = 0.2;
   
    eledom.style.opacity = 1;
})

cost.addEventListener('click', (event) => {
    costbgk.style.display = 'block';
    questionscost.style.display = 'block';
    ext.style.display = 'block';
})

stack.addEventListener('click', (event) => {
    stackinfo.style.display = 'block';
    ext.style.display = 'block';
})


WordPress.addEventListener('click', (event) => {
    if (!isWordPressInfoVisible)
    {
        wordpressinfo.style.display = 'block';
        reasonone.style.display = 'none';
        ext.style.display = 'block';
        isWordPressInfoVisible = false;
        arrowright.style.display = 'block';
    } 
})

arrowright.addEventListener('click', (event) => {
    if (!isFirstOption && !isSecondOption)
    {
        wordpressinfo.style.display = 'none';
        reasonone.style.display = 'block';
        ext.style.display = 'block';
        isFirstOption = true;
        isSecondOption = false;
        arrowright.style.display = 'block';
    }
    else if (!isSecondOption && isFirstOption)
    {
        reasonone.style.display = 'none';
        ext.style.display = 'block';
        isFirstOption = true;
        isSecondOption = true;
        arrowright.style.display = 'block';
        reasonsecond.style.display = 'block';
        console.log("Text");
    }

    
})

Time.addEventListener('click', (event) => {
    arrowright.style.display = 'none';
    arrowrighttwo.style.display = 'block';
    Timedesc.style.display = 'block';
    Timedescone.style.display = 'none';
    ext.style.display = 'block';
})

Me.addEventListener('click', (event) => {
    MoreAboutMe.style.display = 'block';
    ext.style.display = 'block';
})