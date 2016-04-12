angular.module("exe", []).
controller("dado", function($scope){
	
	$scope.dados=[
		"imagens/img1.jpg",
		"imagens/img2.jpg",
		"imagens/img3.jpg",
		"imagens/img4.jpg",
		"imagens/img5.jpg",
		"imagens/img6.jpg"
	];

	$scope.Sorteia=function(){
		return embaralha($scope.dados)
	}
	
	function embaralha(array){
		var m = array.lenght, t, i;
		while(m){
			i=Math.floor(Math.random()* m--);
			t=array[m];
			array[m]=array[i];
			array[i]=t;
		}
		return array;
	}
	
	
});