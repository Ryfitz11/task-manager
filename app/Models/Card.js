import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Card {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color

  }

  get Template() {
    return /*html*/`
      <div class="col-4" >
        <div class="card m-2 shadow">
          <div class="card-body ">
            <h4 class="text-uppercase no-select d-flex justify-content-between"
              style="background-color: ${this.color};">
              ${this.name}
              <button class="btn btn-danger" onclick="app.cardsController.removeCard('${this.id}')">X</button>
            </h4>
            <div>
              ${this.getTasks()}
            </div>
          </div>
          <form onsubmit="app.tasksController.addTask('${this.id}')">
            <input class="form-control" name="task" minlength="3" maxlength="50" type="text" placeholder="Task Name"></input>
          </form>
        </div>
      </div>
      `
  }
  // <button class="btn btn-danger" onclick="app.cardsController.removeTask('${ProxyState.tasks.id}')">X</button>

  getTasks() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.cardId)
    let template = ''
    tasks.forEach(t => { template += t.Template })
    return template
  }
}