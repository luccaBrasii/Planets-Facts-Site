const textos = {
    TERRA: ['A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida..', 'O interior da Terra, assim como o de outros planetas telúricos, é dividido em camadas definidas com base nas suas propriedades químicas e físicas (reológicas), mas ao contrário dos outros planetas telúricos tem um núcleo interno e um núcleo externo distintos. A camada exterior da Terra é uma crosta silicatada, sólida, quimicamente distinta, subjacente à qual se encontra um manto sólido altamente viscoso', 'A área total da superfície da Terra é de cerca de 510 milhões de km2. A crosta continental é constituída por material de menor densidade, como as rochas ígneas granito e andesito. Menos comum é o basalto, uma rocha vulcânica mais densa que é o principal constituinte dos fundos oceânicos.'],
    MERCÚRIO: ['Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o mais curto de todos os planetas do Sol. Mercúrio é um dos quatro planetas terrestres do Sistema Solar e é um corpo rochoso como a Terra.', 'Mercúrio parece ter uma crosta sólida de silicato e um manto sobreposto a uma camada de núcleo externa sólida de sulfeto de ferro, uma camada de núcleo líquido mais profunda e um núcleo interno sólido. A densidade do planeta é a segunda maior do Sistema Solar em 5,427 g/cm3, apenas um pouco menor que a densidade da Terra.', 'A superfície de Mercúrio é semelhante em aparência à da Lua, mostrando extensas planícies semelhantes a mares e crateras pesadas, indicando que tem estado geologicamente inativo por bilhões de anos. É mais heterogêneo do que o de Marte ou o da Lua.'],
    VENUS: ['Vênus é o segundo planeta a partir do Sol. É nomeado após a deusa romana do amor e da beleza. Como o objeto natural mais brilhante no céu noturno da Terra depois da Lua, Vênus pode projetar sombras e pode ser, em raras ocasiões, visível a olho nu em plena luz do dia.', 'A semelhança em tamanho e densidade entre Vênus e a Terra sugere que eles compartilham uma estrutura interna semelhante: um núcleo, manto e crosta. Como o da Terra, o núcleo venusiano provavelmente é pelo menos parcialmente líquido porque os dois planetas estão esfriando aproximadamente na mesma taxa.', 'Grande parte da superfície venusiana parece ter sido moldada por atividade vulcânica. Vênus tem várias vezes mais vulcões do que a Terra e tem 167 grandes vulcões com mais de 100 km (60 milhas) de diâmetro. O único complexo vulcânico deste tamanho na Terra é a Ilha Grande do Havaí.'],
    MARTE: ['Marte é o quarto planeta a partir do Sol e o segundo menor planeta do Sistema Solar, sendo maior que apenas Mercúrio. Em inglês, Marte carrega o nome do deus romano da guerra e é frequentemente referido como o "Planeta Vermelho".', 'Como a Terra, Marte se diferenciou em um núcleo metálico denso coberto por materiais menos densos. Os cientistas inicialmente determinaram que o núcleo é pelo menos parcialmente líquido. Os modelos atuais de seu interior implicam um núcleo consistindo principalmente de ferro e níquel com cerca de 16 a 17% de enxofre.', 'Marte é um planeta terrestre cuja superfície consiste em minerais contendo silício e oxigênio, metais e outros elementos que normalmente compõem a rocha. A superfície é composta principalmente de basalto toleítico, embora partes sejam mais ricas em sílica do que o basalto típico.'],
    JUPITER: ['Júpiter é o quinto planeta a partir do Sol e o maior do Sistema Solar. É um gigante gasoso com uma massa duas vezes e meia a de todos os outros planetas do Sistema Solar combinados, mas menos de um milésimo da massa do Sol.', 'Quando a Juno chegou em 2016, descobriu que Júpiter tem um núcleo muito difuso que se mistura em seu manto. Uma possível causa é um impacto de um planeta de cerca de dez massas terrestres alguns milhões de anos após a formação de Júpiter, que teria rompido um núcleo joviano originalmente sólido.', 'A característica mais conhecida de Júpiter é a Grande Mancha Vermelha, uma tempestade anticiclônica persistente localizada 22° ao sul do equador. Sabe-se que existe desde pelo menos 1831, e possivelmente desde 1665.'],
    SATURNO: ['Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, depois de Júpiter. É um gigante gasoso com um raio médio de cerca de nove vezes e meia o da Terra. Tem apenas um oitavo da densidade média da Terra.', 'Apesar de consistir principalmente de hidrogênio e hélio, a maior parte da massa de Saturno não está na fase gasosa, porque o hidrogênio se torna um líquido não ideal quando a densidade é superior a 0,01 g/cm3, que é atingida em um raio contendo 99,9% da massa de Saturno.', 'A atmosfera externa de Saturno contém 96,3% de hidrogênio molecular e 3,25% de hélio por volume. A característica mais famosa do planeta é seu proeminente sistema de anéis, composto principalmente de partículas de gelo com uma quantidade menor de detritos rochosos e poeira.'],
    URANO: ['Urano é o sétimo planeta a partir do Sol. Seu nome é uma referência ao deus grego do céu, Urano segundo a mitologia grega, foi o bisavô de Ares. Tem o terceiro maior raio planetário e a quarta maior massa planetária do Sistema Solar.', 'O modelo padrão da estrutura de Urano é que ele consiste em três camadas: um núcleo rochoso (silicato/ferro-níquel) no centro, um manto gelado no meio e um envelope externo gasoso de hidrogênio/hélio. O núcleo é relativamente pequeno, com uma massa de apenas 0,55 massas terrestres.', 'A composição da atmosfera de Urano é diferente de seu volume, consistindo principalmente de hidrogênio molecular e hélio. A fração molar do hélio, ou seja, o número de átomos de hélio por molécula de gás, é de 0,15±0,03 na alta troposfera.'],
    NETUNO: ['Netuno é o oitavo e mais distante planeta solar conhecido do Sol. No Sistema Solar, é o quarto maior planeta em diâmetro, o terceiro planeta mais massivo e o planeta gigante mais denso. É 17 vezes a massa da Terra, mais massiva que seu quase gêmeo Urano.', 'A estrutura interna de Netuno se assemelha à de Urano. Sua atmosfera forma cerca de 5% a 10% de sua massa e se estende talvez de 10% a 20% do caminho em direção ao núcleo. Concentrações crescentes de metano, amônia e água são encontradas nas regiões mais baixas.', 'A atmosfera de Netuno é composta por 80% de hidrogênio e 19% de hélio. Uma quantidade vestigial de metano também está presente. Bandas de absorção proeminentes de metano existem em comprimentos de onda acima de 600 nm, na porção vermelha e infravermelha do espectro.']
}

