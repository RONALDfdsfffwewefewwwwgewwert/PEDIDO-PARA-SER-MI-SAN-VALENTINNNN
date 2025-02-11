const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('P.D. 1:A celebrarse el dia 16 de febrero 😊                                    P.D.2:Unico requisito ponerse guapetona❤                                     P.D.3: Adjunto imagen de gruñudoncio bigoton como yo cuando no me afeito como testigo y mirando con miedo al "no", así que mucho cuidado 🙄')
});



const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
