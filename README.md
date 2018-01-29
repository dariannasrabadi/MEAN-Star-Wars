# Starwars MEAN Stack Assignment To-Do (Rough list)

## Setup

- [x] New Folder, git init, create github repository.

- [x] Create readme file.

- [x] npm install angular angular-animate angular-aria angular-material angular-messages angular-route express body-parser mongoose --save

- [x] Create base set-up files from client to server side. (index.html, server.js, client.js, styles.css, etc)

- [x] place all vendors into the vendors folder.


## Client Side 

- [x] Link all the necessary files to the index.html.

- [x] create layout for index html that includes an ng-view are for the search/favorites view. 

- [x] Nav bar to swap between the homepage view and the search/favorites view. 

- [ ] Try Angular Material... TRY.


### Search View

- [x] Dropdown menu and an input bar for keyword functionality.

- [x] Angular functionality in general.

- [x] Display area for the results of the search. 

- [x] Button/Star/Image user can click to favorite the item.

- [x] Create GET/POST feature to display the results of the search and post the favorite images of the user. 


### Favorites View

- [x] Display area for all the favorited items

- [x] Same Button/Star/Image that the user can click again to remove favorite status.

- [x] Create GET/DELETE feature to display the results of the favorited items and delete the favorite images removed of the user. 

## Server Side

- [x] Require all files needed in each area (example, express, body-parser, route, etc).

- [x] create a schema in the module for data to be stored. 

- [x] In the router create proper GET/POST/PUT/DELETE functionalities depending on what request came from the client.



#Reflection

I unfortunately got was sick throughout the weekend and was not able to spend as much time as I wanted in exploring Angular Material as I wanted to. It in turn just resulted into me just copy pasting the styles that were in the documentation. The part I did not really know how to do at first then figured out by research was grabbing the title property from swapi via "(first, second) in vm.resourceArray" it splits it and you are able to call what you want. During the showing of data I also used ng-if then used the value I was choosing to display example: "<"ng-if="data.classification">  {{data.classification}}" <>". This made it so that It just displays the information if it matches the search limiting my services and controllers. I used the same code in my favorites by just storing the url and recalling it and running it again based on what url was saved to show the favorite. 