const curiosidades = {
    MERCÚRIO: ['58.6 DIAS', '87.97 DIAS', '2,439.7 KM', '430°C'],
    VENUS: ['243 DIAS', '224.7 DIAS', '6,051.8 KM', '471°C'],
    TERRA: ['0,99 DIAS', '365.26 DIAS', '6.371 KM', '16°C'],
    MARTE: ['1.03 DIAS', '1.88 DIAS', '3,389.5 KM', '-28°C'],
    JUPITER: ['99.3 DIAS', '11.86 DIAS', '69,911 KM', '-108°C'],
    SATURNO: ['10.8 DIAS', '29.46 DIAS', '58,232 KM', '-138°C'],
    URANO: ['17.2 DIAS', '84 DIAS', '25,362 KM', '-195°C'],
    NETUNO: ['16.08 DIAS', '164.79 DIAS', '24,622 KM', '-201°C']
}

function mudaText(p = 0) {
    const ref = document.querySelector('#referencia')
    const texto = document.querySelector('.infoParagrafo')

    document.querySelector('.nome-planeta').textContent = ref.dataset.referencia
    texto.innerHTML = `<p>` + textos[ref.dataset.referencia][p] + `</p>
    <font><a href='https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal' target="_blank">Fonte: wikipedia</a></font>`
}

function mudaCuriosidades(el) {
    let rotacao = document.querySelector('#rotacao')
    let orbital = document.querySelector('#orbital')
    let raio = document.querySelector('#raio')
    let temp = document.querySelector('#temp')

    rotacao.textContent = curiosidades[el][0]
    orbital.textContent = curiosidades[el][1]
    raio.textContent = curiosidades[el][2]
    temp.textContent = curiosidades[el][3]
}


function mudaImgs(img, img2, img3, img4) {
    
    imagens[0].src = img
    imagens[1].src = img2
    imagens[2].src = img3
    imagens[3].src = img4

}


