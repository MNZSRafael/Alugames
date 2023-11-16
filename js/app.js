function AlterarStatus () 
{
    let gameEscolhido = document.getElementById(`game-${id}`);
    let imagem = gameEscolhido.querySelector ('.dashboard__item__img');
    let botao = gameEscolhido.querySelector('dashboard__item__button');
    let nome = gameEscolhido.querySelector ('dashboard__item__name');

    alert (nome.textContent);


}