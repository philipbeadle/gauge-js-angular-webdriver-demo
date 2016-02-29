angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Angular testing with Gauge and webdriver.io';
    vm.searchInput = '';
    vm.festivals = [
        {
            name: 'Burning Man',
            location: 'USA - Nevada',
            attended: false
        },
        {
            name: 'Burning Seed',
            location: 'Aus - Wagga',
            attended: true
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Location Ascending',
            key: 'location',
            reverse: false
        },
        {
            id: 2,
            title: 'Location Descending',
            key: 'location',
            reverse: true
        },
        {
            id: 3,
            title: 'Name Ascending',
            key: 'name',
            reverse: false
        },
        {
            id: 4,
            title: 'Name Descending',
            key: 'name',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];

    vm.new = {};
    vm.addFestival = function() {
        vm.festivals.push(vm.new);
        vm.new = {};
    };
});
