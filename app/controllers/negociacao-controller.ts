import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector('.form-group input#data');
    this.inputQuantidade = document.querySelector(
      '.form-group input#quantidade',
    );
    this.inputValor = document.querySelector('.form-group input#valor');
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);

    const negociacoes = this.negociacoes.lista();
    console.log(negociacoes);

    this.limparFormulario();
  }

  public criaNegociacao(): Negociacao {
    const regExp = /-/g;
    const data = new Date(this.inputData.value.replace(regExp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(data, quantidade, valor);
  }

  public limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }
}
