import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = data.id || generateId() // TODO change for local storage
    this.name = data.name
    this.completed = data.completed || false
    this.cardId = data.cardId
  }


  get Template() {
    return /*html*/`
    <div class="d-flex justify-content-between">
      <input ${this.completed ? 'checked' : ""} onclick="app.tasksController.checked('${this.id}')" type="checkbox" class="form-check-input">
      ${this.name}
      <button class ="btn btn-secondary" onclick="app.tasksController.removeTask('${this.id}')">x</button>
    </div>
    `
  }
}