angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($filter) {
    const ctrl = this;
    ctrl.user_input = {};
    ctrl.all_complete = false;
    ctrl.check_complete = false;

//use to toggle 'mark complete' button text
    ctrl.incompleteTask = true;

//this houses 'task objects'
    ctrl.tasks = [
        {
            name: "garbage",
            date: ""
        },

        {
            name: "dinner",
            date: ""
        },

        {
            name: "finish this app",
            date: ""
        }
    ];

//uses a condition statement to toggle all check boxes at once w/ nav link
    function markAllComplete() {
        for(i = 0; i < ctrl.tasks.length; i++){
            ctrl.tasks[i].done = ctrl.all_complete ? false : true;
        };
        ctrl.all_complete = !ctrl.all_complete;
    };

//adds task to bottom of list
    function addTask() {
        ctrl.tasks.push(ctrl.user_input);
        ctrl.user_input.date = new Date();
        task_date = ctrl.user_input.date;

        ctrl.user_input = {};

        ctrl.getDate(task_date);
    };

//toggles task complete / incomplete; changes button text accordingly
    function toggleComplete(errand) {
        errand.done = !errand.done;
        ctrl.incompleteTask = !ctrl.incompleteTask;
    };

//removes bottom task irrespective of link
    function removeTask(index) {
        var hello = ctrl.tasks[index].name;
        ctrl.tasks.splice(index, 1);

        return alert("\'" + hello + "\'" + " was removed.");
    };

//orders by alphabetical
    function listByKey(orderByKey) {
        ctrl.tasks = $filter('orderBy')(ctrl.tasks, orderByKey, false);
    };

//runs when addTask() is called
    function getDate(task_date) {
        return task_date;
//        ctrl.tasks[index].date = $filter('date')(new Date(), 'MMM dd yyyy');
    };

//setting functions to ctrl
    ctrl.addTask = addTask;
    ctrl.markAllComplete = markAllComplete;

    ctrl.toggleComplete = toggleComplete;
    ctrl.removeTask = removeTask;

    ctrl.listByKey = listByKey;
    ctrl.getDate = getDate;

//running functions at load

} //end of mainController