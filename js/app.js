
requirejs.config({
  paths: {
            angular: "angular",
            'angular-mocks': "angular-mocks",
            'angular-route': "angular-route",
            'angular-resource': "angular-resource",
            'jquery': 'jquery-2.2.4',
            'bootstrap': '/extern/bootstrap-3.3.6-dist/js/bootstrap'
	      },
	shim:{
		angular: {
            exports: "angular"
        },
		'angular-mocks': {
		    deps: ["angular"],
        },
		'angular-route': {
		    deps: ["angular"],
		},
		bootstrap: {
		    deps: ['jquery']
	    },
        init: {
            deps: ["angular"],
        },
        e2e: {
            deps: ["init"],
        },
		'angular-resource': {
		    deps: ["angular"],
		},
		list_view: {
		    deps: ["init"],
		},
		'trello-panel_view': {
		    deps: ["init"],
		},
		title_panel_view: {
		    deps: ["init"],
		},
		

	}
});

require(['jquery', 'bootstrap', 'angular', 'angular-mocks', 'angular-route', 'angular-resource', 'init', 'e2e', 'list_view', 'title_panel_view', 'trello-panel_view'], function () {
    angular.bootstrap(document, ['myAppE2E']);
    });

var myApp;