/**
 * Created by Олександр on 02.02.2017.
 */
'use strict';

import angular from "angular";
import todoListService from "./services/todoListService";
import todoListController from "./controllers/todoListController";

angular.module('app', [])
    .constant('appConfig', {name: 'app'})
    .controller("todoListCtrl", todoListController)
    .service("TodoListService", todoListService);






