const container_um = document.querySelector('#figura')
const container_dois = document.querySelector('#figura2')
const container_tres = document.querySelector('#figura3')


const botaoUm = document.querySelector('#um')
const botaoDois = document.querySelector('#dois')
const botaoTres = document.querySelector('#tres')

const botoes = document.querySelectorAll('.botao');



botaoUm.addEventListener('click', () => {
    if (container_um.style.display == 'none') {

        desativaClick()

        escondeImg(container_tres)
        escondeImg(container_dois)

        exibeImg(container_um)

        mudaText(0)
    }
})


botaoDois.addEventListener('click', () => {
    if (container_dois.style.display != 'block') {

        desativaClick()

        escondeImg(container_um)
        escondeImg(container_tres)

        exibeImg(container_dois)

        mudaText(1)
    }
})


botaoTres.addEventListener('click', () => {
    if (container_tres.style.display != 'block') {

        desativaClick()

        escondeImg(container_dois)
        escondeImg(container_um)

        exibeImg(container_tres)
        mudaText(2)
    }
})

//DESATIVAR BOTÕES DURANTE A ANIMAÇÃO
function desativaClick() {
    // desativa todos os botões
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
    }

    setTimeout(function () {
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].disabled = false;
        }
    }, 1900);
}