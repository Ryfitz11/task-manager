import { tasksService } from "../Services/TasksService.js";
import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  tasks.forEach(t => template += t.Template);

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
      id: generateId(),
      completed: false,
      cardId: cardId
    }
    tasksService.addTask(newTask)
  }

  checked(taskId) {
    tasksService.checked(taskId)
  }
  removeTask(id) {
    let remove = confirm("Are you sure you want to delete this task?")
    if (remove == true) {
      tasksService.removeTask(id)
    }
  }

}