function preload() {
  fita = loadJSON('fita/fita.json');

  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('assets/imagens/telaInicial.png');
  imagemVida = loadImage('assets/imagens/coracao.png');
  imagemGameOver = loadImage('assets/imagens/game-over.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
  fonteTelaInicial = loadFont('assets/imagens/fonteTelaInicial.otf');
  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('assets/sons/somPulo.mp3');
}
