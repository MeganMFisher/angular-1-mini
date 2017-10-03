angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = ['Betty', 'Fred', 'Wilma']

    $scope.addFriend = function(friend) {
        $scope.friends.push(friend)
    }
})