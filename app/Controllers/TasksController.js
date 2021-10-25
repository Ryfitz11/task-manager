import { tasksService } from "../Services/TasksService.js";
import { ProxyState } from "../AppState.js";

function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  tasks.forEach(t => template += t.Template);
  document.getElementById('tasks').innerHTML = template
}
export class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    _draw()
  }
  addTask(cardId) {
    window.event.preventDefault()
    const form = window.event.target
    let newTask = {
      // @ts-ignore
      name: form.task.value,
      taskId: cardId
    }
    tasksService.addTask(newTask)
  }

  removeTask(id) {
    tasksService.removeTask(id)
  }

}