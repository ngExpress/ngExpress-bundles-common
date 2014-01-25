define(['angular', '../../common'], function(angular, mwCommon) {
    'use strict';

    mwCommon.controller('NavbarCtrl', [
        '$scope', '$location', '$route', function($scope, $location, $route) {
            $scope.routes = [];

            var portal = $location.search().portal;
            console.log('portal: ' + portal);
            if (portal && portal === true){
                $scope.portal = portal;
            }

            $scope.$watch($route.routes, function() {
                angular.forEach($route.routes, function(value, key) {
                    var fragments = key.split('/');
                    if (fragments.length === 2) {
                        this.push({
                            name: fragments[1].length === 0 ? 'home' : fragments[1],
                            navigate: function() {
                                $location.path(key);
                            },
                            isActive: function() {
                                if (key.length > 1) {
                                    return $location.path().substring(0, key.length) === key;
                                }
                                return $location.path() === '/';
                            }
                        });
                    }
                }, $scope.routes);
            });
        }
    ]);

    mwCommon.directive('navbar', [
        function() {
            return {
                'templateUrl': 'scripts/common/directives/navbar/navbar.tpl.html',
                'replace': false,
                'restrict': 'EA',
                'controller': 'NavbarCtrl'
            };
        }
    ]);
});