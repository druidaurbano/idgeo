import { Controller } from './models.js';

window.onload = () => {
  //  Cria uma nova instância do Controller para manipular a tela.
  const controller = new Controller('#map');
  //console.log(controller)

  //console.log(controller)
  controller.init();
}
