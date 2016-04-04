angular.module('eloApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('landing', {
        url: '/',
        templateUrl: 'landing/landing.html',
        controller: 'landingCtrl'
    }).state('league', {
        url: '/league',
        controller: 'leagueCtrl',
        templateUrl: 'league/league.html'
    }).state('makeLeague', {
        url: '/makeLeague',
        templateUrl: 'makeLeague/makeLeague.html',
        controller: 'makeLeagueCtrl'
    }).state('enterGame', {
        url: '/enterGame',
        templateUrl: 'enterGame/enterGame.html',
        controller: 'enterGameCtrl'
    }).state('searchLeagues', {
        url: '/searchLeagues',
        templateUrl: '/searchLeagues/searchLeagues.html',
        controller: 'searchLeaguesCtrl'
    });
    
    $urlRouterProvider.otherwise('/');
    
});