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
			min: "@min",
            max: "@max",
            lower: "@lower",
            upper: "@upper"
		}
        template: '{{lower}}<range-slider lower-value="{{lower}}" upper-value="{{upper}}" min-gap="1" step="1" min="{{min}}" max="{{max}}" ></range-slider>{{upper}}'
    };
});


app.directive('oc-checkbox', function() {
    return {
        template: '<div flex-gt-sm="50" ng-repeat="n in number"><md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="data.cb9" class="md-primary">{{n}}</md-checkbox></div>'
    };
});
