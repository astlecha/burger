# burger
This app allows users to create a sort of to-do list which includes different burgers they want to eat. They may then consume each burger, which will move it into a new panel for burgers that have been consumed. It was a fun project for me to create, and while it seems like a pointless app, the concept behind it is what is important. It allows users to post things, and to then modify them, all while storing this data in a MySQL database.

SO to de-brief, it integrates:
-Node
-Express
-MySQL
-Handlebars
-ORM
-MVC Design

Now let's walk through how it works step-by-step.
Firstly, the server.js file includes node packages, which can be installed in the terminal with the command 'npm install PACKAGE-NAME --save'.
The express package is responsible for the routes. The method-override package allows us to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. The body-parser package lets us parse incoming body data from the server into req.body. The one primarily used is the JSON parser for retrieving API data.


Further down in the server.js file, I also require the express-handlebars package. This is because I used handlebars templating for my front end. Handlebars is helpful because it is sort of like a combination of HTML and JavaScript. It allows you to dynamically update your page without tediously writing out the HTML you want to append in a verbose JS file.

Note that in the db folder I have included a seeds.js file and a schema.sql file. These allow us to set up our MySQL database and insert some initial table values to display on the site.

The burgers_controller.js file dictates how the server will handle our get, post, and update routes.

The config folder is where I have integrated the ORM object. It gives us a model that we can store values in and post to the MySQL database with. 

Finally, this app uses the MVC design pattern. MVC stands for Model-view-controller, and it devides the app into three interconnected parts.
