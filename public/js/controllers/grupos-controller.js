angular.module('alurapic').controller('GruposController', function($scope, $http){

	$scope.grupos = [];

	$http.get('v1/grupos')
	.success(function(grupo) {
		$scope.grupos = grupo;
		console.log(grupo);
	})
	.error(function(erro) {
		console.log('Erro ao recupera grupos: ' + erro);
	});
});