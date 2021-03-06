"use strict";

/**
 * Created by Олександр on 02.02.2017.
 */
function todoListCtrl($scope) {
    $scope.todoList = [{ "text": "Clean up flat", "urgency": 23 }, { "text": "Wash the car", "urgency": 33 }];

    $scope.addNewItem = function () {
        console.log($scope.urgency);
        console.log($scope);
        var item = { "text": $scope.text,
            "urgency": $scope.urgency,
            "done": ""
        };
        $scope.todoList.push(item);
        $scope.text = '';
    };
}

angular.module('app').controller('todoListCtrl', todoListCtrl);
//# sourceMappingURL=todoListController.js.map