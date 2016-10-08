angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($filter) {
    const ctrl = this;
    ctrl.user_input = {};
    ctrl.all_complete = false;
    ctrl.check_complete = false;
    ctrl.alert_button = false;

//this houses 'task objects'
    ctrl.tasks = [
        {
            name: "garbage",
            date: "01-06-2016 @ 7:02:34PM"
        },

        {
            name: "dinner",
            date: "10-05-2012 @ 7:02:34AM"
        },

        {
            name: "finish this app",
            date: "10-03-2015 @ 3:02:34PM"
        }
    ];

//uses a condition statement to toggle all check boxes at once w/ nav link
    function markAllComplete() {
        for(i = 0; i < ctrl.tasks.length; i++){
            ctrl.tasks[i].done = ctrl.all_complete ? false : true;
        };
        ctrl.all_complete = !ctrl.all_complete;
        ctrl.alert_button = !ctrl.alert_button;
    };

//adds task to bottom of list
    function addTask() {
        ctrl.tasks.push(ctrl.user_input);
        ctrl.user_input.date = new Date();

        ctrl.user_input = {};

    };

//toggles task complete / incomplete; changes button text accordingly
    function toggleComplete(errand) {
        errand.done = !errand.done;
//ng-show for button toggle -> 'mark' & 'reset'
        errand.mark_button = !errand.mark_button;

//  trying to define so i can sort by Completion 
//        if (errand.done) {
//            ctrl.tasks.priority = true;
//        };
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

//setting functions to ctrl
    ctrl.addTask = addTask;
    ctrl.markAllComplete = markAllComplete;

    ctrl.toggleComplete = toggleComplete;
    ctrl.removeTask = removeTask;

    ctrl.listByKey = listByKey;

} //end of mainController