app.controller('SearchController', ['StarwarsService', function(StarwarsService) {
    const self = this;
    self.starWarsResource = StarwarsService.starWarsResource

    self.resourceSelected = function (resource) {
        self.hideBorder = true
        StarwarsService.resourceSelected(resource)
        console.log(StarwarsService.starWarsResource);
        
    }

    self.resourceArray = StarwarsService.resourceArray

}]);
