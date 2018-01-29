app.controller('FavoritesController', ['StarwarsService', function(StarwarsService) {
    const self = this;
            self.favorites = StarwarsService.favorites
            // self.ids = StarwarsService.ids
            // self.information = [self.favorites, self.ids]
            self.deleteFavorite = function (id) {
                if (confirm('Are you sure you want to remove this from favorites?') == true) {
                    StarwarsService.deleteFavorite(id);  
                }
            }
}]);
