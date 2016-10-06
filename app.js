angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController() {
    const ctrl = this;
    ctrl.user_input = {};
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

    function addTask() {
        ctrl.tasks.push(ctrl.user_input);
        ctrl.user_input = {};
    };

//item is bomb.errand
    function markComplete(item) {
        item = item + "complete.";
        ctrl.check_complete = true;

        return item;
    };

    function removeTask(item) {
        ctrl.tasks.pop(item);
        
        return alert(item + " was removed.");
    };

    ctrl.addTask = addTask;
    ctrl.markComplete = markComplete;
    ctrl.removeTask = removeTask;
} //end of mainController