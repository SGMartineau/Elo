angular.module('eloApp').service('enterGameService', function ($http, $q, searchLeagueService) {
    
    this.getData = function (id) {
        return $http.get('/api/league?league=' + id).then(function (response) {
            return response.data;
        })
    }
    
    this.updateElo = function (winner, loser) {
        var def = $q.defer();
        var bothResponses = [];
        $http.put('/api/unit?league=' + searchLeagueService.id, winner).then(function (response) {
            bothResponses.push(response.data);
            $http.put('/api/unit?league=' + searchLeagueService.id, loser).then(function (response) {
                bothResponses.push(response.data);
                def.resolve(bothResponses);
            })
        })
        return def.promise;
    }
    
});