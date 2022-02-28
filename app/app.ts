import { NegociacaoController } from './controllers/negociacao-controller.js';
const form = document.querySelector('form.form');

const controller = new NegociacaoController();

form.addEventListener('submit', (event: Event): void => {
  event.preventDefault();
  controller.adiciona();
});
