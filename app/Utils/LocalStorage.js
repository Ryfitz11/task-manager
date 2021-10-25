import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { Card } from "../Models/Card.js";

export function saveState() {
  localStorage.setItem('CardApp', JSON.stringify({
    cards: ProxyState.cards,
    tasks: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('CardApp'))
  if (data != null) {
    ProxyState.cards = data.cards.map(c => new Card(c))
    ProxyState.tasks = data.tasks.map(t => new Task(t))
  }
}