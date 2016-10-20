angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($filter) {
    const ctrl = this;
    ctrl.user_input = {};
    ctrl.all_complete = false;
    ctrl.alert_button = false;
    ctrl.current_sort = 'name';

//this houses 'task objects'
    ctrl.tasks = [

    ];

//uses a condition statement to toggle all check boxes at once w/ nav link
    function markAllComplete() {
        for(i = 0; i < ctrl.tasks.length; i++){
            ctrl.tasks[i].done = ctrl.all_complete ? false : true;
//toggle mark/reset button
            ctrl.tasks[i].mark_button = ctrl.all_complete ? false : true;
        };
        ctrl.all_complete = !ctrl.all_complete;

//bootstrap alert message appears or disappears
        ctrl.alert_button = !ctrl.alert_button;

//helper function which 'orders by completion'
        ctrl.extra();
    };

//ordering by completion; NEED because function call/button click exists outside of 'errand' loop
    function extra () {
        if (errand.done) {
            ctrl.tasks.done = true;
        } else {
            ctrl.tasks.done = false;
        };
    }

//adds task to bottom of list
    function addTask() {
//        ctrl.tasks.newlist.push(ctrl.user_input);
        ctrl.tasks.push(ctrl.user_input);
        ctrl.user_input.date = new Date();
//setting default values so 'order by completions works consistently'
        ctrl.user_input.mark_button = false; 
        ctrl.user_input.done = false;

        ctrl.user_input = {};

    };

//toggles task complete / incomplete; changes button text accordingly
    function toggleComplete(errand) {
//ng-show for check mark
        errand.done = !errand.done;

//ng-show for button toggle -> 'mark' & 'reset'
        errand.mark_button = !errand.mark_button;
    };

//removes bottom task irrespective of link
    function removeTask(index) {
        var hello = ctrl.tasks[index].name;
        ctrl.tasks.splice(index, 1);

        return alert("\'" + hello + "\'" + " was removed.");
    };

//orders by alphabetical
//does not TOGGLE
    function listByKey(orderByKey) {
        if (orderByKey == 'done'){
            ctrl.tasks = $filter('orderBy')(ctrl.tasks, orderByKey, true);
        } else if (orderByKey == 'name') {
            ctrl.tasks = $filter('orderBy')(ctrl.tasks, orderByKey, false);
        } else if (orderByKey == 'date') {
            ctrl.tasks = $filter('orderBy')(ctrl.tasks, orderByKey, false);
        };
        // if (orderByKey == ctrl.current_sort){
        //     ctrl.tasks = $filter('orderBy')(ctrl.tasks, orderByKey, true);
        // } else {
        //     ctrl.tasks = $filter('orderBy')(ctrl.tasks, orderByKey, false);
        // };
        // ctrl.current_sort = orderByKey;
        // console.log(ctrl.current_sort);
    };

//create a new list & resets ctrl.tasks
    function createNew() {
        for (i = 0; i <= ctrl.ListSave.length; i++){
            if (ctrl.listSave[i] != undefined){
                ctrl.listSave[i+1].push(ctrl.tasks);
            } else {
                ctrl.listSave.push(ctrl.tasks);
            };
        };

    };

//setting functions to ctrl
    ctrl.addTask = addTask;
    ctrl.markAllComplete = markAllComplete;

    ctrl.toggleComplete = toggleComplete;
    ctrl.removeTask = removeTask;

    ctrl.listByKey = listByKey;

    ctrl.extra = extra;

    ctrl.createNew = createNew;
} //end of mainController