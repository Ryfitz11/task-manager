import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  addTask(newTask) {
    const task = new Task(newTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}

export const tasksService = new TasksService()