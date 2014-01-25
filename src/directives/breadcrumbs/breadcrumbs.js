'use strict';

angular.module('ngExpress.bundles.common.breadcrumbs', [])
    .controller('BreadcrumbsCtrl', [
        '$scope', '$location', function($scope, $location) {
            $scope.breadcrumbs = [];

            $scope.navigate = function(path) {
                $location.path(path);
            };

            var fragments = $location.path().split('/').slice(1);
            if (fragments.length > 1) {
                for (var i = 0; i < fragments.length; i++) {
                    $scope.breadcrumbs.push({
                        name: fragments[i],
                        path: '/' + fragments.slice(0, i + 1).join('/'),
                        active: i === (fragments.length - 1)
                    });
                }
            }
        }
    ])
    .directive('breadcrumbs', [
        function() {
            return {
                'templateUrl': 'bower_components/ngExpress-bundles-common/src/directives/breadcrumbs/breadcrumbs.tpl.html',
                'replace': false,
                'restrict': 'EA',
                'controller': 'BreadcrumbsCtrl'
            };
        }
    ]);