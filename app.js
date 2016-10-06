angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController() {
    const ctrl = this;
    ctrl.user_input = {};

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

    ctrl.addTask = addTask;

} //end of mainController