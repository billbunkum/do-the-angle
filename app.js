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

    function addTask() {
        ctrl.tasks.push(ctrl.user_input);
        ctrl.user_input = {};
    };

//item is bomb.errand
    function markComplete(index_item) {
        ctrl.check_complete.index_item = true;
    };

    function markAllComplete() {
        ctrl.all_complete = ctrl.all_complete === true ? false: true;
    };

    function removeTask(index_item) {
        ctrl.tasks.pop(item);
        
        return alert(item + " was removed.");
    };

    ctrl.addTask = addTask;
    ctrl.markAllComplete = markAllComplete;
    ctrl.markComplete = markComplete;
    ctrl.removeTask = removeTask;
} //end of mainController