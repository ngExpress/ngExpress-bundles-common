'use strict';

angular.module('mbApp')
    .directive('portalShow', [
        '$location',
        function($location) {
            return {
                'link': function(scope, element) {
                    if ($location.search().portal && $location.search().portal === 'true') {
                        element.removeClass('hidden');
                    } else {
                        element.addClass('hidden');
                    }
                }
            };
        }
    ])
    .directive('portalHide', [
        '$location',
        function($location) {
            return {
                'link': function(scope, element) {
                    if ($location.search().portal && $location.search().portal === 'true') {
                        element.addClass('hidden');
                    } else {
                        element.removeClass('hidden');
                    }
                }
            };
        }
    ]);