const Planets = {
    MERCÚRIO: ['img/planetas/mercurio.svg', 'img/planetas/mercurio2.svg', 'img/planetas/mercurio3.svg', "img/planetas/geology-mercury.png"],
    VENUS: ['img/planetas/venus.svg', 'img/planetas/venus2.svg', 'img/planetas/venus3.svg', "img/planetas/geology-venus.png"],
    TERRA: ['img/planetas/terra.svg', 'img/planetas/terra2.svg', 'img/planetas/terra3.svg', "img/planetas/geology-earth.png"],
    MARTE: ['img/planetas/marte.svg', 'img/planetas/marte2.svg', 'img/planetas/marte3.svg', "img/planetas/geology-mars.png"],
    JUPITER: ['img/planetas/jupiter.svg', 'img/planetas/jupiter2.svg', 'img/planetas/jupiter3.svg', "img/planetas/geology-jupiter.png"],
    SATURNO: ['img/planetas/saturno.svg', 'img/planetas/saturno2.svg', 'img/planetas/saturno.svg', "img/planetas/geology-saturn.png"],
    URANO: ['img/planetas/urano.svg', 'img/planetas/urano2.svg', 'img/planetas/urano.svg', "img/planetas/geology-uranus.png"],
    NETUNO: ['img/planetas/netuno.svg', 'img/planetas/netuno2.svg', 'img/planetas/netuno.svg', "img/planetas/geology-neptune.png"]

}

const imagens = document.querySelectorAll('section.corpo img')


function mudaPlaneta() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {

            defineRef(link.textContent)
            tiraPlaneta()
            removeTexto()
            removeCuriosidades()

            setTimeout(() => {

                mudaCorBotao(link.textContent)
                mudaCuriosidades(link.textContent)

                mudaImgs(Planets[link.textContent][0], Planets[link.textContent][1], Planets[link.textContent][2], Planets[link.textContent][3])
            }, 1500)
        })
    });
}


function tiraPlaneta() {

    imagens.forEach(e => {
        e.classList.add('somePlaneta')
        imagens[3].style.display = 'none'
        setTimeout(() => {
            e.classList.remove('somePlaneta')

            aparecePlaneta(e)
            mudaText()
        }, 1600)
    })
}

function aparecePlaneta(el) {
    el.classList.add('aparecePlaneta')

    setTimeout(() => {
        el.classList.remove('aparecePlaneta')
        imagens[3].style.display = ''
    }, 1500)

}


function exibeImg(container) {

    container.classList.remove('esconder')

    container.classList.add('mostrar')
    container.children[0].classList.add('spin')


    setTimeout(() => {
        container.style.display = 'block'
    }, 900)

    setTimeout(() => {
        container.children[0].classList.remove('spin')
    }, 1900)

}

function escondeImg(container) {

    container.classList.remove('mostrar')

    container.classList.add('esconder')
    container.children[0].classList.add('spin')

    setTimeout(() => {
        container.style.display = 'none'
    }, 900)

    setTimeout(() => {
        container.children[0].classList.remove('spin')
    }, 1900)

}

function removeTexto() {
    let container = document.querySelector('.info')

    container.classList.add('removeTexto')

    setTimeout(() => {
        container.classList.remove('removeTexto')
    }, 3000)
}


function removeCuriosidades() {
    let container = document.querySelector('.curiosidades')

    container.classList.add('removeCuriosidades')

    setTimeout(() => {
        container.classList.remove('removeCuriosidades')
    }, 3000)
}







