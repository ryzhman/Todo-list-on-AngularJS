/**
 * Created by Олександр on 07.02.2017.
 */

export default class TodoListService{


    constructor() {
        this.todoList = [
            {"text": "Clean up flat", "urgency": 23},
            {"text": "Wash the car", "urgency": 33},
        ];
    }

    getList(){
        return this.todoList;
    }

    addNewItem (task, urgency) {
        let item = {
            text: task,
            urgency: urgency
        };
        this.todoList.push(item);
    }
}