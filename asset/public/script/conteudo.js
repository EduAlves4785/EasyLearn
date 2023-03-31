const imagem1 = document.createElement("img");

const banco_de_conteudos=[
    {
        imagem:imagem1.src="../asset/img_conteudo/logicaalgoritimos.png",
        titulo:"Lógica de programação - algorítimos - Introdução",
        subtitulo:"Introdução",
        conteudo:"Algoritmos são sequências de instruções lógicas que resolvem problemas específicos. Eles são usados em muitas áreas da computação, incluindo programação, análise de dados, inteligência artificial e segurança cibernética.",
        subtitulo2:"O que são algoritimos",
        conteudo2:"Os algoritmos, em particular, são sequências de instruções lógicas que são capazes de resolver problemas específicos. Eles são usados em muitas áreas da computação, incluindo programação, análise de dados, inteligência artificial e segurança cibernética. Um algoritmo bem escrito é claro, preciso e eficiente, sendo capaz de resolver o problema para o qual foi projetado e lidar com diferentes situações e condições.",
        subtitulo3:"Com criar um algoritimo",
        conteudo3:"Para criar um algoritmo eficaz, é necessário seguir algumas etapas importantes. Em primeiro lugar, é necessário entender claramente o problema a ser resolvido. Em seguida, é preciso identificar as entradas necessárias e as saídas desejadas para o algoritmo, dividindo o problema em etapas menores e criando uma sequência de instruções lógicas para cada uma dessas etapas. Por fim, é necessário testar e depurar o algoritmo para garantir que ele esteja funcionando corretamente."
    }
]

// Armazena os conteúdos no local storage
function armazenarConteudos() {
    localStorage.setItem('conteudos', JSON.stringify(banco_de_conteudos));
}

// Retorna os conteúdos armazenados no local storage
function obterConteudos() {
    const conteudosArmazenados = localStorage.getItem('conteudos');
    return conteudosArmazenados ? JSON.parse(conteudosArmazenados) : [];
}

// Cria um card para cada conteúdo
function exibirConteudos() {
    const container = document.getElementById('container-md');
    container.innerHTML = '';

    const conteudos = obterConteudos();

    for (const conteudo of conteudos) {
      const titulo = conteudo.titulo;
      const imagem=conteudo.imagem

      const card = document.createElement('div');
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${titulo}.</p>
            </div>
            <button>Acessar<button/>
        </div>
      `;

      container.appendChild(card);
    }
}

// Armazena os conteúdos no local storage e exibe-os na página
armazenarConteudos();
exibirConteudos();