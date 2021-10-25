import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Card } from "./Models/Card.js"
import { Task } from "./Models/Task.js"
class AppState extends EventEmitter {
  /** @type {import('./Models/Card').Card[]} */
  cards = [
    new Card(
      {
        name: "Ryan",
        color: "#4c64c6"
      }
    )]
  /** @type {import('./Models/Task').Task[]} */
  tasks = [
    new Task(
      {
        name: "ToDo"
      }
    )]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
