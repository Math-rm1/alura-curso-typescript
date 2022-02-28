import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }
}

const negociacoes = new Negociacoes();
negociacoes.adiciona(new Negociacao(new Date(), 20, 50));
negociacoes.lista();
