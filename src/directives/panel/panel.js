'use strict';

angular.module('ngExpress.bundles.common.panel', [])
    .directive('panel', [
        function() {
            return {
                'templateUrl': 'bower_components/ngExpress-bundles-common/src/directives/panel/panel.tpl.html',
                'replace': false,
                'transclude': true,
                'scope': false,
                'restrict': 'EA',
                'link': function(scope, element, attrs) {
                    console.log('panel->link');
                    console.log(attrs);
                    if (angular.isDefined(attrs.title)) {
                        element.find('.panel-title').first().text(attrs.title);
                        element.find('.panel-heading').first().click(function() {
                            var panelCollapseElement = element.find('.panel-collapse').first();
                            if (panelCollapseElement.hasClass('collapse in')) {
                                panelCollapseElement.removeClass('collapse in').addClass('collapse');
                                element.find('.glyphicon').first().removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
                            } else {
                                panelCollapseElement.removeClass('collapse').addClass('collapse in');
                                element.find('.glyphicon').first().removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
                            }
                        });
                    } else {
                        element.find('.panel-heading').first().remove();
                    }

                    if (angular.isDefined(attrs.type)) {
                        element.find('.panel').first().removeClass('panel-default').addClass('panel-' + attrs.type);
                    }
                }
            };
        }
    ]);