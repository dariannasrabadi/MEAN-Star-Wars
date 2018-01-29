app.service('StarwarsService',['$http', function($http) {
console.log('Service loaded');
    const self = this;
    self.resourceArray = {list: []};
    self.starWarsResource = {list: []};
/* GET REQUESTS */

    self.resourceSelected = function (resource, info) {
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${resource}/?search=${info}`
        })
        .then(function(response) {
            self.starWarsResource.list = response.data
        })        
        .catch(function (response) {
            console.log('error on search get', response);
        });
    }

	self.getResources = function (){
		$http({
			method: 'GET',
			url: 'https://swapi.co/api/'
			}).then(function(response) {
                self.resourceArray.list = response.data;
            })
            .catch(function (response) {
                console.log('error on initial get', response);
            });
    };
    
    self.getResources()
/* POST REQUESTS */

self.addFavorite = function(url) {
    let data = {
        url: url
    }
    $http.post('/starwars', data)
        .then(function(response) {
            alert('Added to favorites!')
    })
        .catch(function (response) {
        console.log('error on post', response);
    });
}





/* DELETE REQUESTS */








  
}]);