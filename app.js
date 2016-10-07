angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController() {
    const ctrl = this;
    ctrl.user_input = {};
    ctrl.all_complete = false;
    ctrl.check_complete = false;

//this houses 'task objects'
    ctrl.tasks = [
        {
            name: "garbage",
        },

        {
            name: "dinner"
        },

        {
            name: "finish this app"
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
        ctrl.user_input = {};
    };

    function markComplete(errand) {
        errand.done = true;
    };

//removes bottom task irrespective of link
    function removeTask(index) {
        ctrl.tasks.splice(index, 1);
//        delete ctrl.tasks[index];
        return alert(index + " was removed.");
    };

//setting functions to ctrl
    ctrl.addTask = addTask;
    ctrl.markAllComplete = markAllComplete;

    ctrl.markComplete = markComplete;
    ctrl.removeTask = removeTask;
} //end of mainController