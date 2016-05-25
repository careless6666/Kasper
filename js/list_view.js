myApp.controller('ListViewController',
    function ListViewController(userservice, $scope){
		userservice.async().then(function(d) { //2. so you can use .then()
		    $scope.data = d;
		    //console.log(d);
		  });				
    }
)