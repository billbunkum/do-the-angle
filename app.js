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
//            state: false,
//            timestamp: Date.now();
        },
        {
            name: "dinner",
//            state: false,
//            timestamp: Date.now();
        }
    ];

    function markAllComplete() {
        ctrl.all_complete = ctrl.all_complete === true ? false: true;
    };

    function addTask() {
        ctrl.tasks.push(ctrl.user_input);
        ctrl.user_input = {};
    };

//item is bomb.errand
    function markComplete(errand) {
        ctrl.check_complete.errand.$index = true;
    };

    function removeTask(errand) {
        ctrl.tasks.pop(errand.$index);
        
        return alert(errand.$index + " was removed.");
    };

//setting functions to ctrl
    ctrl.addTask = addTask;
    ctrl.markAllComplete = markAllComplete;

    ctrl.markComplete = markComplete;
    ctrl.removeTask = removeTask;
} //end of mainController