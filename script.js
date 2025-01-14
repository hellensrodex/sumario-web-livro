const button = document.getElementById('botao');
const text = document.getElementById('botao-texto');
const iconMinimizar = document.getElementById('icon-minimizar');
const iconExpandir = document.getElementById('icon-expandir');

button.addEventListener('click', () => {
    if (button.classList.contains('minimizar')) {
        button.classList.remove('minimizar');
        button.classList.add('expandir');
        text.textContent = 'EXPANDIR';

        iconMinimizar.classList.add('hidden');
        iconMinimizar.classList.remove('visible');
        iconExpandir.classList.add('visible');
        iconExpandir.classList.remove('hidden');
    } else {
        button.classList.remove('expandir');
        button.classList.add('minimizar');
        text.textContent = 'MINIMIZAR';

        iconExpandir.classList.add('hidden');
        iconExpandir.classList.remove('visible');
        iconMinimizar.classList.add('visible');
        iconMinimizar.classList.remove('hidden');
    }
});

const subcapitulos = document.querySelectorAll('#subcap li');
const capitulos = document.querySelectorAll('.capitulo');
const introducao = document.querySelector('.sumario-intro');

// Adicionar o evento de clique nos subcapítulos
subcapitulos.forEach(subcapitulo => {
    subcapitulo.addEventListener('click', () => {
        // Remover a classe 'selected' de todos os subcapítulos e capítulos
        subcapitulos.forEach(item => item.classList.remove('selected'));
        capitulos.forEach(capitulo => {
            const numeracao = capitulo.querySelector('#numeracao');
            if (numeracao) numeracao.classList.remove('selected');
        });

        // Adicionar a classe 'selected' ao subcapítulo clicado
        subcapitulo.classList.add('selected');

        // Atualizar a numeração do capítulo relacionado
        const capituloAtual = subcapitulo.closest('.capitulo');
        const numeracaoAtual = capituloAtual ? capituloAtual.querySelector('#numeracao') : null;

        if (numeracaoAtual) numeracaoAtual.classList.add('selected');

        // Remover a classe 'selected' da introdução
        if (introducao) introducao.classList.remove('selected');
    });
});

// Adicionar o evento de clique na introdução
if (introducao) {
    introducao.addEventListener('click', () => {
        // Remover a classe 'selected' de todos os subcapítulos e capítulos
        subcapitulos.forEach(item => item.classList.remove('selected'));
        capitulos.forEach(capitulo => {
            const numeracao = capitulo.querySelector('#numeracao');
            if (numeracao) numeracao.classList.remove('selected');
        });

        // Adicionar a classe 'selected' à introdução
        introducao.classList.add('selected');
    });
}


