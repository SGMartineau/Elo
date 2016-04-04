angular.module('eloApp').controller('searchLeaguesCtrl', function ($scope, searchLeagueService) {
    
    $scope.getLeagues = function () {
        searchLeagueService.getCall().then(function(response){
            $scope.leagues = response;
        })
    }
    
    $scope.getLeagues();
    
    $scope.updateLeague = function (id) {
        searchLeagueService.id = id;
    }
    
});