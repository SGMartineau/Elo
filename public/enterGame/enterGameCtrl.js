angular.module('eloApp').controller('enterGameCtrl', function ($scope, searchLeagueService, enterGameService) {
    
    $scope.getTeams = function () {
        enterGameService.getData(searchLeagueService.id).then(function (response) {
            $scope.teams = response;
        });
    }
    
    $scope.getTeams();
    
    $scope.enterGame = function() {
        
        $scope.winner.games++;
        $scope.loser.games++;
        
        var winnerOriginal = Math.pow(10, ($scope.winner.rating / 400));
        var loserOriginal = Math.pow(10, ($scope.loser.rating / 400));
        
        var winnerChances = winnerOriginal / (winnerOriginal + loserOriginal);
        var loserChances = loserOriginal / (winnerOriginal + loserOriginal);
        
        $scope.winner.rating = $scope.winner.rating + (32 * (1 - winnerChances));
        $scope.loser.rating = $scope.loser.rating + (32 * (0 - loserChances));
        
        enterGameService.updateElo($scope.winner, $scope.loser).then(function (response) {
            $scope.winner = null;
            $scope.loser = null;
        })
    }
    
});