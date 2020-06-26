class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;

    this.largura = 50;
    this.altura = 50;
    this.vidas = this.inicial;
    this.xInicial = 20;
    this.y = 20;
    this.distancia = 0;
    this.novaVidaXInicial = -50;
    this.novaVidaX = this.novaVidaXInicial;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.xInicial * (i + 1);
      image(imagemVida, posicao + margem, this.y, 25, 25);
    }

    this.novaVida();
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
  }

  exibeNovaVida() {
    this.novaVidaX = width;
  }

  novaVida() {
    image(imagemVida, this.novaVidaX, height - 240, this.largura, this.altura);
    this.novaVidaX -= 5;
  }
}
