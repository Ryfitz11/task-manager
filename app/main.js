import { CardsController } from "./Controllers/CardsController.js";
import { TasksController } from "./Controllers/TasksController.js"


class App {
  cardsController = new CardsController();
  tasksController = new TasksController();
}

window["app"] = new App();
