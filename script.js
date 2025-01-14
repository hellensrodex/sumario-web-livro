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

subcapitulos.forEach(subcapitulo => {
    subcapitulo.addEventListener('click', () => {
    
        subcapitulos.forEach(item => item.classList.remove('selected'));
        capitulos.forEach(capitulo => {
            const numeracao = capitulo.querySelector('#numeracao');
            if (numeracao) numeracao.classList.remove('selected');
        });

        subcapitulo.classList.add('selected');

        const capituloAtual = subcapitulo.closest('.capitulo');
        const numeracaoAtual = capituloAtual ? capituloAtual.querySelector('#numeracao') : null;

        if (numeracaoAtual) numeracaoAtual.classList.add('selected');

        if (introducao) introducao.classList.remove('selected');
    });
});

if (introducao) {
    introducao.addEventListener('click', () => {

        subcapitulos.forEach(item => item.classList.remove('selected'));
        capitulos.forEach(capitulo => {
            const numeracao = capitulo.querySelector('#numeracao');
            if (numeracao) numeracao.classList.remove('selected');
        });

        introducao.classList.add('selected');
    });
}


