myApp.controller('TilePanelController',
    function TilePanelController($scope, userservice){
				userservice.async().then(function(d) { 
			    if(d.status == 200){
			    	$scope.Users = d.data;
			    }
     	  });

     	   $scope.ShowProfile = function(e){
	     	  	userservice.Preview.Name = e.Name;
	     	  	userservice.Preview.Mail = e.Mail;
	     	  	$("#userModal").modal();
     	  }				
    }
)