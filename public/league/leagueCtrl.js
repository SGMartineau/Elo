angular.module('eloApp').controller('leagueCtrl', function (searchLeagueService, $scope, leagueService) {
    
    
    $scope.getLeague = function () {
        leagueService.getOne(searchLeagueService.id).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.units.length; i++) {
                response.units[i].rating = Math.round(response.units[i].rating);
            }
            $scope.league = response;
        })
    }
    
    $scope.getLeague();
    
    $scope.addPlayer = function () {
        leagueService.addOne($scope.newPlayer).then(function (response) {
            $scope.newPlayer = null;
            $scope.league = response;
            console.log(response);
        })
    }
    
});