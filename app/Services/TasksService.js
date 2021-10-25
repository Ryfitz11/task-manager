import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  addTask(newTask) {
    const task = new Task(newTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
    let taskTotal = 0
    taskTotal++
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  checked(taskId) {
    let found = ProxyState.tasks.find(t => taskId == t.id)
    found.completed = !found.completed
    ProxyState.tasks = ProxyState.tasks
    let taskComp = 0
    taskComp++
  }
}

export const tasksService = new TasksService()