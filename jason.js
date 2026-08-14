// Base de dados dos carros (Formato Objeto JS / JSON)
const carros = [
    {
        nome: "Porsche 911 GT3",
        descricao: "Desempenho de pista ajustado à perfeição para as ruas. Precisão em cada curva.",
        imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
        link: "https://www.porsche.com"
    },
    {
        nome: "Aston Martin DB11",
        descricao: "Elegância britânica com motor V12 twin-turbo. O verdadeiro significado de Gran Turismo.",
        imagem: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop",
        link: "https://www.astonmartin.com"
    },
    {
        nome: "BMW M8 Competition",
        descricao: "Potência bruta combinada com o mais alto nível de conforto executivo e tecnologia.",
        imagem: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
        link: "https://www.bmw.com"
    }
];

// Função para renderizar os cards na tela
function carregarCarros() {
    const container = document.getElementById('grid-carros');
    if (!container) return;

    // Converte os dados do objeto em elementos HTML
    container.innerHTML = carros.map(carro => `
        <div class="card">
            <img src="${carro.imagem}" alt="${carro.nome}">
            <div class="card-content">
                <h3 class="card-title">${carro.nome}</h3>
                <p class="card-desc">${carro.descricao}</p>
                <a href="${carro.link}" target="_blank" rel="noopener" class="card-link">Saiba Mais &rarr;</a>
            </div>
        </div>
    `).join('');
}

// Executa o carregamento quando o documento terminar de carregar
document.addEventListener('DOMContentLoaded', carregarCarros);