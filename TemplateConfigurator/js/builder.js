var app = angular.module('BlankApp', ['ngMaterial','mdRangeSlider']);

app.controller("MainController",['$scope',function($scope){
    
    
}]);
    
/*
 * Exemple ????
 * 
 * <ng-repeat="f in pcm.feature"> 
 * <oc-slider feature="f"></oc-slider>
 * 
 * 
 */


app.directive('ocSlider', function() {
    return {
		restrict:"E",
        scope: {
			feature: "@feature"
		},
        template: '<div class="range-slider-display">{{feature.filter.lower}}</div><div style="display:inline-block;width: calc(100% - 100px);"><range-slider lower-value="{{feature.filter.lower}}" upper-value="{{feature.filter.upper}}" min-gap="1" step="1" min="{{feature.filter.min}}" max="{{feature.filter.max}}" ></range-slider></div><div class="range-slider-display">{{feature.filter.upper}}</div>'
    };
});


app.directive('ocCheckbox', function() {
    return {
		restrict:"E",
        scope: {
            feature: "@feature"    
        },
        template: '<div flex-gt-sm="50" ng-repeat="n in feature.filter.values"><md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="feature.filter.matchValue[n]" class="md-primary">{{n}}</md-checkbox></div>'
    };
});

app.directive('ocButtun' ,function() {
	
	    return {
			restrict:"E",
			scope: {	
				feature: "= "    
			},
        template: '<md-button class ="md-button-toggle md-button md-ink-ripple" ng-click="{{feature.filter.name}}=!{{feature.filter.name}}" aria-controls="docs-menu-Demos" aria-expanded="false">Vodka</md-button></div></div>'+
		'<div layout="column" style="padding-left:20px">'+
     ' <div ng-show="{{feature.filter.name}}"></div></div>'
    };
});