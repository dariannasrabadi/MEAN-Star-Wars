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
