myApp.controller('TilePanelController',
    function TilePanelController($scope, userservice){
				userservice.async().then(function(d) { 
			    if(d.status == 200){
			    	$scope.Users = d.data;
			    }
		    
     	  });		
    }
)