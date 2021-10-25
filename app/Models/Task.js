import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = data.id || generateId() // TODO change for local storage
    this.name = data.name
    this.completed = false // TODO change for local storage
    this.cardId = data.cardId
  }


  get Template() {
    return `<div> ${this.name}</div>`
  }
}