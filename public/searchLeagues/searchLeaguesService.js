angular.module('eloApp').service('searchLeagueService', function ($http) {
    
    this.id = "";
    
    this.getCall = function () {
        return $http.get('/api/league').then(function (response) {
            return response.data;
        })
    }
    
});