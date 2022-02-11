import cardsTemplate from '../templates/card.hbs';
import cards from './menu.json';

const markup = cardsTemplate(cards);
const listMenu = document.querySelector('.js-menu');

listMenu.insertAdjacentHTML('afterbegin', markup);
