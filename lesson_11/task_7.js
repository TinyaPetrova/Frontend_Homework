const toDoList = ["Прогулка с собакой", "Домашка по JS", "Обед"];
const todayTasks = toDoList.slice();

// добавляем задачу после "Прогулки с собакой"
todayTasks.splice(1, 0, "Помыть собаке лапы");
console.log("Исходный список задач: ", toDoList);

// удаляем последнюю задачу
todayTasks.splice(-1);
console.log("Сегодняшние задачи: ", todayTasks);
