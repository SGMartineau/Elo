angular.module('eloApp').service('leagueService', function ($http, searchLeagueService) {
    
    this.getOne = function (id) {
        return $http.get('/api/league?league=' + id).then(function (response) {
            return response.data;
        })
    }
    
    this.addOne = function (newName) {
        return $http.post('/api/unit?league=' + searchLeagueService.id, {name: newName}).then(function (response) {
            return response.data;
        })
    }
    
});