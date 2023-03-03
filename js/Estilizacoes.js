function focoBotao() {
    const ref = document.querySelector('#referencia')
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', function () {
            // Remove a classe 'ativo' de todos os botões

            for (var j = 0; j < botoes.length; j++) {
                botoes[j].classList.remove('focoBotao')
                botoes[j].style.removeProperty('background-color', `var(--` + ref.dataset.referencia + `)`)
            }

            this.classList.add('focoBotao')
            this.style.setProperty('background-color', `var(--` + ref.dataset.referencia + `)`)
        });


    }
}


function mudaCorBotao(el) {

    var x = document.querySelector('.focoBotao')

    x.style.setProperty('background-color', `var(--` + el + `)`)
}

function setaActv() {
    const links = document.querySelectorAll('a');
    const ref = document.querySelector('#referencia')

    links.forEach(link => {

        if (link.classList.contains('actv')) {
            link.style.setProperty('border-bottom', `4px solid var(--` + ref.dataset.referencia + `)`)
        }
        
        link.addEventListener('click', function () {
            // Remove a classe 'ativo' de todos os botões

            links.forEach(link => {
                link.classList.remove('actv')
                link.style.removeProperty('border-bottom')
            })

            this.classList.add('actv')


            if (this.classList.contains('actv')) {
                this.style.setProperty('border-bottom', `4px solid var(--` + ref.dataset.referencia + `)`)
            }
        })

    });
}

