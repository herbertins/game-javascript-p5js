let fita;
let mapa = []

class Jogo {
  constructor() {
    this.mapa = []
    this.indice = 0
  }

  setup() {
    fita.mapa.forEach(({ inimigo, velocidade }) => {
      this.mapa.push({
        inimigo,
        velocidade,
      })
    })
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao()

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)


  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    const linhaAtual = this.mapa[this.indice]

    const inimigo = inimigos[linhaAtual.inimigo]
    inimigo.alteraVelocidade(linhaAtual.velocidade)

    const inimigoInvisivel = inimigo.x < -inimigo.largura

    cenario.exibe();
    cenario.move();

    pontuacao.exibe()
    pontuacao.adicionarPonto()
    vida.draw()

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigo.exibe()
    inimigo.move()

    if (inimigoInvisivel) {
      this.indice++
      inimigo.reaparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
    }

    if (personagem.estaColidindo(vida)) {
      vida.ganhaVida()
    }

    if (linhaAtual.vida) {
      vida.exibeNovaVida()
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      personagem.tornarInvencivel()
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3)
        noLoop()
      }
    }
  }
}
