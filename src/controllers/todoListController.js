/**
 * Created by Олександр on 02.02.2017.
 */
'use strict';

export default class TodoListController{

    constructor($scope, TodoListService){
        this.todoListService = TodoListService;
        this.todoList = TodoListService.getList();
    };

    addNewTodoItem () {
        this.todoListService.addNewItem(this.task ? this.task : "n/a",
            this.urgency ? this.urgency : "n/a");
        this.task = '';
        this.urgency = '';
    }
}