const depoimentos = [
    {
        texto: "Sou muito feliz em fazer parte dessa equipe incrível...",
        nome: "Erick Giovane",
        cargo: "Aluno da Arena Tennistorm - Competitivo-Juvenil",
        imagem: "erick-aluno.png"
    },
    {
        texto: "A Arena Tennistorm mudou minha forma de jogar e pensar o esporte.",
        nome: "João Pedro",
        cargo: "Aluno da Arena Tennistorm - Adulto",
        imagem: "aluno2.jpg"
    },
    {
        texto: "Ambiente incrível, professores dedicados e metodologia diferenciada.",
        nome: "Ana Clara",
        cargo: "Aluna da Arena Tennistorm - Iniciante",
        imagem: "aluna3.jpg"
    }
];

let index = 0;

function atualizarDepoimento() {
    document.getElementById("texto-depoimento").innerText = depoimentos[index].texto;
    document.getElementById("nome-aluno").innerText = depoimentos[index].nome;
    document.getElementById("cargo-aluno").innerText = depoimentos[index].cargo;
    document.getElementById("imagem-aluno").src = depoimentos[index].imagem;
}

function proximo() {
    index++;
    if (index >= depoimentos.length) index = 0;
    atualizarDepoimento();
}

function anterior() {
    index--;
    if (index < 0) index = depoimentos.length - 1;
    atualizarDepoimento();
}



const professores = [
    {
        nome: "Professor Diego Tambori",
        descricao: "Especialista em formação infantil e desenvolvimento motor.",
        imagem: "diego.png"
    },
    {
        nome: "Professor Diogo Gasparini",
        descricao: "Treinador focado em alto rendimento juvenil e competições.",
        imagem: "diogo_png-removebg-preview.png"
    },
    {
        nome: "Professor Ristow",
        descricao: "Especialista em tênis adulto e aprimoramento técnico.",
        imagem: "prof3.jpg"
    },
    {
        nome: "Professor José Ganassin",
        descricao: "Especialista em formação infantil e desenvolvimento motor.",
        imagem: ""
    },
    {
        nome: "Professor Kabral",
        descricao: "Especialista em formação infantil e desenvolvimento motor.",
        imagem: ""
    },

function trocarProfessor(index) {

    // Troca conteúdo
    document.getElementById("nome-professor").innerText = professores[index].nome;
    document.getElementById("descricao-professor").innerText = professores[index].descricao;
    document.getElementById("imagem-professor").src = professores[index].imagem;

    // Remove classe ativa de todos
    document.querySelectorAll(".categoria").forEach(cat => {
        cat.classList.remove("ativa");
    });

    // Adiciona ativa no clicado
    document.querySelectorAll(".categoria")[index].classList.add("ativa");
}

]
