var app = angular.module('BlankApp', ['ngMaterial','mdRangeSlider']);

app.controller("MainController",['$scope',function($scope){
    
    
}]);
    
/*
 * Exemple ????
 * 
 * <ng-repeat="f in pcm.feature"> 
 * <oc-slider min={{f.min}} max={{f.max}} lower={{f.lower}} upper={{f.upper}}></oc-slider>
 * 
 * 
 */


app.directive('oc-slider', function() {
    return {
        scope: {
			feature: "@feature"
		}
        template: '{{feature.filter.lower}}<range-slider lower-value="{{feature.filter.lower}}" upper-value="{{feature.filter.upper}}" min-gap="1" step="1" min="{{feature.filter.min}}" max="{{feature.filter.max}}" ></range-slider>{{feature.filter.upper}}'
    };
});


app.directive('oc-checkbox', function() {
    return {
        scope: {
            feature: "@feature"    
        }
        template: '<div flex-gt-sm="50" ng-repeat="n in {{feature.filter.values}}"><md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="feature.filter.matchValue[n]" class="md-primary">{{n}}</md-checkbox></div>'
    };
});


