angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	/*$http.get('v1/fotos')
	.success(function(retorno) {
		$scope.fotos = retorno;		
	})
	.error(function(erro) {
		console.log("Erro: " + erro);
	});*/

	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro) {
		console.log("Erro ao carregar fotos: " + erro + " >> FotosController");
	});

	
	/*$scope.remover = function(foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function() {
			var idxFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(idxFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
		})
		.error(function(erro) {
			console.log("Erro ao remover foto: " + error);
		});
	};*/

	$scope.remover = function(foto) {
		recursoFoto.delete({fotoId: foto._id}, function() {
			var idxFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(idxFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
		}, function(erro) {
			$scope.mensagem = "Erro ao remover foto: " + error;
		});
	};

})