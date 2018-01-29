app.controller('SearchController', ['StarwarsService', function(StarwarsService) {
    const self = this;
    self.starWarsResource = StarwarsService.starWarsResource

    self.resourceSelected = function (resource, info) {
        self.hideBorder = true
        StarwarsService.resourceSelected(resource, info)
    }

    self.resourceArray = StarwarsService.resourceArray

    self.addFavorite = function(data) {
        StarwarsService.addFavorite(data);
    }

}]);
