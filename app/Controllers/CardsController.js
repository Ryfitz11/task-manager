import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";

function _draw() {
  let cards = ProxyState.cards;
  let template = ''
  cards.forEach(c => template += c.Template);
  document.getElementById('cards').innerHTML = template

}
export class CardsController {
  constructor() {
    ProxyState.on("cards", _draw);
    ProxyState.on("tasks", _draw);

    _draw()
  }

  addCard() {
    window.event.preventDefault()
    const form = window.event.target
    const newCard = {
      // @ts-ignore
      name: form.name.value,
      // @ts-ignore
      color: form.color.value
    }
    cardsService.addCard(newCard)
  }

  removeCard(id) {
    cardsService.removeCard(id)
  }

}
