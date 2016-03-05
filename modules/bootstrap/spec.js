describe('Controller and Scope', function(){

  beforeEach(module('bookstore'));

  var $controller, $scope;

  angular.module('bookstore')
    .controller('BooksController', BooksController);

  function BooksController($scope){
    $scope.books = ['JavaScript', 'Angular'];
  }

  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller');
    $scope  = $injector.get('$rootScope').$new();
    $controller('BooksController', {$scope: $scope});
  }));

  describe('Controller', function(){

    it('Should be a function', function(){
      expect(typeof($controller)).toEqual('function');
    });

    xit('Should be called with at least one paramater', function(){
      // http://tobyho.com/2011/12/15/jasmine-spy-cheatsheet/
      console.log(this)
      spyOn(obj, '$controller');
      obj.$controller('BooksController', {$scope: $scope});
      expect(obj.$controller).toHaveBeenCalled();

      obj.$controller('BooksController', {$scope: $scope});
      expect(obj.$controller).toHaveBeenCalledWith('BooksController', {$scope: $scope});
    });
  });

  describe('$Scope', function(){

    it('Should be defined', function(){
      expect($scope).toBeDefined();
    });

    it('Should have a list of books', function(){
      expect($scope.books).toBeDefined();
      expect($scope.books.length).toEqual(2);
      expect($scope.books[0]).toEqual('JavaScript');
    });
  });
});
