angular.module('app', [
    'ui.router',
])

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad

function config($urlRouterProvider, $stateProvider) {

                $urlRouterProvider.otherwise('/');

             $stateProvider
              .state('home',   {url: '/home', controller: 'Ctrl', templateUrl: 'templates/home.tmpl.html' })
              .state('formation',   {url: '/formation', controller: 'Ctrl', templateUrl: 'templates/formation.tmpl.html' })
              .state('experience',   {url: '/experience', controller: 'Ctrl', templateUrl: 'templates/experience.tmpl.html' })
              .state('competence',   {url: '/competence', controller: 'Ctrl', templateUrl: 'templates/competence.tmpl.html' })
              .state('projet',   {url: '/projet', controller: 'Ctrl', templateUrl: 'templates/projet.tmpl.html' })
              .state('language',   {url: '/language', controller: 'Ctrl', templateUrl: 'templates/language.tmpl.html' })
              .state('other',   {url: '/other', controller: 'Ctrl', templateUrl: 'templates/other.tmpl.html' })
              .state('para-universitaire',   {url: '/para-universitaire', controller: 'Ctrl', templateUrl: 'templates/para-universitaire.tmpl.html' })
              .state('hobby',   {url: '/hobby', controller: 'Ctrl', templateUrl: 'templates/hobby.tmpl.html' })
}
angular.module('app')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

/**
 * Created by obito on 30/04/16.
 */
angular.module('app')
.controller('Ctrl', function ($scope) {
  $scope.clicked=function() {
  console.warn("cliiiiiiiiiiiiiiiiked");
  }

});
