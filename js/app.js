function alterarStatus(id) 
{
    let gameEscolhido = document.getElementById(`game-${id}`);
    let imagem = gameEscolhido.querySelector ('.dashboard__item__img');
    let botao = gameEscolhido.querySelector('.dashboard__item__button');
    let nomeJogo = gameEscolhido.querySelector ('.dashboard__item__name');

    console.log ("botão clicado");
    console.log (id);
    alert (nomeJogo.textContent);

}