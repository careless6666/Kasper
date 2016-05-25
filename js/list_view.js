myApp.controller('ListViewController',
    function ListViewController(userservice, $scope){
		userservice.async().then(function(d) { 
			    if(d.status == 200){
			    	$scope.Users = d.data;
			    }
		    
     	  });				
    }
)