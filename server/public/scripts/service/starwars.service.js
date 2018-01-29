app.service('StarwarsService',['$http', function($http) {
console.log('Service loaded');
    const self = this;
    self.resourceArray = {list: []};
    self.starWarsResource = {list: []};
    self.favorites = {list: []};
    // self.ids = {list: []};
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


    self.getFavorites = function() {
		$http({
			method: 'GET',
			url: '/starwars'
			}).then(function(response) {
                console.log(response);
                self.favorites.list = []; //reset to blank array.
                // self.ids.list = [];
                for (let i = 0; i < response.data.length; i++) {
                    // self.ids.list.push(response.data[i]._id) 
                    let id = response.data[i]._id
                    $http({
                        method: 'GET',
                        url: response.data[i].url
                        }).then(function(response) {
                            response.data._id = id
                            self.favorites.list.push(response.data);
                            console.log(response.data);
                            
                        })
                        .catch(function (response) {
                            console.log('error on search url', response);
                        }); 
                }
            })
            .catch(function (response) {
                console.log('error on initial get', response);
            })
    }

    self.getFavorites()

/* POST REQUESTS */

    self.addFavorite = function(url) {
        let data = {
            url: url
        }
        $http.post('/starwars', data)
            .then(function(response) {
                alert('Added to favorites!')
                self.getFavorites()
        })
            .catch(function (response) {
            console.log('error on post', response);
        });
    }





/* DELETE REQUESTS */

    self.deleteFavorite = function (id) {
        $http.delete(`/starwars/${id}`)
        .then(function (response) {
            self.getFavorites();  
        })
        .catch(function (response) {
            console.log('error on deleteFavorite :', response);
        })
    }






  
}]);