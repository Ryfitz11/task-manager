import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

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
    ProxyState.on("cards", saveState)
    ProxyState.on("tasks", saveState)
    loadState()
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
    let remove = confirm("Are you sure you want to delete this List?")
    if (remove == true) {
      cardsService.removeCard(id)
    }
  }

}
