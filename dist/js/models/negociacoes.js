import { Negociacao } from './negociacao.js';
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    lista() {
        return this.negociacoes;
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
}
const negociacoes = new Negociacoes();
negociacoes.adiciona(new Negociacao(new Date(), 20, 50));
negociacoes.lista();
