
angular.module('bookstore', [])
.controller('BookController', BookController)
.controller('MainController',   MainController)
.directive('book', bookDirective)
.directive('hShow', hShow)
.directive('uniquename', uniquename)
.directive('ngHarmony', ngHarmony);

function MainController($scope){
  debugger
  $scope.name='Harmony';
}

function uniquename(){
  return {
    restrict: 'A',
    require: 'ngModel',
    link:function(scope, element, attr, ctrl){

      // ctrl.$validators.uniquename = function(value){
      //   return true;
      // };

      ctrl.$asyncValidators.uniquename = function(value){
        debugger
        var url = 'https://api.github.com/users/'
        if(value && value.length > 5)
          return $http.get(url+value);
      }
    }
  };
}

function ngHarmony(){
  return {
    controller : function($scope){
      this.addEmployee = function(){}
    }
  }
}

function hShow(){
  return {
    restrict: 'A',
    scope: {
      hShow: "="
    },
    link: function(scope, element, attr){
      // attr.$observe("hShow", function(value){
      //   var isShow = scope.$eval(value);
      //   if(isShow){
      //     element.show();
      //   }else{
      //     element.hide();
      //   }
      // });
      
      scope.$watch("hShow", function(value){
        if(value){
          element.show();
        }else{
          element.hide();
        }
      });
    }
  };
}

function bookDirective($parse){
	return{
		restrict: 'EA',
    replace: false,
    require: ['?^ngHarmony','ngModel'],
		template: '<span>{{book}}</span>',
		link: function(scope, element, attr, ctrl){
		}
	}
}

function BookController($scope){
	$scope.books = ['Angular', 'JavaScript'];	
}











//.service('BookService', BookService)
//.factory('BookFactory', bookFactory)
//.constant('AppConfig', {title: 'BookStore'})
//.value('bookValue', function(){
//	return {
//		books: ['Angular', 'JavaScript']
//	};
//})
//.filter('formatBook', formatBook);
//.config(function($provide){
	
	//$provide.factory('bookFactory', function(){
		//return {
			//	books: ['Angular', 'JavaScript']
		//};
	//});
//});






