app.service('StarwarsService',['$http', function($http) {
console.log('Service loaded');
    const self = this;
    self.resourceArray = {list: []};
    self.starWarsResource = {list: []};
/* GET REQUESTS */

    self.resourceSelected = function (resource) {
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${resource}/2/`
        })
        .then(function(response) {
            self.starWarsResource.list = response.data
            // $http.get(self.starWarsPerson.films[0]).then(function (response) { //This is a shortcut method of the above. 
            //     console.log(response);
            //     self.starWarsMovie = response
            // })
            
        })        
    }

	self.getResources = function (){
		$http({
			method: 'GET',
			url: 'https://swapi.co/api/'
			}).then(function(response) {
                self.resourceArray.list = response.data;
			})
    };
    
    self.getResources()
/* POST REQUESTS */









/* PUT REQUESTS */









/* DELETE REQUESTS */








/* FUNCTIONS */






  
}]);