import { ProxyState } from "../AppState.js";
import { Card } from "../Models/Card.js";

class CardsService {
  addCard(data) {
    const card = new Card(data)
    ProxyState.cards = [card, ...ProxyState.cards]
  }
  removeCard(id) {
    ProxyState.cards = ProxyState.cards.filter(c => c.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.cardId != id)
  }
}

export const cardsService = new CardsService()