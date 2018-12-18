angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {};
	ddo.restrict = 'AE';
	
	ddo.scope = {
		titulo: "@"
	};

	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function(){

	var ddo = {};
	ddo.restrict = "AE";

	ddo.scope = {
		titulo: "@",
		url: "@",
	};

	ddo.template = '<img class="img-responsive center-block" alt="{{titulo}}" src="{{url}}">';

	return ddo;
})
.directive('botaoPerigo', function() {
	
	var ddo = {};

	ddo.scope = {
		nome: "@",
		acao: "&"
	}

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

	return ddo;
});